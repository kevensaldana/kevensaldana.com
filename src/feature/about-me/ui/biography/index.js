import React, { useEffect, useRef } from "react"
import SliderFullPhotos from "../slider-full-photos"
import SliderWork from "../slider-work"
import gsap from "gsap"

const Biography = () => {
  const sectionPresentationTitle = useRef(null)
  const sectionPresentationSubTitle = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(
      sectionPresentationTitle.current,
      { opacity: 0, y: 156 },
      { duration: 1, y: 0, opacity: 1, ease: "power2.easeIn" }
    ).fromTo(
      sectionPresentationSubTitle.current,
      { opacity: 0 },
      { duration: 1, opacity: 1 }
    )
  }, [])
  return (
    <section className="section-biography pt-8 lg:pt-24">
      <div className="container">
        <div className="overflow-hidden relative">
          <h1
            ref={sectionPresentationTitle}
            className="lg:text-4xl text-3xl font-medium mb-3 opacity-0"
          >
            {" "}
            Un poco de <span className="text-gamma">mi</span>
          </h1>
        </div>
        <div className="overflow-hidden relative">
          <h2
            ref={sectionPresentationSubTitle}
            className="text-lg sm:text-xl mb-4 text-gray-400 opacity-0"
          >
            Peruano, estudié Ciencias de la Computación en la Universidad
            Nacional de Trujillo. <br /> Me centré en el desarrollo frontend sin
            querer, el cual me dio la oportunidad de trabajar en grandes
            proyectos y conocer buenos amigos.
          </h2>
        </div>
      </div>
      <div className="mb-8 mt-8 lg:mt-16">
        <SliderWork />
      </div>
      <div className="mb-12">
        <SliderFullPhotos />
      </div>
    </section>
  )
}

export default Biography
