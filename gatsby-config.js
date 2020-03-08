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
    lang: config.lang,
    siteUrl: config.url,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [`/tag/*`, `/path/to/page`],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          }),
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `kevensaldana`,
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        url: `https://api.github.com/graphql`,
        token: process.env.GATSBY_API_URL,
        graphQLQuery: `
        query GetRepos {
          viewer {
            name
            repositories(last: 10, privacy: PUBLIC) {
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
                url
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
    "gatsby-remark-reading-time",
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
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: config.url,
        sitemap: config.url + "/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        // a workaround to solve mdx-remark plugin compat issue
        // https://github.com/gatsbyjs/gatsby/issues/15486
        plugins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              wrapperStyle: () => "margin-bottom: 20px",
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
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
  ],
}
