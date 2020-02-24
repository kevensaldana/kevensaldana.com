import React from "react"
import Presentation from "./ui/presentation"
import LatestWork from "./ui/latest-work"
import ListRepositories from "./ui/list-repositories"

import Seo from "core/ui/seo"
import PropTypes from "prop-types"
import Social from "../../core/ui/social"
import ListPosts from "../../core/ui/list-posts"
import ListSections from "./ui/list-menu"

const Home = ({ posts }) => {
  return (
    <React.Fragment>
      <Seo title="Home" />
      <div className="container relative">
        <div className="lg:flex flex-row">
          <div className="flex  lg:w-1/2 lg:pr-20 lg:fixed lg:h-screen content-center flex-col justify-center">
            <div className="mb-8">
              <Presentation />
            </div>
            <div className="my-10 hidden lg:block">
              <ListSections />
            </div>
            <div className="lg:pt-4 lg:mt-10 mb-10">
              <Social />
            </div>
          </div>
          <div className="lg:w-1/2 lg:absolute lg:right-0 lg:pl-20 lg:pt-20">
            <ListRepositories />
            <div className="mt-10">
              <ListPosts posts={posts} />
            </div>
            <div className="lg:mt-10">
              <LatestWork />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
Home.defaultProps = {
  posts: [],
}

Home.propTypes = {
  posts: PropTypes.array,
}
export default Home
