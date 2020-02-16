const config = {
  title: "Keven Saldaña - Developer",
  lang: "es",
  start_url: "/",
  description:
    "Desarrollador web peruano. Estudié Ciencias de la Computación en la Universidad Nacional de Trujillo. Especializado en Javascript.",
  author: "Keven Saldaña",
  fonts: [`material icons`, `Poppins\:300,400,500,700,800,900`],
  icon: "./data/site/images/brand/icon.png",
  url: "https://kevensaldana.com",
  tagManager: {
    id: "GTM-54M4BNH",
    includeInDevelopment: false,
  },
  menu: [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Articles",
      link: "/blog/",
    },
  ],
  social: {
    email: "keven.sa17@gmail.com",
    networks: [
      { name: "Email", src: "mailto:keven.sa17@gmail.com?subject=Hi" },
      { name: "Instagram", src: "https://www.instagram.com/kevengsa/" },
      { name: "Twitter", src: "https://twitter.com/kevsa17" },
      { name: "Linkedin", src: "https://www.linkedin.com/in/kevengsa/" },
    ],
  },
}

module.exports = config
