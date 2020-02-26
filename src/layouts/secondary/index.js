import React from "react"
import PropTypes from "prop-types"
import "./index.css"
import Header from "../../core/ui/header/header"

const SecondaryLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header center={true} />
      <div className="layout-main">{children}</div>
    </React.Fragment>
  )
}

SecondaryLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SecondaryLayout
