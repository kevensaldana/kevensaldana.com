import React from "react"
import Presentation from "./ui/presentation"
import LatestWork from "./ui/latest-work"
import Seo from "core/ui/seo"

const Home = () => {
  return (
    <React.Fragment>
      <Seo title="Home" />
      <Presentation />
      <LatestWork />
    </React.Fragment>
  )
}

export default Home
