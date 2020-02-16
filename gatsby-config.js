const tailwind = require("tailwindcss")
const config = require("./data/site/config")

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    author: config.title,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: config.fonts,
        display: "swap",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-nprogress`,
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          tailwind("./tailwind.config.js"),
          require(`autoprefixer`),
          require(`postcss-nested`),
          require(`postcss-nested-ancestors`),
        ],
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        data: `${__dirname}/data`,
        core: `${__dirname}/src/core`,
        feature: `${__dirname}/src/feature`,
        pages: `${__dirname}/src/pages`,
        layouts: `${__dirname}/src/layouts`,
        styles: `${__dirname}/src/styles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    "gatsby-transformer-json",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.author,
        description: config.description,
        lang: config.lang,
        start_url: config.start_url,
        background_color: `#0f1321`,
        theme_color: `#ffd160`,
        display: `minimal-ui`,
        icon: config.icon,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-54M4BNH",
        includeInDevelopment: false,
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
