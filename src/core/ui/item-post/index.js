import React from "react"
import { Link } from "gatsby"
import "./index.css"
import PropTypes from "prop-types"

const ItemPost = ({ detail, img, title, tags, timeToRead, url }) => {
  return (
    <div className="item-post relative bg-z-1 card-padding ">
      <p className={" text-xs"}>
        {detail}, {timeToRead} min read
      </p>
      <div className={"text-xl font-semibold"}>
        <Link to={`/articles${url}`}>{title}</Link>
      </div>
      <ul className={"item-post__tags my-4 p-0"}>
        {tags
          .filter(tag => tag !== "learning")
          .map((tag, index) => {
            return (
              <li className={"text-primary mr-3"} key={index}>
                <Link to={`/tag/${tag}`}>#{tag}</Link>
              </li>
            )
          })}
      </ul>
      {/*<div className="hidden lg:block mt-5">*/}
      {/*  <Img fluid={img} />*/}
      {/*</div>*/}
    </div>
  )
}
ItemPost.defaultProps = {
  detail: "",
  img: {},
  imgUrl: "",
  title: "",
  tags: [],
  isNew: true,
  timeToRead: 1,
  url: "",
}

ItemPost.propTypes = {
  detail: PropTypes.string,
  img: PropTypes.object,
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
  isNew: PropTypes.bool,
  timeToRead: PropTypes.number,
  url: PropTypes.string,
}
export default ItemPost
