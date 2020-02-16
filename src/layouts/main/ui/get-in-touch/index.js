import React from "react"
import configSite from "data/site/config"

const Index = () => {
  const networks = configSite.social.networks

  return (
    <section className="py-10  md:pb-20  text-white ">
      <div className="container">
        <div className="md:flex">
          <div className="md:w-1/3 text-center md:text-left font-light text-gray-500 text-sm md:text-lg">
            @ {configSite.author} | {new Date().getFullYear()}
          </div>
          <div className="md:w-2/3 text-right font-bold text-gray-500 mt-3 md:mt-0">
            {networks.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 block text-center md:inline-block"
                >
                  {item.name}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
