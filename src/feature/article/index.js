import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function PageTemplate({ data: { mdx } }) {
  console.log("data", mdx)
  return (
    <div className="container">
      <h1 className="lg:text-4xl  text-3xl leading-tight font-medium">
        {mdx.frontmatter.title}
      </h1>
      <p className="text-gray-400 mb-4 mt-2">
        {mdx.frontmatter.date}, {mdx.timeToRead} min read
      </p>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`
