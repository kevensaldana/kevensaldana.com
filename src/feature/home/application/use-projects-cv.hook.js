import { graphql, useStaticQuery } from "gatsby"

export default function useProjectsCvHook() {
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
