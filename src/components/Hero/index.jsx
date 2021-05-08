import classnames from "classnames"
import Img from "gatsby-image"
import React from "react"
import "./index.scss"
import HeroSlider from "./HeroSlider"
import reviewsSectionData from "../../site-data/reviews"
import Reviews from "../Reviews"

const Hero = ({ bgImage, sliderContent, isEvent }) => {
  console.log("bgImage >>>", bgImage.default)
  return (
    <section
      className={classnames(
        "hero-section grid items-center container-padding",
        isEvent && "eventBanner"
      )}
      style={{ backgroundImage: `url(${bgImage.default})` }}
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
          <h1 className="font-bold">
            Austin After Dark Film Festival in Texas
          </h1>
          <h2 className="font-semibold">
            Friday May 14 to Sunday May 16, 2021
          </h2>
          <div className="eventBanner-content-box">
            <p className="text">
              Are you ready for the Spring 2021 Austin After Dark Film Festival
              Film Screenings and Live Screenplay Reading event from May 14-16,
              2021? The Award Winners, Award Finalists and Official Selections
              have been published on the Spring 2021 Event Page.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
