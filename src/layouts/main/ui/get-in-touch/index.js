import React from "react"
import configSite from "data/site/config"

const Index = () => {
  return (
    <section className="py-10  md:pb-20  text-white ">
      <div className="container">
        <div className="text-center font-light text-gray-500 text-sm md:text-lg">
          @ {configSite.author} | {new Date().getFullYear()}
        </div>
      </div>
    </section>
  )
}

export default Index
