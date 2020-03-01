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
                "mb-3 inline-flex items-center hover:text-primary cursor-pointer"
              }
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
