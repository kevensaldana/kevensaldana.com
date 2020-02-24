import React from "react"
import Img from "gatsby-image"
import "./index.css"
import PropTypes from "prop-types"

const ItemPost = ({ detail, img, title, tags }) => {
  return (
    <div className="item-post relative bg-dseta p-6">
      <p className={"text-gray-500 text-xs"}>{detail}</p>
      <p className={"text-xl font-semibold my-2"}>{title}</p>
      <ul className={"item-post__tags mb-4"}>
        {tags.map((tag, index) => {
          return (
            <li className={"text-gamma mr-3"} key={index}>
              <a href="">#{tag}</a>
            </li>
          )
        })}
      </ul>
      <div className="hidden lg:block">
        <Img fluid={img} />
      </div>
    </div>
  )
}
ItemPost.defaultProps = {
  detail: "",
  img: {},
  title: "",
  tags: [],
  isNew: true,
}

ItemPost.propTypes = {
  detail: PropTypes.string,
  img: PropTypes.object,
  title: PropTypes.string,
  tags: PropTypes.array,
  isNew: PropTypes.boolean,
}
export default ItemPost
