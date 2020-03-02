require("./src/styles/global.css")
require("prism-themes/themes/prism-dracula.css")

const React = require("react")
const MainLayout = require("./src/layouts/main").default
const SecondaryLayout = require("./src/layouts/secondary").default

exports.wrapPageElement = ({ element, props }) => {
  return props.path === "/" ? (
    <MainLayout {...props}>{element}</MainLayout>
  ) : (
    <SecondaryLayout {...props}>{element}</SecondaryLayout>
  )
}
