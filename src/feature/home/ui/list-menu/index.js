import React from "react"
import "./index.css"

const items = [
  { label: "Proyectos personas", link: "#personalProjects" },
  { label: "Ultimos Posts", link: "#blog" },
  { label: "Forme equipo en los proyectos", link: "#workProjects" },
]

const ListSections = () => {
  return (
    <ul className="list-sections">
      {items.map(item => {
        return (
          <li>
            <a
              className={
                "mb-3 inline-flex items-center hover:text-gamma cursor-pointer"
              }
            >
              <span className={"line"}></span>
              <span className="uppercase text-sm">{item.label}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default ListSections
