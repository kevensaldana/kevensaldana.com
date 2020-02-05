import { useLayoutEffect, useState } from "react"

export default function useWindowResize(element) {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    function updateSize() {
      setTimeout(() => {
        const valuesElement = document
          .querySelector(element)
          .getBoundingClientRect()
        setSize(
          valuesElement ? [valuesElement.width, valuesElement.height] : [0, 0]
        )
      }, 500)
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [element])
  return size
}
