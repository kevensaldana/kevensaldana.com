import React from "react"
import PropTypes from "prop-types"
import Header from "./ui/header/header"
import GetInTouch from "./ui/get-in-touch"
import "./index.css"

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="layout-main">{children}</div>
      <GetInTouch />
    </React.Fragment>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
