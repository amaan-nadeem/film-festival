import classnames from "classnames"
import React from "react"
import reviewsSectionData from "../../site-data/reviews"
import HeroSlider from "./HeroSlider"
import "./index.scss"
import BackgroundImage from "gatsby-background-image"

const Hero = ({
  bgImage,
  sliderContent,
  isEvent,
  title,
  description,
  dateRange,
}) => (
  <BackgroundImage Tag="section" className="hero-bg-image" fluid={bgImage}>
    <section
      className={classnames(
        "hero-section container-padding landing-page",
        isEvent && "eventBanner grid items-center"
      )}
    >
      {!isEvent && (
        <div className="hero-slider-main">
          <HeroSlider
            title={reviewsSectionData.title}
            customerReviews={sliderContent}
            titleBgImage={reviewsSectionData.titleImage}
            reviewsSectionData={reviewsSectionData}
          />
        </div>
      )}

      {isEvent && (
        <div className="eventBanner-content">
          <h1 className="font-bold">{title}</h1>
          <h2 className="font-semibold">{dateRange}</h2>
          <div className="eventBanner-content-box">
            <p className="text">{description}</p>
          </div>
        </div>
      )}
    </section>
  </BackgroundImage>
)

export default Hero
