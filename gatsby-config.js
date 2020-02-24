const tailwind = require("tailwindcss")
const config = require("./data/site/config")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    author: config.title,
  },
  plugins: [
    {
      resolve: `gatsby-source-github-api`,
      options: {
        url: `https://api.github.com/graphql`,
        token: process.env.GATSBY_API_URL,
        graphQLQuery: `
        query GetRepos {
          viewer {
            name
            repositories(last: 10) {
              nodes {
                name
                isPrivate
                isFork
                stargazers(last: 10) {
                  totalCount
                }
                homepageUrl
                description
                languages(first: 1) {
                  nodes {
                    name
                    id
                    color
                  }
                }
                repositoryTopics(last: 10) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
              }
            }
            location
          }
        }
        `,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: config.fonts,
        display: "swap",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    "gatsby-transformer-json",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
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
