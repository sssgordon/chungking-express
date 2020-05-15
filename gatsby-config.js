require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const proxy = require('http-proxy-middleware')

module.exports = {
  // Handles local dev for the netlify functions
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      }),
    )
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/account/*`] },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager-timeout',
      options: {
        id: process.env.GTM_ID,
        includeInDevelopment: true,
        timeout: process.env.GTM_DELAY || 1000, // default value is 1000ms
      },
    },
  ],
}
