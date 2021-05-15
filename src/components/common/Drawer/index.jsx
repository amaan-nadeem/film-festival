import { Link } from "gatsby"
import React from "react"
import { CrossIcon, SliderRightArrow } from "../Icons"
import "./index.scss"
import { navigate } from "gatsby"

const Drawer = ({ setIsActive, isActive }) => (
  <>
    <div className="sideMenu" style={{ right: isActive ? "0" : "-300px" }}>
      <div className="flex flex-col justify-between">
        <ul>
          <li
            className="flex justify-between items-center"
            onClick={() => setIsActive(!isActive)}
          >
            <Link>Search</Link>
            <CrossIcon />
          </li>
          {[
            { title: "Home", link: "" },
            { title: "Events", link: "events" },
            { title: "Blog", link: "blog" },
            { title: "FilmFreeWay", link: "film-free-way" },
            { title: "Networking", link: "networking" },
            { title: "Contact Us", link: "contact-us" },
          ].map(({ title, link }, index) => {
            return (
              <li
                key={index}
                className="flex justify-between items-center"
                onClick={() => navigate(`/${link}`)}
              >
                <Link to={`/${link}`}>{title}</Link>
                <SliderRightArrow />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  </>
)

export default Drawer
