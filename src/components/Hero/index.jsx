import classnames from "classnames"
import React from "react"
import reviewsSectionData from "../../site-data/reviews"
import HeroSlider from "./HeroSlider"
import "./index.scss"

const Hero = ({
  bgImage,
  sliderContent,
  isEvent,
  title,
  description,
  dateRange,
}) => (
  <section
    className={classnames(
      "hero-section container-padding landing-page",
      isEvent && "eventBanner grid items-center"
    )}
    style={{ backgroundImage: `url(${bgImage})` }}
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
)

export default Hero
