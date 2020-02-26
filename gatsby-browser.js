/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import("./src/styles/global.css")
require("prism-themes/themes/prism-atom-dark.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")

const React = require("react")
const MainLayout = require("./src/layouts/main").default
const SecondaryLayout = require("./src/layouts/secondary").default

exports.wrapPageElement = ({ element, props }) => {
  console.log("element", element)
  console.log("props", props.path)
  return props.path === "/" ? (
    <MainLayout {...props}>{element}</MainLayout>
  ) : (
    <SecondaryLayout {...props}>{element}</SecondaryLayout>
  )
}
