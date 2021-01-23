const config = {
  title: "Keven Saldaña - Developer",
  lang: "en",
  start_url: "/",
  description:
    "I graduated from the Universidad Nacional de Trujillo, Peru. I have five years of producing high-quality online platforms.",
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
      { name: "Twitter", src: "https://twitter.com/kevsa17", user: "@kevsa17" },
      { name: "Linkedin", src: "https://www.linkedin.com/in/kevengsa/" },
    ],
  },
}

module.exports = config
