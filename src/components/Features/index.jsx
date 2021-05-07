import React from "react"
import "./index.scss"

const FeatureCard = ({ title, logo, description }) => (
  <div
    className={"feature-box text-center flex flex-col justify-center"}
    key={title}
  >
    <img className="logo" src={logo} alt="" />
    <div className="feature-box-content mt-5">
      <h2 className="title font-bold">{title}</h2>
      <p className="description mt-2">{description}</p>
    </div>
  </div>
)
const Features = ({ title, contentBoxes }) => {
  return (
    <section className="app-feature-section section-margin container-padding">
      <div className="feature-content text-center">
        <h1 className="title text-5xl font-bold section-heading">{title}</h1>
      </div>
      <div className="feature-boxes justify-center grid sm:grid-cols-2 gap-5 md:flex">
        {contentBoxes.map(({ title, description, logo }) => (
          <FeatureCard title={title} description={description} logo={logo} />
        ))}
      </div>
    </section>
  )
}

export default Features
