const path = require("path");

const createTagPages = (createPage, posts) => {
    // path to blog post template
    const allTagsIndexTemplate = path.resolve("src/templates/allTagsIndex.js");
    const singleTagsIndexTemplate = path.resolve(
        "src/templates/singleTagsIndex.js"
    );

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
        path: "/tags",
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

const createPortfolioPage = createPage => {
    const portfolioTemplate = path.resolve("src/templates/portfolio.js");

    createPage({
        path: "/portfolio",
        component: portfolioTemplate,
    });
};

// creates the actual pages for each post based off of blogPost.js
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    // Blog post template returns as a promise due to async nature
    return new Promise((resolve, reject) => {
        // path to blog post template
        const blogPostTemplate = path.resolve("src/templates/blogPost.js");

        // query to get the path of each blog post, title, and tags
        resolve(
            graphql(
                `
                    query {
                        allMarkdownRemark(
                            sort: { order: ASC, fields: [frontmatter___date] }
                        ) {
                            edges {
                                node {
                                    frontmatter {
                                        path
                                        title
                                        tags
                                        date
                                    }
                                }
                            }
                        }
                    }
                `
            ).then(result => {
                const posts = result.data.allMarkdownRemark.edges;

                // creates tags page
                // path => /tags
                createTagPages(createPage, posts);

                // creates portfolio page
                createPortfolioPage(createPage);

                // this will create a post for each of the paths
                // index => index of path
                posts.forEach(({ node }, index) => {
                    const path = node.frontmatter.path;
                    createPage({
                        path,
                        component: blogPostTemplate,
                        context: {
                            pathSlug: path,
                            tag: node.frontmatter.tags,
                            prev: index === 0 ? null : posts[index - 1].node,
                            next:
                                index === posts.length - 1
                                    ? null
                                    : posts[index + 1].node,
                        },
                    });

                    // this resolve is to just let everything know that its done
                    resolve();
                });
            })
        );
    });
};
