import React from "react"

import "./index.css"
import PropTypes from "prop-types"
import ItemPost from "../item-post"

const ListPosts = ({ posts }) => {
  console.log("ListPosts", posts)
  return (
    <div className="list-posts flex flex-wrap justify-between">
      {posts.map((post, index) => {
        return (
          <div className="list-posts__item mb-10" key={index}>
            <ItemPost
              img={post.img}
              tags={post.tags}
              detail={post.detail}
              title={post.title}
            />
          </div>
        )
      })}
    </div>
  )
}
ListPosts.defaultProps = {
  posts: [],
}

ListPosts.propTypes = {
  posts: PropTypes.array,
}
export default ListPosts
