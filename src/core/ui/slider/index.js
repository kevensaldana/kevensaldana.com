import React, { useCallback, useEffect, useRef, useState } from "react"
import Hammer from "hammerjs"
import gsap from "gsap"
import "./index.css"

const Slider = ({ children }) => {
  const numberItems = children.length
  const styleWrapper = {
    width: numberItems * 100 + "%",
  }
  const [currentIndex, setCurrentIndex] = useState(0)
  const refContainer = useRef(null)
  const refWrapper = useRef(null)

  const animate = newIndex => {
    gsap.to(refWrapper.current, {
      left: -1 * newIndex * 100 + "%",
      duration: 0.3,
      ease: "power2.easeIn",
    })
  }
  const jump = useCallback(index => {
    setCurrentIndex(index)
    animate(index)
  })

  const moveBack = React.useCallback(() => {
    jump(currentIndex - 1 < 0 ? currentIndex : currentIndex - 1)
  }, [currentIndex, jump])

  const moveOn = React.useCallback(() => {
    jump(currentIndex + 1 >= numberItems ? currentIndex : currentIndex + 1)
  }, [currentIndex, jump, numberItems])

  useEffect(() => {
    let mc = new Hammer(refContainer.current)
    mc.on("swiperight", moveBack)
    mc.on("swipeleft", moveOn)
    return () => {
      mc.off("swiperight", moveBack)
      mc.off("swipeleft", moveOn)
    }
  }, [moveOn, moveBack])

  return (
    <div ref={refContainer} className="slider-container">
      <div ref={refWrapper} className="slider-wrapper" style={styleWrapper}>
        {children}
      </div>
      <ol className="slider-indicators">
        {children.map((_, index) => (
          <li
            onClick={() => jump(index)}
            key={index}
            className={`${
              currentIndex === index ? "active" : ""
            } slider-indicator`}
          />
        ))}
      </ol>
    </div>
  )
}

export default Slider
