import React, { useRef } from "react"
import gsap from "gsap"
import useIntersectionObserver from "core/infrastructure/use-intersection-observer"

import ItemLatestWork from "../item-latest-work"
import useProjectsCvHook from "../../application/use-projects-cv.hook"
import "./index.css"

const LatestWork = () => {
  const element = useRef(null)
  const nodes = useProjectsCvHook()

  useIntersectionObserver({
    refs: [element],
    callback: props => {
      gsap.fromTo(
        props.target,
        { y: 100, opacity: 0 },
        { duration: 0.3, y: 0, opacity: 1, ease: "power2.easeIn" }
      )
    },
  })

  return (
    <section className="section-latest-work">
      <div className="section-latest-work__list md:pb-8">
        {nodes.map((item, index) => {
          return (
            <div key={index} className="section-latest-work__item ">
              <ItemLatestWork
                img={item.image.childImageSharp.fluid}
                title={item.title}
                description={item.description}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default LatestWork
