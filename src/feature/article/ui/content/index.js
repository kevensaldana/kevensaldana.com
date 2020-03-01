import React from "react"
import "./index.css"
import PropTypes from "prop-types"
import { MDXRenderer } from "gatsby-plugin-mdx"

const ContentArticle = ({ body }) => {
  return (
    <div className={"content-article lg:text-2xl text-xl font-serif"}>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  )
}
ContentArticle.defaultProps = {
  body: {},
}

ContentArticle.propTypes = {
  body: PropTypes.string,
}
export default ContentArticle
