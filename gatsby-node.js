const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const articles = await graphql(`
    query {
      allMdx {
        edges {
          node {
            timeToRead
            frontmatter {
              path
              title
              date
              tags
            }
            id
          }
        }
      }
    }
  `)
  if (articles.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  const createPageArticles = articles => {
    const posts = articles.data.allMdx.edges
    posts.forEach(({ node }, index) => {
      createPage({
        path: "/articles" + node.frontmatter.path,
        component: path.resolve(`./src/feature/article/index.js`),
        context: { id: node.id },
      })
    })
  }

  const createPageTag = articles => {
    const tagSet = new Set()
    const posts = articles.data.allMdx.edges
    posts.forEach(post => {
      post.node.frontmatter.tags.forEach(tag => {
        tagSet.add(tag)
      })
    })
    const tagList = Array.from(tagSet)

    tagList.forEach((tag, index) => {
      createPage({
        path: "/tag/" + tag,
        component: path.resolve(`./src/feature/tags/index.js`),
        context: { tag: tag },
      })
    })
  }

  createPageArticles(articles)
  createPageTag(articles)
}
