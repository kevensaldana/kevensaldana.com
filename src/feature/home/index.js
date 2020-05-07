import React, { useEffect } from "react"
import Presentation from "./ui/presentation"
import LatestWork from "./ui/latest-work"
import ListRepositories from "./ui/list-repositories"

import Seo from "core/ui/seo"
import PropTypes from "prop-types"
import Social from "../../core/ui/social"
import ListPosts from "../../core/ui/list-posts"
import ListSections from "./ui/list-menu"
import eventUpdateScroll from "./application/emit-event-update-scroll"

const Home = ({ posts }) => {
  useEffect(() => {
    let order = []
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const orderCurrent = parseInt(entry.target.getAttribute("data-order"))
          if (entry.isIntersecting) {
            order.push(orderCurrent)
          } else {
            order = order.filter(item => item !== orderCurrent)
          }
          order.sort()
          eventUpdateScroll.next(order[0])
        })
      },
      {
        root: null,
        threshold: [0.1],
      }
    )
    const items = document.querySelectorAll(".item-scroll")
    setTimeout(() => {
      items.forEach(ref => {
        observer.observe(ref)
      })
    }, 500)
  }, [])
  return (
    <React.Fragment>
      <Seo />
      <div className="container relative">
        <div className="lg:flex flex-row">
          <div className="flex  lg:w-1/2 lg:pr-20 lg:fixed lg:h-screen content-center flex-col justify-center md:pl-4">
            <div className="mb-8">
              <Presentation />
            </div>
            <div className="my-2 hidden lg:block">
              <ListSections />
            </div>
            <div className="lg:pt-4 mb-10">
              <Social />
            </div>
          </div>
          <div className="lg:w-1/2 lg:absolute lg:right-0 lg:pl-20 lg:pt-20 md:pr-4">
            <div className="item-scroll mb-6" data-order="0">
              <ListRepositories />
            </div>
            <div className="mt-10 item-scroll" data-order="1">
              <ListPosts posts={posts} />
            </div>
            <div className="lg:mt-10 item-scroll" data-order="2">
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
