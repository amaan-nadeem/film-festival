import React, { useRef } from "react"
import ContentCard from "../common/ContentCard"
import "./index.scss"
import Swiper from "react-id-swiper"
import useWindowSize from "../../utils/useWindowWidth"

const Slider = ({ contentBoxes }) => {
  const swiperRef = useRef(null)
  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }

  return (
    <div className="features-slider-container">
      <Swiper {...params} ref={swiperRef}>
        {contentBoxes.map(({ title, description, logo }) => {
          return (
            <div>
              <ContentCard
                title={title}
                description={description}
                logo={logo}
              />
            </div>
          )
        })}
      </Swiper>
    </div>
  )
}

const Features = ({ title, contentBoxes }) => {
  const windowWidth = useWindowSize()

  console.log("windowSize", windowWidth)
  return (
    <section className="app-feature-section section-padding-bottom section-margin container-padding">
      <div className="feature-content text-center">
        <h1 className="title text-5xl font-bold section-heading">{title}</h1>
      </div>
      {windowWidth[0] >= 1080 && (
        <div className="feature-boxes justify-center grid sm:grid-cols-2 gap-10 lg:flex">
          {contentBoxes.map(({ title, description, logo }) => (
            <ContentCard title={title} description={description} logo={logo} />
          ))}
        </div>
      )}
      <div>
        {windowWidth[0] < 1080 && (
          <div className="features-slider-container">
            <Slider contentBoxes={contentBoxes} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Features
