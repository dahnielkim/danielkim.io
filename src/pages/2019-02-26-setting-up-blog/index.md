---
path: 'develop-gatsby-site'
date: '2019-02-26'
title: 'Develop a site with Gatsby, React, and MD'
tags: ['gatsbyjs', 'articles']
featuredImage: './gatsby-setup.jpg'
excerpt: 'For the initial article, I wanted to share the technology associated with this site and the basic setup process that may help some other developers create their own websites.'
---

For the initial article, I wanted to share the technology associated with this site and the basic setup process that may help some other developers create their own websites.

This site utilizes the following technology:
- [Gatsby](https://www.gatsbyjs.org)
- GraphQL
- [React](https://www.reactjs.org)
- Webpack
- Markdown
- JavaScript
- HTML
- CSS
- [Netlify](https://www.netlify.com)

Originally this site was programmed with vanilla js, html, and css but after looking into recent tech trends, I decided to give [Gatsby](https://www.gatsbyjs.org) a shot.

<br>

### What is Gatsby?
> "Gatsby is a free and open source framework based on React that 
> helps developers build blazing fast websites 

And fast it is.

Gatsby is a static site generator that's built on the [React](https://www.reactjs.org) framework. 

What is a static site generator, you may ask? They are known for generating HTML pages and consists of a HTML static site and a CMS (content management system).

<br>

### How do I run a Gatsby-powered site?
The following steps outline the setup progress for a [Gatsby](https://www.gatsbyjs.org) Blog. The [Gatsby quick start docs](https://www.gatsbyjs.org/docs/quick-start) are a really good resource for getting started with creating a local Gastby project.

The following are additional steps in order to start developing. Please keep in mind that some steps may be redundant to the [Gatsby quick start docs](https://www.gatsbyjs.org/docs/quick-start). These steps also only make it so that you can locally run a Gatsby project using markdown for article pages. Additional plugins and setup may be needed for other features.
1. First, run the following terminal command to create a new gatsby project. This will create a new gatsby project based off the starter Hello World project.

```bash
gatsby new Personal-Blog https://github.com/gatsbyjs/gatsby-starter-hello-world
```

2. Once the project has been created, navigate to the directory and run the following terminal command to install all dependencies.

```bash
yarn
```

3. Run the following command to launch the gatsby project locally in ` localhost:8000 `.

```bash
gatsby develop
```

4. Install the `gatsby-source-filesystem` and `gatsby-transformer-remark` so that markdown can be understood from the gatsby site.

```bash
npm install --save gatsby-source-filesystem@next gatsby-transformer-remark@next
```

5. Create a `gatsby-config.js` file within the directory. The content will be the following:

```javascript
module.exports = {
  siteMetadata: {
    title: "My Sample Blog",
    description: 'Some meaningful description',
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
8. Within the `index.md` file, use the following syntax to indicate a new post. All posts will need this. The code sample below is a sample markdown.

```
---
path: 'hello-world'
date: '2019-02-26'
title: 'Hello World'
tags: ['first-post']
excerpt: 'Hello World'
---

Hello world! This is the first post!
```
11. You are now ready to deploy! In order to build the production build, run the following command.

```bash
gatsby build
```

12. Create a [Github](https://www.github.com) repository to house this project.
13. Navigate to the `public` directory and initialize your git repo here by running the following command.

```bash
cd public
git init
git add .
git commit -m 'Hello world gatsby article'
git remote add origin <github_remote_url>
git push -u origin master
```

14. Set up [Netlify](https://www.netlify.com) and link it with the [Github](https://www.github.com) repository and that's it!

<br>

### Using GraphQL during Development 
Gatsby is great because it also provide declaritive API data queries using GraphQL. You can take advantage of this even during local development. 

The following are some steps to utilze GatsbyJS' GraphQL query UI that is prebuilt into the Gatsby project.
1. Following the steps in the previous section of this article to run the project locally.
2. Once the project is running locally, you can now go to `http://localhost:8000/___graphql`.
3. From the GraphQL query UI, you can query for various things. Some examples are the following:

```graphql
# graphql query below will give you the site title and description 
{
  site {
    siteMetadata {
      title
      description
    }
  }
}

# graphql query below will give you the site title
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

> Edges are like the path. You can use the GraphQL Query docs to find a specific query.
> GraphQL Query docs are available in the GraphQL UI provided in the project.
