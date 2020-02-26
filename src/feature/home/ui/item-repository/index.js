import React from "react"
import "./index.css"
import PropTypes from "prop-types"

const ItemRepository = ({
  language,
  title,
  description,
  stars,
  web,
  urlRepository,
}) => {
  return (
    <div className="item-repository bg-dseta p-6 mb-3 shadow">
      <p className="uppercase text-xs">{language}</p>
      <a
        href={urlRepository}
        rel="noopener noreferrer"
        target="_blank"
        className="text-xl font-semibold mt-2 text-gray-500 hover:text-white"
      >
        {title}
      </a>
      <p className="text-sm text-gray-500 mb-3">{description}</p>
      <p className="text-sm text-gray-500">
        <span className="mr-4">⭐️{stars}</span>
        <span className="mr-4">
          👁
          <a
            href={web}
            rel="noopener noreferrer"
            target="_blank"
            className="cursor-pointer hover:text-gamma"
          >
            Demo
          </a>
        </span>
      </p>
    </div>
  )
}
ItemRepository.defaultProps = {
  language: "",
  title: "",
  description: "",
  stars: 0,
  web: "",
  urlRepository: "",
}

ItemRepository.propTypes = {
  language: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  stars: PropTypes.number,
  web: PropTypes.string,
  urlRepository: PropTypes.string,
}
export default ItemRepository
