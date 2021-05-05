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
              { title: "About", link: "event" },
              { title: "FAQ", link: "coupon-main" },
              { title: "Contact", link: "stores" },
            ].map(({ title, link }, index) => {
              return (
                <li key={index}>
                  <Link to={`/${link}`}>{title}</Link>
                </li>
              )
            })}
          </ul>
          <Button>Download App</Button>
        </div>
      </div>
    </>
  )
}

export default Drawer
