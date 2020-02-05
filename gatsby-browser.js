/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import("./src/styles/global.css")

const React = require("react")
const MainLayout = require("./src/layouts/main").default

exports.wrapPageElement = ({ element, props }) => {
  return <MainLayout {...props}>{element}</MainLayout>
}
