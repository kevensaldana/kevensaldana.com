import React, { useEffect, useState } from "react"
import eventUpdateScroll from "../../application/emit-event-update-scroll"
import scrollIntoView from "scroll-into-view"
import "./index.css"

const items = [
  { label: "Personal projects" },
  { label: "Latest posts" },
  { label: "I teamed up and worked arm to arm in :" },
]

const ListSections = () => {
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
    eventUpdateScroll.subscribe(index => {
      setCount(index)
    })
  }, [])
  return (
    <ul className="list-sections">
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
  )
}
export default ListSections
