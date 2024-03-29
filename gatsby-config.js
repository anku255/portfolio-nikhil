module.exports = {
  siteMetadata: {
    title: `Nikhil Kumar Jha`,
    description: `Nikhil Kumar Jha - Portfolio`,
    author: `@nj2510`,
    url: `https://nikhilkumarjha.netlify.com`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: 'transparent',
              maxWidth: 900,
              linkImagesToOriginal: false
            }
          },
          `gatsby-remark-smartypants`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nikhil Kumar Jha`,
        short_name: `NKJ`,
        start_url: `/`,
        background_color: `#1499d6`,
        theme_color: `#1499d6`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      }
    },
    `gatsby-plugin-offline`
  ]
};
