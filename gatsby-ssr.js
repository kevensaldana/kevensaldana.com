/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
const React = require("react")
const MainLayoutProvider = require("./src/layouts/main/index").default

exports.onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
    className: "layout",
  })
}

exports.wrapPageElement = ({ element, props }) => {
  return <MainLayoutProvider {...props}>{element}</MainLayoutProvider>
}
