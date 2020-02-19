import React, { useRef } from "react"
import gsap from "gsap"
import useIntersectionObserver from "core/infrastructure/use-intersection-observer"

import ItemLatestWork from "../item-latest-work"
import useProjectsHook from "../../application/use-projects.hook"
import "./index.css"

const LatestWork = () => {
  const element = useRef(null)
  const nodes = useProjectsHook()

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
    <section className="section-latest-work pt-20 md:py-20">
      <div className="container">
        <div className="overflow-hidden relative">
          <h2 ref={element} className=" text-3xl font-medium mb-8 opacity-0">
            Forme parte de los proyectos:
          </h2>
        </div>
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
      </div>
    </section>
  )
}
export default LatestWork
