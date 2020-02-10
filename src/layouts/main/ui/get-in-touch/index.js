import React from "react"

const Index = () => {
  return (
    <section className="py-10  md:pb-20  text-white ">
      <div className="container">
        <div className="md:flex">
          <div className="md:w-1/3 text-center md:text-left font-light text-gray-500 text-sm md:text-lg">
            @ Keven Saldaña | {new Date().getFullYear()}
          </div>
          <div className="md:w-2/3 text-right font-bold text-gray-500 mt-3 md:mt-0">
            <a
              href="mailto:keven.sa17@gmail.com?subject=Hi"
              className="px-3 block text-center md:inline-block"
            >
              Email
            </a>
            <a
              href="https://www.instagram.com/kevengsa/"
              className=" px-3 block text-center md:inline-block"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/kevsa17"
              className=" px-3 block text-center md:inline-block"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/kevengsa/"
              className=" px-3 block text-center md:inline-block"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
