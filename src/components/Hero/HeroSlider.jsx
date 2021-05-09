import React, { useRef } from "react"
import Swiper from "react-id-swiper"
import { SliderLeftArrow, SliderRightArrow } from "../common/Icons"

const Slider = ({ reviews, nextIcon, prevIcon }) => {
  const swiperRef = useRef(null)
  const params = {
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  return (
    <div className="hero-slider-container">
      <Swiper {...params} ref={swiperRef}>
        {reviews.map(({ title, description }) => {
          return (
            <div className="hero-slider-card" key={title}>
              <div className="wrapper">
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
            </div>
          )
        })}
      </Swiper>
      <button className="prev-btn" onClick={goPrev}>
        <SliderLeftArrow width="49" height="50" fill="#ffffff" />
      </button>
      <button className="next-btn" onClick={goNext}>
        <SliderRightArrow width="49" height="50" fill="#ffffff" />
      </button>
    </div>
  )
}

const HeroSlider = ({ customerReviews }) => (
  <section className="reviews-section section-container section-margin container-padding">
    <div className="reviews-slider-container">
      <Slider reviews={customerReviews} />
    </div>
  </section>
)

export default HeroSlider
