import React from "react"
import "./index.scss"
import { Link } from "gatsby"
import { CrossIcon } from "../Icons"
import Button from "../Button"

const Drawer = ({ setIsActive, isActive }) => {
  return (
    <>
      <div className="sideMenu" style={{ right: isActive ? "0" : "-300px" }}>
        <div className="close" onClick={() => setIsActive(!isActive)}>
          <CrossIcon />
        </div>
        <div className="flex flex-col justify-between h-full">
          <ul>
            {[
              { title: "Home", link: "event" },
              { title: "Events", link: "coupon-main" },
              { title: "Blog", link: "stores" },
              { title: "FilmFreeWay", link: "stores" },
              { title: "Networking", link: "stores" },
              { title: "Contact Us", link: "stores" },
            ].map(({ title, link }, index) => {
              return (
                <li key={index}>
                  <Link to={`/${link}`}>{title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Drawer
