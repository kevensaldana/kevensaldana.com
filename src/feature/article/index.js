import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import config from "data/site/config"
import { Disqus } from "gatsby-plugin-disqus"
import ContentArticle from "./ui/content"

export default function PageTemplate({ data: { mdx } }) {
  console.log("data", mdx, config)
  const disqusConfig = {
    url: `${config.url + mdx.frontmatter.path}`,
    identifier: mdx.id,
    title: mdx.frontmatter.title,
  }
  return (
    <div className="article container">
      <h1 className={"text-primary text-center max-w-4xl m-auto"}>
        {mdx.frontmatter.title}
      </h1>
      <p className="text-sm mb-4 mt-2 font-sans text-center">
        {mdx.frontmatter.date}, {mdx.timeToRead} min read
      </p>
      <div className="lg:flex mb-10">
        <div className="lg:w-2/3 mr-auto">
          <ContentArticle body={mdx.body} />
        </div>
        {/*<div className="lg:w-1/3 ml-auto">ULTIMOS POST</div>*/}
      </div>

      <div className={"mb-16"}>
        <Disqus config={disqusConfig} />
      </div>
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
