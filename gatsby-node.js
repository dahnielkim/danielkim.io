const path = require('path');

/**
 * Creates tag pages for single tags and all tags
 */
const createTagPages = (createPage, posts) => {
  const postsByTag = {};

  if (posts) {
    posts.forEach(({ node }) => {
      if (node.frontmatter.tags) {
        node.frontmatter.tags.forEach(tag => {
          if (!postsByTag[tag]) {
            postsByTag[tag] = [];
          }

          postsByTag[tag].push(node);
        });
      }
    });
  }

  const tags = Object.keys(postsByTag);

  createPage({
    path: '/tags',
    component: path.resolve('src/templates/allTagsIndex.js'),
    context: {
      tags: tags.sort(),
    },
  });

  tags.forEach(tagName => {
    createPage({
      path: `/tags/${tagName}`,
      component: path.resolve('src/templates/singleTagsIndex.js'),
      context: {
        posts: postsByTag[tagName],
        tagName,
      },
    });
  });
};

/**
 * Creates the Notes navigation page
 */
const createBlogPage = (createPage, posts) => {
  createPage({
    path: '/notes',
    component: path.resolve('src/templates/allBlogs.js'),
    context: {
      pathSlug: 'notes',
      posts,
    },
  });
};

/**
 * Creates the About navigation page
 */
const createAboutPage = (createPage, posts) => {
  createPage({
    path: '/about',
    component: path.resolve('src/templates/aboutMe.js'),
    context: {
      pathSlug: 'about',
      posts,
    },
  });
};

/**
 * Creates the About navigation page
 */
const createPortfolioPage = createPage => {
  createPage({
    path: '/portfolio',
    component: path.resolve('src/templates/portfolio.js'),
    context: {
      pathSlug: 'portfolio',
    },
  });
};

/**
 * Creates the Hobbies navigation page
 */
const createHobbiesPage = (createPage, posts) => {
  createPage({
    path: '/hobbies',
    component: path.resolve('src/templates/hobbies.js'),
    context: {
      pathSlug: 'hobbies',
      posts,
    },
  });
};

/**
 * Creates the Uses navigation page
 */
const createUsesPage = (createPage, assets) => {
  createPage({
    path: '/uses',
    component: path.resolve('src/templates/uses.js'),
    context: {
      pathSlug: 'uses',
      result: assets,
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  await graphql(
    `
      query {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          filter: { frontmatter: { tags: { eq: "notes" } } }
        ) {
          edges {
            node {
              frontmatter {
                path
                title
                tags
                date
                excerpt
              }
              timeToRead
            }
          }
        }
      }
    `,
  ).then(result => {
    let posts;
    if (result.data.allMarkdownRemark) {
      posts = result.data.allMarkdownRemark.edges;
    }

    createTagPages(createPage, posts);
    createPortfolioPage(createPage);
    createBlogPage(createPage, posts);
    createAboutPage(createPage, posts);

    if (posts) {
      posts.forEach(({ node }, index) => {
        const pathSlug = node.frontmatter.path;

        createPage({
          path: `/notes/${pathSlug}`,
          component: path.resolve('src/templates/blogPost.js'),
          context: {
            pathSlug,
            tag: node.frontmatter.tags,
            prev: index === 0 ? null : posts[index - 1].node,
            next: index === posts.length - 1 ? null : posts[index + 1].node,
            type: 'notes',
          },
        });
      });
    }
  });

  await graphql(
    `
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { tags: { eq: "hobbies" } } }
        ) {
          edges {
            node {
              frontmatter {
                path
                title
                tags
                date
                excerpt
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      src
                    }
                  }
                }
              }
              timeToRead
            }
          }
        }
      }
    `,
  ).then(result => {
    let posts;
    if (result.data.allMarkdownRemark) {
      posts = result.data.allMarkdownRemark.edges;
    }

    createHobbiesPage(createPage, posts);
    createTagPages(createPage, posts);

    if (posts) {
      posts.forEach(({ node }, index) => {
        const pathSlug = node.frontmatter.path;

        createPage({
          path: `/hobbies/${pathSlug}`,
          component: path.resolve('src/templates/blogPost.js'),
          context: {
            pathSlug,
            tag: node.frontmatter.tags,
            prev: index === 0 ? null : posts[index - 1].node,
            next: index === posts.length - 1 ? null : posts[index + 1].node,
            type: 'hobbies',
          },
        });
      });
    }
  });

  await graphql(
    `
      query {
        file(relativePath: { eq: "assets/workstation_setup.png" }) {
          childImageSharp {
            sizes {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    `,
  ).then(result => {
    createUsesPage(createPage, result);
  });
};

/**
 * This will utilize the custom theme for the semantic css framework
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '../../theme.config$': path.join(__dirname, 'src/semantic/theme.config'),
      },
    },
  });
};
