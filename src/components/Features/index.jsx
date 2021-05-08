import React from "react"
import "./index.scss"
import ContentCard from "../common/ContentCard"


const Features = ({ title, contentBoxes }) => {
  return (
    <section className="app-feature-section section-padding-bottom section-margin container-padding">
      <div className="feature-content text-center">
        <h1 className="title text-5xl font-bold section-heading">{title}</h1>
      </div>
      <div className="feature-boxes justify-center grid sm:grid-cols-2 gap-5 md:flex">
        {contentBoxes.map(({ title, description, logo }) => (
          <ContentCard title={title} description={description} logo={logo} />
        ))}
      </div>
    </section>
  )
}

export default Features
