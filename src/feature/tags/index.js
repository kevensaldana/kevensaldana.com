import React from "react"
import { graphql } from "gatsby"

export default function PageTemplate({ data }) {
  console.log("data", data)
  return <div className="container"></div>
}

export const pageQuery = graphql`
  query MyQuery($tag: String = "learning") {
    allMdx(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      nodes {
        frontmatter {
          date
          path
          title
          tags
          featuredImage {
            relativeDirectory
            base
            childImageSharp {
              fluid {
                base64
              }
            }
          }
        }
      }
    }
  }
`
