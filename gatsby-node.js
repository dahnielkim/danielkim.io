const path = require('path');

const createTagPages = (createPage, posts) => {
  // path to blog post template
  const allTagsIndexTemplate = path.resolve('src/templates/allTagsIndex.js');
  const singleTagsIndexTemplate = path.resolve('src/templates/singleTagsIndex.js');

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
    component: allTagsIndexTemplate,
    context: {
      tags: tags.sort(),
    },
  });

  tags.forEach(tagName => {
    const posts = postsByTag[tagName];

    // creates page for single tags
    createPage({
      path: `/tags/${tagName}`,
      component: singleTagsIndexTemplate,
      context: {
        posts,
        tagName,
      },
    });
  });
};

const createAllBlogsPage = (createPage, posts) => {
  const allBlogPostTemplate = path.resolve('src/templates/allBlogs.js');

  createPage({
    path: '/blog',
    component: allBlogPostTemplate,
    context: {
      pathSlug: 'blog',
      posts,
    },
  });
};

const createAboutPage = (createPage, posts) => {
  const aboutMePage = path.resolve('src/templates/aboutMe.js');

  createPage({
    path: '/about',
    component: aboutMePage,
    context: {
      pathSlug: 'about',
      posts,
    },
  });
};

const createPortfolioPage = createPage => {
  const portfolioTemplate = path.resolve('src/templates/portfolio.js');

  createPage({
    path: '/portfolio',
    component: portfolioTemplate,
    context: {
      pathSlug: 'portfolio',
    },
  });
};

const createHobbiesPage = (createPage, posts) => {
  const hobbiesPage = path.resolve('src/templates/hobbies.js');

  createPage({
    path: '/hobbies',
    component: hobbiesPage,
    context: {
      pathSlug: 'hobbies',
      posts,
    },
  });
};

// creates the actual pages for each post based off of blogPost.js
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  // Blog post template returns as a promise due to async nature
  return new Promise((resolve, reject) => {
    // path to blog post template
    const blogPostTemplate = path.resolve('src/templates/blogPost.js');

    // query to get the path of each blog post, title, and tags
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

        // creates tags page
        // path => /tags
        createTagPages(createPage, posts);

        // creates portfolio page
        createPortfolioPage(createPage);

        // creates blog home page
        createAllBlogsPage(createPage, posts);

        // create about me page
        createAboutPage(createPage, posts);

        // this will create a post for each of the paths
        // index => index of path
        if (posts) {
          posts.forEach(({ node }, index) => {
            const path = node.frontmatter.path;

            createPage({
              path: `/blog/${path}`,
              component: blogPostTemplate,
              context: {
                pathSlug: path,
                tag: node.frontmatter.tags,
                prev: index === 0 ? null : posts[index - 1].node,
                next: index === posts.length - 1 ? null : posts[index + 1].node,
                type: 'blog',
              },
            });

            // this resolve is to just let everything know that its done
            resolve();
          });
        }
      }),
    );

    // query to get the path of each blog post, title, and tags
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

        // creates blog home page
        createHobbiesPage(createPage, posts);

        // this will create a post for each of the paths
        // index => index of path
        if (posts) {
          posts.forEach(({ node }, index) => {
            const path = node.frontmatter.path;

            createPage({
              path: `/hobbies/${path}`,
              component: blogPostTemplate,
              context: {
                pathSlug: path,
                tag: node.frontmatter.tags,
                prev: index === 0 ? null : posts[index - 1].node,
                next: index === posts.length - 1 ? null : posts[index + 1].node,
                type: 'hobbies',
              },
            });

            // this resolve is to just let everything know that its done
            resolve();
          });
        }
      }),
    );
  });
};

// this will utilize the custom theme for the semantic css framework
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '../../theme.config$': path.join(__dirname, 'src/semantic/theme.config'),
      },
    },
  });
};
