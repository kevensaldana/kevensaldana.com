import React, { useState } from "react"
import Logo from "data/site/images/brand/logo-white.png"
import "./header.css"
import gsap from "gsap"
import { Link, navigate } from "gatsby"

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const elements = {
    menu: ".menu",
    linksMenu: ".menu-items a",
    btnClose: ".menu .btn-close",
    coverLinks: ".menu .tap",
  }

  function openMenu() {
    setOpen(true)
    let tl = gsap.timeline()
    gsap.set(elements.menu, { right: 0 })
    gsap.set(elements.linksMenu, { opacity: 0, x: 50 })
    gsap.set(elements.btnClose, { opacity: 1 })
    tl.to(elements.menu, {
      duration: 0.2,
      width: "100%",
      ease: "expo.in",
    }).to(elements.linksMenu, {
      duration: 0.4,
      opacity: 1,
      stagger: 0.3,
      x: 0,
      ease: "expo.in",
    })
  }

  function closeMenu() {
    let tl = gsap.timeline()
    gsap.set(elements.linksMenu, { opacity: 0 })
    tl.to(elements.menu, {
      duration: 0.4,
      width: "0",
      ease: "expo.out",
      clearProps: "right",
    })
    setOpen(false)
  }

  function navigateTo(to) {
    let tl = gsap.timeline()
    gsap.set(elements.btnClose, { opacity: 0 })
    tl.to(elements.coverLinks, { duration: 0.5, height: "100%" })
      .to(elements.menu, {
        left: 0,
        duration: 0.5,
        width: "0",
        ease: "expo.out",
        clearProps: "left",
      })
      .to(elements.coverLinks, { height: "0" })

    navigate(to)
  }

  return (
    <nav className={`header-nav top-0 py-8`}>
      <div className="px-6 container flex items-center justify-between">
        <div className="flex items-center flex-grow mr-6">
          <Link to="/">
            <img width="115" src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="hidden md:flex flex-grow justify-end items-center ">
          <a
            className="cursor-pointer px-4"
            onClick={() => navigateTo("/articles")}
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
            <div className="menu-items text-3xl font-medium mx-10 my-16">
              <a
                className="block mb-4 cursor-pointer overflow-hidden relative"
                onClick={() => navigateTo("/")}
              >
                Home <i className="material-icons">arrow_forward</i>
                <span className="tap"></span>
              </a>
              <a
                className="block mb-4 cursor-pointer overflow-hidden relative"
                onClick={() => navigateTo("/articles")}
              >
                Articles <i className="material-icons">arrow_forward</i>
                <span className="tap"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
