import React from "react"
import Logo from "data/site/images/brand/logo-white.png"
import "./header.css"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav className={`header-nav top-0 py-8`}>
      <div className="flex items-center justify-between">
        <Link to="/">
          <img width="115" src={Logo} alt="Logo" />
        </Link>
      </div>
    </nav>
  )
}

export default Header
