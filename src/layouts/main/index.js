import React from "react"
import PropTypes from "prop-types"
import Header from "./ui/header/header"
import GetInTouch from "./ui/get-in-touch"

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <GetInTouch />
    </React.Fragment>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
