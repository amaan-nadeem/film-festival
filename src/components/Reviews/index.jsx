import React, { useRef } from "react"
import Swiper from "react-id-swiper"
import { StarIcon } from "../common/Icons"
import "./index.scss"
import HeroSlider from "../Hero/HeroSlider"

const ReviewsSlider = ({ reviews, nextIcon, prevIcon }) => {
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
    <div className="slider-container">
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
        <img src={prevIcon.default} alt="" />
      </button>
      <button className="next-btn" onClick={goNext}>
        <img src={nextIcon.default} alt="" />
      </button>
    </div>
  )
}

const Reviews = ({
  title,
  titleBgImage,
  customerReviews,
  reviewsSectionData,
}) => {
  return (
    <section className="reviews-section section-container section-margin container-padding">
      <div className="reviews-slider-container">
        <HeroSlider
          nextIcon={reviewsSectionData.nextIcon.default}
          prevIcon={reviewsSectionData.prevIcon.default}
          reviews={customerReviews}
        />
      </div>
    </section>
  )
}

export default Reviews
