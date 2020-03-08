import React from "react"
import ItemRepository from "../item-repository"
import "./index.css"
import useRepositoriesHook from "../../application/use-repositories.hook"

const ListRepositories = () => {
  const nodes = useRepositoriesHook()
  return (
    <div className="list-repositories">
      {nodes.map((node, index) => {
        return (
          <ItemRepository
            key={index}
            description={node.description}
            title={node.title}
            language={node.language}
            stars={node.stars}
            web={node.web}
            urlRepository={node.urlRepository}
          />
        )
      })}
    </div>
  )
}

export default ListRepositories
