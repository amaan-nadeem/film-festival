import classnames from "classnames"
import Img from "gatsby-image"
import React from "react"
import "./index.scss"
import HeroSlider from "./HeroSlider"
import reviewsSectionData from "../../site-data/reviews"
import Reviews from "../Reviews"


const Hero = ({ bgImage, sliderContent, nextIcon, prevIcon }) => {
  console.log("bgImage >>>", bgImage.default)
  return (
    <section
      className="hero-section grid items-center container-padding"
      style={{ backgroundImage: `url(${bgImage.default})` }}
    >
      <div className="hero-slider-main">
        <HeroSlider
          title={reviewsSectionData.title}
          customerReviews={sliderContent}
          titleBgImage={reviewsSectionData.titleImage}
          reviewsSectionData={reviewsSectionData}
        />
      </div>
    </section>
  )
}

export default Hero
