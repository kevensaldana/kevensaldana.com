export default class Post {
  detail = ""
  title = ""
  tags = []
  img = {}
  constructor(detail = "", title = "", tags = [], img = {}) {
    this.detail = detail
    this.title = title
    this.tags = tags
    this.img = img
  }
}
