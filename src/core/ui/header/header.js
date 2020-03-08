import React from "react"
import Logo from "data/site/images/brand/logo-white.png"
import "./header.css"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import MainLayout from "../../../layouts/main"

const Header = ({ center }) => {
  return (
    <nav className={`header-nav py-8`}>
      <div
        className={`${
          center ? "container" : ""
        } flex items-center justify-between`}
      >
        <Link to="/">
          <img width="115" src={Logo} alt="Logo" />
        </Link>
      </div>
    </nav>
  )
}
MainLayout.propTypes = {
  center: PropTypes.string,
}
export default Header
