export default class Repository {
  language = ""
  title = ""
  description = ""
  stars = ""
  web = ""

  constructor(
    language = "",
    title = "",
    description = "",
    stars = "",
    web = ""
  ) {
    this.language = language
    this.title = title
    this.description = description
    this.stars = stars
    this.web = web
  }
}
