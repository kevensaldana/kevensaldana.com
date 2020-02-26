import React from "react"
import "./index.css"

const items = [
  { label: "Personal projects", link: "#personalProjects" },
  { label: "Latest posts", link: "#blog" },
  { label: "I teamed up and worked arm to arm in :", link: "#workProjects" },
]

const ListSections = () => {
  return (
    <ul className="list-sections">
      {items.map((item, index) => {
        return (
          <li key={index}>
            <a
              className={
                "mb-3 inline-flex items-center hover:text-gamma cursor-pointer"
              }
            >
              <span className={"line"}></span>
              <span className="uppercase text-sm text-gray-400 hover:text-gamma">
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
