module.exports = {
    siteMetadata: {
        title: "Daniel Kim's Personal Blog",
        description: 'Personal Blog for Daniel Kim <me@danielkim.io>'
    },
    plugins: [
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        }
    ]
}