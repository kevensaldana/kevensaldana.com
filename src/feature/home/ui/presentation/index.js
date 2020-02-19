import React, { useRef } from "react"
import gsap from "gsap"
import "./index.css"
import useIntersectionObserver from "core/infrastructure/use-intersection-observer"
import Social from "core/ui/social"

const Presentation = () => {
  const sectionPresentationTitle = useRef(null)
  const sectionPresentationSubTitle = useRef(null)

  useIntersectionObserver({
    refs: [sectionPresentationTitle],
    callback: () => {
      gsap.fromTo(
        sectionPresentationTitle.current,
        { y: 200, opacity: 0 },
        { duration: 0.6, y: 0, opacity: 1, ease: "power2.easeIn" }
      )
      gsap.fromTo(
        sectionPresentationSubTitle.current,
        { y: 200, opacity: 0 },
        { duration: 0.5, y: 0, opacity: 1, ease: "power2.easeIn" }
      )
    },
  })

  return (
    <section className="section-index relative pt-8 lg:pt-24">
      <div className="container ">
        <div className="overflow-hidden relative">
          <h1
            ref={sectionPresentationTitle}
            className="section-index__title  lg:text-5xl  text-4xl font-medium mb-1 opacity-0"
          >
            <span className="wave">👋🏻</span> <br />
            Hola! Soy Keven,
            <span className="text-gamma inline-block">desarrollador</span>
            <br />
            con experiencia en: 🏦, 🚎 y comercio.
          </h1>
        </div>
        <div className="overflow-hidden relative">
          <p
            ref={sectionPresentationSubTitle}
            className="section-index__subtitle text-xl mb-1 font-light text-gray-400 opacity-0"
          >
            Desarrollador web peruano que estudió ciencias de la computación en
            la Universidad Nacional de Trujillo. <br /> Inicie este sitio como
            lugar para documentar todo lo que he aprendido en mi carrera.
          </p>
          <Social className="mt-8" />
        </div>
      </div>
    </section>
  )
}

export default Presentation
