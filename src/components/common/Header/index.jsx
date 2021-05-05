import { Link } from "gatsby"
import React, { useState } from "react"
import Logo from "../../../assets/logo.png"
import Button from "../Button"
import { HamburgerIcon, SearchIcon } from "../Icons"
import "./index.scss"
import Drawer from "../Drawer"

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <header className="header-container">
      <main className="header-main">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links desktop">
          <ul className="links-ul">
            {[
              { text: "Events", link: "/about" },
              { text: "About Us", link: "/faq" },
              { text: "Blog", link: "/contact" },
              { text: "FilmFreeWay", link: "/film-free-way" },
              { text: "Networking", link: "/networking" },
              { text: "Contact Us", link: "/contact-us" },
            ].map(({ text, link, isBtn }) => (
              <li key={text} className="list-item" key={text}>
                <Link to={link}>{text}</Link>
              </li>
            ))}
            <li className="list-item">
              <SearchIcon width="16.44" height="16.44" />
            </li>
          </ul>
        </div>
        <div className="mobile-nav">
          <div onClick={() => setIsActive(!isActive)}>
            <HamburgerIcon />
          </div>
          <Drawer isActive={isActive} setIsActive={setIsActive} />
        </div>
      </main>
    </header>
  )
}

export default Header
