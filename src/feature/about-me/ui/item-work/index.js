import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import "./index.css"

const ItemWork = ({ img, title, description, time, company }) => {
  return (
    <div className="item-work shadow-lg rounded-lg md:flex overflow-hidden">
      <div className="item-work__des md:w-1/2  bg-gray-900 p-5">
        <p className="text-white">{company}</p>
        <p className="text-gray-500">{time} </p>
        <p className="text-white mt-3">{title}</p>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="item-work__company md:w-1/2 bg-white flex items-center justify-center p-5">
        <Img className="item-work__image" fluid={img} />
      </div>
    </div>
  )
}
ItemWork.defaultProps = {
  img: {},
  title: "",
  description: "",
  time: "",
  company: "",
}

ItemWork.propTypes = {
  img: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.string,
  company: PropTypes.string,
}
export default ItemWork
