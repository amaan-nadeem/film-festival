import React from "react"
import "./index.scss"
import { Link } from "gatsby"

const SocialMedia = ({ title, mediaPlatforms }) => {
  return (
    <section className="section-padding">
      <div className="app-social-media-section container-padding">
        <div className="social-media-content text-center">
          <h1 className="title text-5xl font-bold section-heading">{title}</h1>
        </div>
        <div className="media-platforms grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {mediaPlatforms.map(({ image, Icon }) => (
            <div className="card">
              <Icon />
              <img src={image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialMedia
