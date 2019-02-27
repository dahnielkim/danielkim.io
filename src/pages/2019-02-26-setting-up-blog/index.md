---
path: "setting-up-blog"
date: "2019-02-26"
title: "Setting up a blog with Gatsby, React, and MD"
tags: ["gatsby"]
excerpt: "As the initial post, I wanted to share the technology associated with this blog and the basic setup process that may help some other devs create their own blog."
---

As the initial post, I wanted to share the technology associated with this blog and the basic setup process that may help some other devs create their own blog.

This blog consists of the following technology:

-   GatsbyJS
-   GraphQL
-   React
-   React Icons
-   Webpack
-   Markdown
-   HTML
-   CSS

Deployment is done using the amazing technology of [Netlify](https://www.netlify.com).

The following steps outline the setup progress for a [Gatsby](https://www.gatsbyjs.org) Blog.

1. First, run the following command to create a new gatsby project. This will create a new gatsby project based off the starter `hello world` project.

```bash
gatsby new Personal-Blog https://github.com/gatsbyjs/gatsby-starter-hello-world
```

2. Once the project has been created, navigate to the directory and run `yarn` to install all dependencies.
3. Running `gastby develop` will launch the gatsby project in `localhost:8000`.
4. Install plugins so that markdown can be understood from the gatsby site.

```bash
npm install --save gatsby-source-filesystem@next gatsby-transformer-remark@next
```

5. Create a `gatsby-config.js` file within the directory. The content will be the following:

```javascript
module.exports = {
    siteMetadata: {
        title: "Daniel Kim's Sample Blog",
        description: "Some meaningful description",
    },
    plugins: [
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
    ],
};
```

6. Create folder in the `src/pages` directory following the convention `yyyy-mm-dd-title`.
7. Create an `index.md` file within that directory.
8. Within the `index.md` file, use the following syntax to indicate a new post. All posts will need this. The excerpt below is a sample.

```markdown
---
path: "first-post"
date: "2019-02-26"
title: "Initial Post"
tags: ["random"]
excerpt: "A preview of my first post"
---

Testing initial post material.
```

9. Run `gatsby develop` and it will let you go to a GraphQL query UI.
10. From the GraphQL query UI, you can query for various things. Some examples are the following:

```graphql
{
    site {
        siteMetadata {
            title
            description
        }
    }
}
```

The query above will give you the site title and description.

```graphql
{
    allMarkdownRemark {
        edges {
            node {
                frontmatter {
                    title
                }
            }
        }
    }
}
```

The query above will give you the site title. Edges are like the path. You can use the GraphQL Query docs to find a specific query.

11. To deploy, run `gatsby build`.
12. Navigate to the `public` directory and initialize your git repo there.
13. Set up Netlify and link it with the [Github](https://www.github.com) repo.
