import React, { useEffect } from "react"
import Slider from "core/ui/slider"
import SliderItem from "core/ui/slider-item"
import ItemWork from "../item-work"
import "./index.css"
import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"

const SliderWork = () => {
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
    tl.to(".slider-work", {
      duration: 0.5,
      opacity: 1,
      delay: 1.2,
      ease: "power2.easeIn",
    })
  }, [])

  return (
    <div className="slider-work opacity-0">
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
