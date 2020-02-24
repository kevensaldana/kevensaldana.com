import React from "react"
import Home from "feature/home"
import { graphql } from "gatsby"
import usePostsHook from "../core/application/use-posts.hook"

const IndexPage = ({ data }) => {
  const posts = usePostsHook(data.allMdx.nodes)
  console.log("posts", posts)
  return <Home posts={posts} />
}

export const pageQuery = graphql`
  query MyQuery1($tag: String = "learning") {
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
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
