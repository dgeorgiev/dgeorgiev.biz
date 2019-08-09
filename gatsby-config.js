module.exports = {
    siteMetadata: {
        title: 'Daniel Georgiev personal site',
        description: 'Personal site of Daniel Georgiev',
        author: '@dgeorgiev'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                typekit: {
                    id: 'tex1vav'
                }
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-layout',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'dgeorgiev.biz',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/favicon.png'
            }
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-sass'
    ]
};
