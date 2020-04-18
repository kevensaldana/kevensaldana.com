import { graphql, useStaticQuery } from "gatsby"
import Repository from "../domain/repository"

export default function useRepositoriesHook(topic = "learning") {
  const {
    githubData: {
      data: {
        viewer: {
          repositories: { nodes },
        },
      },
    },
  } = useStaticQuery(graphql`
    query {
      githubData {
        data {
          viewer {
            repositories {
              nodes {
                description
                homepageUrl
                isFork
                isPrivate
                name
                url
                stargazers {
                  totalCount
                }
                repositoryTopics {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
                languages {
                  nodes {
                    name
                  }
                }
              }
            }
            location
            name
          }
        }
      }
    }
  `)
  const listRepos = nodes
    .filter(
      item =>
        item.repositoryTopics.nodes.filter(item => item.topic.name === topic)
          .length > 0
    )
    .map(
      node =>
        new Repository(
          node.languages.nodes[0].name,
          node.name,
          node.description,
          node.stargazers.totalCount,
          node.homepageUrl,
          node.url
        )
    )
  return listRepos
}
