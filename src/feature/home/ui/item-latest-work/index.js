import React, { useRef } from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import gsap from "gsap"
import useIntersectionObserver from "core/infrastructure/use-intersection-observer"
import classesGatsby from "core/domain/classes-gatbsy"

import "./index.css"

const ItemLatestWork = ({ img, title, description }) => {
  const element = useRef(null)
  const overlay = useRef(null)
  const contentHideRef = useRef(null)

  useIntersectionObserver({
    refs: [element],
    callback: () => {
      const imageWrapper = element.current.querySelector(
        classesGatsby.wrapperImage
      )
      const tl = gsap.timeline()
      tl.fromTo(
        overlay.current,
        { scaleX: 1, transformOrigin: "left" },
        {
          scaleX: 0,
          transformOrigin: "right",
          duration: 0.5,
          ease: "power2.easeIn",
        }
      ).to(imageWrapper, { opacity: 1 }, "-=0.5")

      gsap.fromTo(
        contentHideRef.current,
        { y: 100, opacity: 0 },
        { duration: 0.3, y: 0, opacity: 1, ease: "power2.easeIn" }
      )
    },
  })

  return (
    <div className="item-latest-work">
      <div className="overflow-hidden relative">
        <div ref={contentHideRef} className="opacity-0">
          <h2 className="relative md:hidden">{title}</h2>
          <p className="mb-6 text-content-secondary md:hidden">{description}</p>
        </div>
      </div>
      <div ref={element} className="relative">
        <div ref={overlay} className="overlay" />
        <Img fluid={img} />
        <div className="absolute content">
          <div className="flex flex-col justify-center h-full text-center px-5 lg:px-20">
            <h3 className="relative">{title}</h3>
            <p className="text-lg mb-6">{description}</p>
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
