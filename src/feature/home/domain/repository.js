export default class Repository {
  language = ""
  title = ""
  description = ""
  stars = ""
  web = ""
  urlRepository = ""
  constructor(
    language = "",
    title = "",
    description = "",
    stars = "",
    web = "",
    urlRepository = ""
  ) {
    this.language = language
    this.title = title
    this.description = description
    this.stars = stars
    this.web = web
    this.urlRepository = urlRepository
  }
}
