const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: '${activeEnv}'`)

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `St. Martin’s Theatre`,
    description: `Welcome to the Heart of the West End – find out more about St. Martin’s Theatre.`,
    author: `Dewynters`,
    siteName: `St Martins's Theatre`,
    siteUrl: process.env.GATSBY_FRONTEND_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `jpg`], // Removed AVIF
        },
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-resolve-src`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `St Martins's Theatre`,
        short_name: `St Martins's Theatre`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 8,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-231262393-1',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-WQB8HXF',
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: process.env.GATSBY_FRONTEND_URL,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.GATSBY_FRONTEND_URL,
        sitemap: `${process.env.GATSBY_FRONTEND_URL}/sitemap/sitemap-index.xml`,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          staging: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    `gatsby-plugin-remove-serviceworker`,
  ],
}
