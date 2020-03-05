import React, { useRef } from "react"
import configSite from "data/site/config"
import "./index.css"
import Me from "data/site/images/brand/me.png"
import useIntersectionObserver from "core/infrastructure/use-intersection-observer"
import gsap from "gsap/gsap-core"

const Social = ({ className }) => {
  const networks = configSite.social.networks
  const element = useRef(null)

  useIntersectionObserver({
    refs: [element],
    callback: props => {
      gsap.fromTo(
        props.target,
        { y: 100, opacity: 0 },
        { duration: 0.3, y: 0, opacity: 1, ease: "power2.easeIn" }
      )
    },
  })

  return (
    <div className="overflow-hidden relative ">
      <div
        ref={element}
        className={`opacity-0 flex social-networks text-sm font-bold items-center ${className}`}
      >
        <img width="50" src={Me} alt="Logo" />
        <div className="ml-5">
          {networks.map((item, index) => {
            return (
              <a
                key={index}
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-3xl text-center hover:text-primary mr-5"
              >
                <i className={`icon-${item.name.toLowerCase()}`} />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Social
