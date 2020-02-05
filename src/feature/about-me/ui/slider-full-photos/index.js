import React, { useEffect, useRef } from "react"
import "./index.css"
import SliderFull from "../../../../core/ui/slider-full"
import SliderFullItem from "../../../../core/ui/slider-full-item"
import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"

const SliderFullPhotos = () => {
  const {
    allHistoryWorkJson: { nodes },
  } = useStaticQuery(graphql`
    query {
      allHistoryWorkJson {
        nodes {
          description
          title
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

  const sliderRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(
      sliderRef.current,
      { opacity: 0 },
      { duration: 0.4, opacity: 1, ease: "power2.easeIn", delay: 1.3 }
    )
  }, [])

  return (
    <div ref={sliderRef} className="opacity-0">
      <SliderFull>
        {nodes.map((item, index) => {
          return (
            <SliderFullItem
              key={index}
              img={item.image.childImageSharp.fluid}
            />
          )
        })}
      </SliderFull>
    </div>
  )
}
export default SliderFullPhotos
