const tailwind = require("tailwindcss")

module.exports = {
  siteMetadata: {
    title: `Keven Saldaña  - frontend developer`,
    description: `My name is Keven. I work as software enginner at Globant. I like to program and I am always willing to learn new things.`,
    author: `@kevenlab`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `material icons`,
          `Poppins\:300,400,500,700,800,900`, // you can also specify font weights and styles
        ],
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
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "dark-mode",
        classNameLight: "light-mode",
        storageKey: "darkMode",
        minify: true,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-54M4BNH",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: function() {
          return {
            pageType: window.pageType,
          }
        },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
