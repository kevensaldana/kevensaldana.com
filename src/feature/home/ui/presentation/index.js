import React, { useRef } from "react"
import gsap from "gsap"
import "./index.css"
import useIntersectionObserver from "core/infrastructure/use-intersection-observer"
import Header from "../../../../core/ui/header/header"

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
          className="section-index__title opacity-0"
        >
          <span className="wave mr-4 text-4xl">👋🏻</span>
          <br />
          Hello! I'm Keven,
          <br />
          <span className="text-primary inline-block">web developer</span>
          <br />
          with experience in: <br />
          🏦, 🚎 and e-commerce.
        </h1>
      </div>
      <div className="overflow-hidden relative">
        <p
          ref={sectionPresentationSubTitle}
          className="section-index__subtitle text-on_background lg:text-lg mb-1 font-light opacity-0 max-w-lg"
        >
          Graduate of National University of Trujillo. I have 5 years producing
          high quality online platforms .
        </p>
      </div>
    </section>
  )
}

export default Presentation
