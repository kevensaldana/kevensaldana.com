const {
  applyPolyfills,
  defineCustomElements,
} = require("k-design-system/loader")
require("k-design-system/dist/design-system/design-system.css")
require("./src/styles/global.css")
require("prism-themes/themes/prism-dracula.css")

applyPolyfills().then(() => {
  defineCustomElements()
})

const React = require("react")
const MainLayout = require("./src/layouts/main").default
const ArticleLayout = require("./src/layouts/article").default
const DefaultLayout = require("./src/layouts/default").default

exports.wrapPageElement = ({ element, props }) => {
  const path = props.location.pathname.split("/")[1]

  if (path === "") {
    return <MainLayout {...props}>{element}</MainLayout>
  }
  if (path === "articles") {
    return <ArticleLayout {...props}>{element}</ArticleLayout>
  }
  return <DefaultLayout {...props}>{element}</DefaultLayout>
}
