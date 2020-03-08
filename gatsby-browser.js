require("./src/styles/global.css")
require("prism-themes/themes/prism-dracula.css")

const React = require("react")
const MainLayout = require("./src/layouts/main").default
const ArticleLayout = require("./src/layouts/article").default
const DefaultLayout = require("./src/layouts/default").default

exports.wrapPageElement = ({ element, props }) => {
  const path = props.path.split("/")[1]

  if (path === "") {
    return <MainLayout {...props}>{element}</MainLayout>
  }
  if (path === "articles") {
    return <ArticleLayout {...props}>{element}</ArticleLayout>
  }
  return <DefaultLayout {...props}>{element}</DefaultLayout>
}
