import React from "react"
import "./index.scss"
import Img from "gatsby-image"

const ContentCard = ({ title, logo, description }) => (
  <div
    className="content-box text-center flex flex-col justify-center"
    key={title}
  >
    <div className="logo-container">
      <Img className="logo" fixed={logo} alt="" />
    </div>
    <div className="content-box-content mt-5">
      <h2 className="title font-bold">{title}</h2>
      <p className="description mt-2">{description}</p>
    </div>
  </div>
)

export default ContentCard
