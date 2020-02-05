import PropTypes from "prop-types"
import React, { useState, useRef } from "react"
import Logo from "data/brand/logo.svg"
import "./header.css"
import gsap from "gsap"
import { Link, navigate } from "gatsby"

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const ref = useRef(null)

  function openMenu() {
    setOpen(true)
    let tl = gsap.timeline()
    gsap.set(".menu", { right: 0 })
    gsap.set(".menu-items a", { opacity: 0, x: 50 })
    gsap.set(".menu .btn-close", { opacity: 1 })
    tl.to(".menu", {
      duration: 0.2,
      width: "100%",
      ease: "expo.in",
    }).to(".menu-items a", {
      duration: 0.4,
      opacity: 1,
      stagger: 0.3,
      x: 0,
      ease: "ease",
    })
  }

  function closeMenu() {
    let tl = gsap.timeline()
    gsap.set(".menu .menu-items a", { opacity: 0 })
    tl.to(".menu", {
      duration: 0.4,
      width: "0",
      ease: "expo.out",
      clearProps: "right",
    })
    setOpen(false)
  }

  function navigateTo(to) {
    let tl = gsap.timeline()
    gsap.set(".menu .btn-close", { opacity: 0 })
    tl.to(".menu .tap", { duration: 0.5, height: "100%" })
      .to(".menu", {
        left: 0,
        duration: 0.5,
        width: "0",
        ease: "expo.out",
        clearProps: "left",
      })
      .to(".menu .tap", { height: "0" })

    navigate(to)
  }

  return (
    <nav ref={ref} className={`header-nav top-0 py-8`}>
      <div className="px-6 container flex items-center justify-between">
        <div className="flex items-center flex-grow mr-6">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="hidden md:flex flex-grow justify-end items-center ">
          <a
            className="cursor-pointer  px-4"
            onClick={() => navigateTo("/about-me")}
          >
            Acerca de mi
          </a>
          <a
            className="cursor-pointer px-4"
            onClick={() => navigateTo("/blog")}
          >
            Articulos
          </a>
        </div>
        <div className="flex flex-grow justify-end items-center md:hidden">
          <a
            onClick={openMenu}
            className={`inline-block text-sm cursor-pointer`}
          >
            <i className="material-icons text-4xl">menu</i>
          </a>
          <div className="menu z-10">
            <div className="text-right p-6">
              <a
                onClick={closeMenu}
                className={`overflow-hidden relative btn-close inline-block text-sm cursor-pointer ${
                  isOpen ? `text-white z-10` : "hidden"
                }`}
              >
                <i className="material-icons text-4xl">clear</i>
              </a>
            </div>
            <div className="menu-items text-4xl font-medium mx-12 my-32">
              <a
                className="block mb-4 cursor-pointer overflow-hidden relative"
                onClick={() => navigateTo("/")}
              >
                Home <i className="material-icons">arrow_forward</i>
                <span className="tap"></span>
              </a>
              <a
                className="block mb-4 cursor-pointer overflow-hidden relative"
                onClick={() => navigateTo("/about-me")}
              >
                Acerca de mi <i className="material-icons">arrow_forward</i>
                <span className="tap"></span>
              </a>
              <a
                className="block mb-4 cursor-pointer overflow-hidden relative "
                onClick={() => navigateTo("/blog")}
              >
                Articulos <i className="material-icons">arrow_forward</i>{" "}
                <span className="tap"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
