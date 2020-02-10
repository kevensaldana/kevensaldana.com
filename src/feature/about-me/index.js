import React from "react"
import Biography from "./ui/biography"
import Seo from "core/ui/seo"

const AboutMe = () => {
  return (
    <React.Fragment>
      <Seo title="About Me" />
      <Biography />
    </React.Fragment>
  )
}

export default AboutMe
