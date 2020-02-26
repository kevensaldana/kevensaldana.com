import React from "react"
import Img from "gatsby-image"
import "./index.css"
import PropTypes from "prop-types"

const ItemPost = ({ detail, img, title, tags, timeToRead, url }) => {
  return (
    <div className="item-post relative bg-dseta p-6">
      <p className={"text-gray-500 text-xs"}>
        {detail}, {timeToRead} min read
      </p>
      <a
        href={`/articles${url}`}
        className={"text-xl font-semibold my-2 text-gray-500 hover:text-white"}
      >
        {title}
      </a>
      {/*<ul className={"item-post__tags mb-4"}>*/}
      {/*  {tags.map((tag, index) => {*/}
      {/*    return (*/}
      {/*      <li className={"text-gamma mr-3"} key={index}>*/}
      {/*        <a href="">#{tag}</a>*/}
      {/*      </li>*/}
      {/*    )*/}
      {/*  })}*/}
      {/*</ul>*/}
      <div className="hidden lg:block mt-2">
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
  timeToRead: 1,
  url: "",
}

ItemPost.propTypes = {
  detail: PropTypes.string,
  img: PropTypes.object,
  title: PropTypes.string,
  tags: PropTypes.array,
  isNew: PropTypes.bool,
  timeToRead: PropTypes.number,
  url: PropTypes.string,
}
export default ItemPost
