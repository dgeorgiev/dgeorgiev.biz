module.exports = {
    siteMetadata: {
        title: "Daniel Georgiev personal site",
        description: "Personal site of Daniel Georgiev",
        author: "@dgeorgiev"
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                typekit: {
                    id: "tex1vav"
                }
            }
        },
        "gatsby-plugin-layout",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "dgeorgiev.biz",
                short_name: "starter",
                start_url: "/",
                background_color: "#663399",
                theme_color: "#663399",
                display: "minimal-ui",
                icon: "src/images/favicon.png"
            }
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                sourceMap: true,
                sourceMapEmbed: true
            }
        },
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/config/translations`,
                name: `translations`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/blog`,
                name: `blog`
            }
        },
        `gatsby-transformer-json`
    ]
};
