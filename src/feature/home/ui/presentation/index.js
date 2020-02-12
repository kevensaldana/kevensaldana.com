import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import "./index.css"

const Presentation = () => {
  const sectionPresentationTitle = useRef(null)
  const sectionPresentationSubTitle = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(
      sectionPresentationTitle.current,
      { opacity: 0, y: 156 },
      { duration: 0.6, y: 0, opacity: 1, ease: "power2.easeIn" }
    ).fromTo(
      sectionPresentationSubTitle.current,
      { opacity: 0 },
      { duration: 0.5, opacity: 1 }
    )
  }, [])

  return (
    <section className="section-index relative pt-8 lg:pt-24">
      <div className="container ">
        <div className="overflow-hidden relative">
          <h1
            ref={sectionPresentationTitle}
            className="section-index__title  lg:text-5xl  text-4xl font-medium mb-1 opacity-0"
          >
            {" "}
            <span className="wave">👋🏻</span> <br />
            Hola! Soy Keven,{" "}
            <span className="text-gamma inline-block">Developer</span> <br />
            con experiencia en: 🏦, 🚎 y comercio.
          </h1>
        </div>
        <div className="overflow-hidden relative">
          <p
            ref={sectionPresentationSubTitle}
            className="section-index__subtitle text-xl mb-1 font-light text-gray-400 opacity-0"
          >
            Desarrollador web peruano. Estudié Ciencias de la Computación en la
            Universidad Nacional de Trujillo. <br /> Inicie este sitio como
            lugar para documentar todo lo que he aprendido en mi carrera.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Presentation
