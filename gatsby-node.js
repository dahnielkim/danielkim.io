const path = require('path');

/**
 * Creates tag pages for single tags and all tags
 */
const createTagPages = (createPage, posts) => {
  const postsByTag = {};

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
 * Creates the Blog navigation page
 */
const createBlogPage = (createPage, posts) => {
  createPage({
    path: '/blog',
    component: path.resolve('src/templates/allBlogs.js'),
    context: {
      pathSlug: 'blog',
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
 * Creates the actual post pages based off src/templates/blogPost
 */
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    // Creates all of the different pages associated with blog content
    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(
              sort: { order: ASC, fields: [frontmatter___date] }
              filter: { frontmatter: { tags: { eq: "blog" } } }
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
              path: `/blog/${pathSlug}`,
              component: path.resolve('src/templates/blogPost.js'),
              context: {
                pathSlug,
                tag: node.frontmatter.tags,
                prev: index === 0 ? null : posts[index - 1].node,
                next: index === posts.length - 1 ? null : posts[index + 1].node,
                type: 'blog',
              },
            });
            resolve();
          });
        }
      }),
    );

    // Creates all of the different pages associated with hobbies content
    resolve(
      graphql(
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
            resolve();
          });
        }
      }),
    );
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
