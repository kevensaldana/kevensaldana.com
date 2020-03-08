import Post from "../domain/post"

export default function usePostsHook(posts) {
  console.log("posts", posts)
  return posts.map(post => {
    const { frontmatter, timeToRead } = post
    return new Post(
      frontmatter.date,
      frontmatter.title,
      frontmatter.tags,
      frontmatter.featuredImage.childImageSharp?.fluid,
      timeToRead,
      frontmatter.path
    )
  })
}
