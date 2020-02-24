import Post from "../domain/post"

export default function usePostsHook(posts) {
  return posts.map(post => {
    const { frontmatter } = post
    return new Post(
      frontmatter.date,
      frontmatter.title,
      frontmatter.tags,
      frontmatter.featuredImage.childImageSharp.fluid
    )
  })
}
