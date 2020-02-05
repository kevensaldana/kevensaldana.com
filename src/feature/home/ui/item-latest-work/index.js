import React, { useEffect, useRef } from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import gsap from "gsap"

import "./index.css"

const ItemLatestWork = ({ img, title, description }) => {
  const element = useRef(null)
  const overlay = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    const imageWrapper = element.current.querySelector(".gatsby-image-wrapper")
    tl.set(imageWrapper, { opacity: 0 })
    tl.from(overlay.current, { scaleX: 0, transformOrigin: "left", delay: 1 })
      .to(overlay.current, 0.8, { scaleX: 0, transformOrigin: "right" })
      .to(imageWrapper, { opacity: 1 }, "-=0.8")
  }, [])

  return (
    <div>
      <h2 className="text-xl font-medium mb-4 relative md:hidden">{title}</h2>
      <p className="mb-6 text-gray-500 md:hidden">{description}</p>
      <div ref={element} className="relative item-latest-work ">
        <div ref={overlay} className="overlay" />
        <Img ref={imageRef} fluid={img} />
        <div className="absolute content">
          <div className="flex flex-col justify-center h-full text-center px-5 lg:px-20">
            <h2 className="text-3xl font-medium mb-1 relative">{title}</h2>
            <p className="text-xl mb-6">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

ItemLatestWork.defaultProps = {
  img: {},
  title: "",
  description: "",
}

ItemLatestWork.propTypes = {
  img: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
}
export default ItemLatestWork
