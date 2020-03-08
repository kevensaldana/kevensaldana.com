import React from "react"
import PropTypes from "prop-types"
import "./index.css"
import Header from "../../core/ui/header/header"

const DefaultLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header center={true} />
      <div className="lg:flex my-12">
        <div className="lg:w-2/3 m-auto">{children}</div>
      </div>
    </React.Fragment>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
