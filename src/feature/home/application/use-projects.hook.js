import { graphql, useStaticQuery } from "gatsby"

export default function useProjectsHook() {
  const {
    allProjectsJson: { nodes },
  } = useStaticQuery(graphql`
    query {
      allProjectsJson {
        nodes {
          title
          description
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return nodes
}
