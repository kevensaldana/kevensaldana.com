import React, { useEffect, useRef, useState } from "react"
import eventUpdateScroll from "../../application/emit-event-update-scroll"
import scrollIntoView from "scroll-into-view"
import "./index.css"
import useIntersectionObserver from "../../../../core/infrastructure/use-intersection-observer"
import gsap from "gsap/gsap-core"

const items = [
  { label: "Personal projects" },
  { label: "Latest posts" },
  { label: "I teamed up and worked arm to arm in :" },
]

const ListSections = () => {
  const element = useRef(null)

  function emitUpdateScroll(index) {
    eventUpdateScroll.next(index)
    scrollIntoView(
      document.querySelector(`.item-scroll[data-order="${index}"]`),
      {
        align: {
          top: 0,
        },
      }
    )
  }
  const [count, setCount] = useState(0)
  useEffect(() => {
    const subscription = eventUpdateScroll.subscribe(index => {
      setCount(index)
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [])

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
    <div className="overflow-hidden relative ">
      <ul ref={element} className="list-sections opacity-0">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a
                onClick={() => emitUpdateScroll(index)}
                className={`mb-3 inline-flex items-center hover:text-primary cursor-pointer ${
                  count === index ? "text-primary active" : ""
                }`}
              >
                <span className={"line"}></span>
                <span className="text-lg font-semibold hover:text-primary">
                  {item.label}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default ListSections
