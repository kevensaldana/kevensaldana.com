export default class Post {
  detail = ""
  title = ""
  tags = []
  img = {}
  timeToRead = ""
  path = ""
  constructor(
    detail = "",
    title = "",
    tags = [],
    img = {},
    timeToRead = "",
    path = ""
  ) {
    this.detail = detail
    this.title = title
    this.tags = tags
    this.img = img
    this.timeToRead = timeToRead
    this.path = path
  }
}
