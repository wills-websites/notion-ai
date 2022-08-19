require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})
const linkResolver = require('./src/utils/linkResolver');

module.exports = {
    siteMetadata: {
        title: `NotionAi`,
        description: `Will's great start for Gatsby builds`,
        author: `Will McLean`,
        siteUrl: `https://www.example.com`,
    },
    flags: {
        DEV_SSR: false,
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-styled-components`,
        "gatsby-plugin-layout",
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/
                }
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
            },
        },
        {
            resolve: 'gatsby-source-prismic',
            options: {
                repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
                accessToken: process.env.PRISMIC_ACCESS_TOKEN,
                customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
                linkResolver: (doc) => linkResolver(doc),
                shouldDownloadFiles: true,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `great-start`,
                short_name: `great-start`,
                start_url: `/`,
                background_color: `#000000`,
                theme_color: `#000000`,
                display: `minimal-ui`,
                icon: `static/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
