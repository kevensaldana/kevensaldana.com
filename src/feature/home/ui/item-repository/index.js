import React, { useRef } from "react"
import "./index.css"
import PropTypes from "prop-types"
import useIntersectionObserver from "../../../../core/infrastructure/use-intersection-observer"
import gsap from "gsap/gsap-core"

const ItemRepository = ({
  language,
  title,
  description,
  stars,
  web,
  urlRepository,
}) => {
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
        className="item-repository bg-surface p-6 mb-3 shadow opacity-0"
      >
        <p className="uppercase text-xs">{language}</p>
        <a
          href={urlRepository}
          rel="noopener noreferrer"
          target="_blank"
          className="text-xl font-semibold mt-2"
        >
          {title}
        </a>
        <p className="text-sm  mb-3">{description}</p>
        <p className="text-sm ">
          <span className="mr-4">⭐️{stars}</span>
          <span className="mr-4">
            👁
            <a
              href={web}
              rel="noopener noreferrer"
              target="_blank"
              className="cursor-pointer font-semibold"
            >
              Demo
            </a>
          </span>
        </p>
      </div>
    </div>
  )
}
ItemRepository.defaultProps = {
  language: "",
  title: "",
  description: "",
  stars: 0,
  web: "",
  urlRepository: "",
}

ItemRepository.propTypes = {
  language: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  stars: PropTypes.number,
  web: PropTypes.string,
  urlRepository: PropTypes.string,
}
export default ItemRepository
