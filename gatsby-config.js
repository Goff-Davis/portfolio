module.exports = {
    siteMetadata: {
        title: `Davis Goff Porfolio`,
        description: `The portfolio site of Davis Goff.`,
        author: `@Goff-Davis`,
        siteUrl: `https://davisgoff.com`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-robots-txt`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Davis Goff Portfolio`,
                short_name: `Davis Goff Portfolio`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#ffffff`,
                display: `standalone`,
                icon: `src/meta/favicon.svg`,
                icon_options: {
                    purpose: `maskable`
                },
                cache_busting_mode: `none`,
                crossOrigin: `anonymouse`
            }
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [`/`]
            }
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                postCssPlugins: [
                    // eslint-disable-next-line global-require
                    require(`postcss-preset-env`)({
                        stage: 2,
                        features: {
                            "nesting-rules": true
                        }
                    })
                ],
                precision: 6
            }
        }
    ]
};
