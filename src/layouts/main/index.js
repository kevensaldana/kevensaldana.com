import React from "react"
import PropTypes from "prop-types"
import "./index.css"

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="fixed bottom-0 left-0 z-20 w-full h-10 pointer-events-none gradient-y-transparent-night" />
      <div className="layout-main">{children}</div>
      <div className="fixed top-0 left-0 z-20 w-full h-10 pointer-events-none gradient-y-night-transparent" />
    </React.Fragment>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
