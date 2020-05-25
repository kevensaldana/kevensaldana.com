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
    <div className="item-repository bg-z-1 card-padding mb-3 shadow ">
      <p className="uppercase text-xs">{language}</p>
      <a
        href={urlRepository}
        rel="noopener noreferrer"
        target="_blank"
        className="text-xl font-semibold mt-2"
      >
        {title}
      </a>
      <p className="text-sm  mb-3">{description}</p>
      <p className="text-sm ">
        <span className="mr-4">⭐️{stars}</span>
        {web !== "" && (
          <span className="mr-4">
            👁
            <a
              href={web}
              rel="noopener noreferrer"
              target="_blank"
              className="cursor-pointer font-semibold"
            >
              Demo
            </a>
          </span>
        )}
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
