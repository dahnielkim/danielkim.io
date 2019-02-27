module.exports = {
    siteMetadata: {
        title: "DANIELKIM.IO",
        author: "Daniel Kim",
        description:
            "Thoughts and topics of various things I am passionate about",
        social: {
            twitter: `@dahnielkim`,
        },
        siteUrl: "https://danielkim.io",
    },
    plugins: [
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-prismjs`],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Quicksand`,
                        subsets: [`latin`],
                        variants: [`300`, `400`],
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-buildtime-timezone",
            options: {
                tz: "America/Los_Angeles",
                format: "dddd, MMMM Do YYYY, h:mm:ss a",
            },
        },
    ],
};
