import React, { useEffect, useRef } from "react"
import Slider from "core/ui/slider"
import SliderItem from "core/ui/slider-item"
import ItemWork from "../item-work"
import "./index.css"
import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"

const SliderWork = () => {
  const overlay = useRef(null)
  const {
    allHistoryWorkPhotosJson: { nodes },
  } = useStaticQuery(graphql`
    query {
      allHistoryWorkPhotosJson {
        nodes {
          company
          description
          title
          time
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    const tl = gsap.timeline()
    const imageWrapper = document.querySelector(".slider-work")
    tl.set(imageWrapper, { opacity: 0 })
    tl.from(overlay.current, { scaleY: 0, transformOrigin: "top", delay: 1 })
      .to(overlay.current, 0.8, { scaleY: 0, transformOrigin: "bottom" })
      .to(imageWrapper, { opacity: 1 }, "-=0.8")
  }, [])

  return (
    <div className="slider-work opacity-0 relative">
      <div ref={overlay} className="overlay" />
      <Slider>
        {nodes.map((item, index) => {
          return (
            <SliderItem key={index}>
              <ItemWork
                description={item.description}
                title={item.title}
                company={item.company}
                time={item.time}
                img={item.image.childImageSharp.fluid}
              />
            </SliderItem>
          )
        })}
      </Slider>
    </div>
  )
}

export default SliderWork
