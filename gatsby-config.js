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
                plugins: [
                    {
                        resolve: "gatsby-remark-embed-gist",
                        options: {
                            // Optional:

                            // the github handler whose gists are to be accessed
                            username: "dahnielkim",

                            // a flag indicating whether the github default gist css should be included or not
                            // default: true
                            includeDefaultCss: true,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                    },
                ],
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
