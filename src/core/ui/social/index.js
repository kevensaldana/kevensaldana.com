import React from "react"
import configSite from "data/site/config"
import "./index.css"
import Me from "data/site/images/brand/me.png"

const Social = ({ className }) => {
  const networks = configSite.social.networks

  return (
    <div
      className={`flex social-networks text-sm font-bold items-center ${className}`}
    >
      <img width="60" src={Me} alt="Logo" />
      <div className="ml-5">
        {networks.map((item, index) => {
          return (
            <a
              key={index}
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center text-gray-500 hover:text-gamma"
            >
              {item.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Social
