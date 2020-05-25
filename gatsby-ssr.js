const React = require("react")
const {
  applyPolyfills,
  defineCustomElements,
} = require("k-design-system/loader")

applyPolyfills().then(() => {
  defineCustomElements()
})

const MainLayout = require("./src/layouts/main").default
const ArticleLayout = require("./src/layouts/article").default
const DefaultLayout = require("./src/layouts/default").default

exports.onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
    className: "layout",
  })
}

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
