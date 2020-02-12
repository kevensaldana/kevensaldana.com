import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import gsap from "gsap"

import "./index.css"
import ItemLatestWork from "../item-latest-work"

const LatestWork = () => {
  const element = useRef(null)

  const {
    allLatestWorkJson: { nodes },
  } = useStaticQuery(graphql`
    query {
      allLatestWorkJson {
        nodes {
          title
          description
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
    const { current } = element
    gsap.fromTo(current, 0.7, { opacity: 0 }, { opacity: 1, delay: 0.9 })
  }, [])

  return (
    <section className="section-latest-work pt-20 md:py-20">
      <div className="container">
        <h2 ref={element} className=" text-2xl font-medium mb-8 opacity-0">
          {" "}
          Hice equipo en los proyectos:
        </h2>
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
