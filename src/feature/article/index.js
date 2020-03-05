import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import config from "data/site/config"
import { Disqus } from "gatsby-plugin-disqus"
import ContentArticle from "./ui/content"
import Seo from "core/ui/seo"

export default function PageTemplate({ data: { mdx } }) {
  const url = `${config.url + "/articles" + mdx.frontmatter.path}`
  const image =
    config.url + mdx.frontmatter.featuredImage.childImageSharp.fixed.src
  const disqusConfig = {
    url,
    identifier: mdx.id,
    title: mdx.frontmatter.title,
  }
  return (
    <div className="article container">
      <Seo
        title={mdx.frontmatter.title}
        image={image}
        url={url}
        description={mdx.frontmatter.description}
        type="article"
      />
      <h1 className={"text-primary text-center max-w-4xl m-auto"}>
        {mdx.frontmatter.title}
      </h1>
      <p className="text-sm mb-4 mt-2 font-sans text-center">
        {mdx.frontmatter.date}, {mdx.timeToRead} min read
      </p>
      <div className="lg:flex my-12">
        {/*<div className="lg:w-2/3 mr-auto">*/}
        <div className="lg:w-2/3 m-auto">
          <ContentArticle body={mdx.body} />
        </div>
        {/*<div className="lg:w-1/3 ml-auto">ULTIMOS POST</div>*/}
      </div>

      <div className={"pb-16"}>
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
        description
        path
        featuredImage {
          childImageSharp {
            fixed {
              src
            }
          }
        }
        title
        tags
      }
    }
  }
`
