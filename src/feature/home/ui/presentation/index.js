import React, { useRef } from "react"
import gsap from "gsap"
import "./index.css"
import useIntersectionObserver from "core/infrastructure/use-intersection-observer"
import Header from "../../../../layouts/main/ui/header/header"

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
    <section className="section-index relative">
      <div className="overflow-hidden relative">
        <Header />
        <h1
          ref={sectionPresentationTitle}
          className="section-index__title  lg:text-4xl  text-3xl font-medium mb-6 opacity-0 leading-tight"
        >
          <span className="wave mr-4 text-4xl">👋🏻</span>
          <br />
          Hola! Soy Keven,
          <span className="text-gamma inline-block">desarrollador</span> <br />
          &nbsp;con experiencia en: <br />
          🏦, 🚎 y comercio.
        </h1>
      </div>
      <div className="overflow-hidden relative">
        <p
          ref={sectionPresentationSubTitle}
          className="section-index__subtitle text-sm lg:text-lg mb-1 font-light text-gray-400 opacity-0 max-w-lg"
        >
          Desarrollador web peruano que estudió ciencias de la computación en la
          Universidad Nacional de Trujillo. <br /> Inicie este sitio como lugar
          para documentar todo lo que he aprendido en mi carrera.
        </p>
      </div>
    </section>
  )
}

export default Presentation
