import React from "react"
import PropTypes from "prop-types"
import Header from "./ui/header/header"
import GetInTouch from "./ui/get-in-touch"
import ScrollContext from "core/infrastructure/context/scroll"

const ScrollMagic =
  typeof window !== `undefined` ? require("scrollmagic") : null

const MainLayout = ({ children }) => {
  const controller = ScrollMagic ? new ScrollMagic.Controller() : { nope: 1 }
  const context = { controller }
  return (
    <ScrollContext.Provider value={context}>
      <Header />
      {children}
      {/*<GetInTouch />*/}
    </ScrollContext.Provider>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
