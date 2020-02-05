import React, { useEffect, useRef, useState } from "react"
import Hammer from "hammerjs"
import useWindowResize from "../../infrastructure/resize/useResize"

import "./index.css"

const SliderFull = ({ children }) => {
  const [classDragging, setClassDragging] = useState("")
  const refContainer = useRef(null)
  const refWrapper = useRef(null)
  const [width, height] = useWindowResize(".slider-full-item")
  const newHeight = {
    height: height * 1.1 + "px",
  }

  useEffect(() => {
    let myBlock = refContainer.current
    let mc = new Hammer(myBlock)
    mc.add(new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 2 }))
    mc.on("pan", handleDrag)

    let lastPosX = 0
    let isDragging = false

    function handleDrag(ev) {
      if (!isDragging) {
        setClassDragging("dragging")
        isDragging = true
        lastPosX = myBlock.scrollLeft
      }
      let posX = lastPosX - ev.deltaX
      myBlock.scroll({ left: posX })
      if (ev.isFinal) {
        setClassDragging("")
        isDragging = false
      }
    }
    return () => {
      mc.off("pan", handleDrag)
    }
  }, [])

  return (
    <div ref={refWrapper} style={newHeight} className="slider-full-wrapper">
      <div
        ref={refContainer}
        className={`slider-full-container ${classDragging}`}
      >
        {children}
      </div>
    </div>
  )
}

export default SliderFull
