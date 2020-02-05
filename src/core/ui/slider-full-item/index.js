import React from "react"
import "./index.css"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const SliderFullItem = ({ img }) => {
  return (
    <div className="slider-full-item">
      <div className="slider-full-item__container">
        <Img fluid={img} />
      </div>
    </div>
  )
}
SliderFullItem.defaultProps = {
  img: {},
}

SliderFullItem.propTypes = {
  img: PropTypes.object,
}

export default SliderFullItem
