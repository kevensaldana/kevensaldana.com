import React from "react"
import { graphql } from "gatsby"
import usePostsHook from "../../core/application/use-posts.hook"
import ListPosts from "../../core/ui/list-posts"

export default function TagTemplate({ data }) {
  const posts = usePostsHook(data.allMdx.nodes)
  return (
    <div className="container">
      <ListPosts posts={posts} />
    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery($tag: String = "learning") {
    allMdx(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      nodes {
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
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
