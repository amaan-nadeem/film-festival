import React, { useRef } from "react"
import Swiper from "react-id-swiper"
import { SliderLeftArrow, SliderRightArrow, StarIcon } from "../common/Icons"

const TestimonialsCard = ({
  title,
  occupation,
  avatar,
  description,
  ratings,
}) => (
  <div
    className={"testimonials-box text-center flex flex-col justify-center"}
    key={title}
  >
    <img className="logo" src={avatar} alt="" />
    <div className="testimonials-box-content mt-5">
      <h2 className="title font-bold">{title}</h2>
      <p className="occupation">{occupation}</p>
      <p className="description mt-2">{description}</p>
      <div className="ratings flex justify-center">
        {Array.from({ length: ratings }).map((_, key) => (
          <div className="mr-4">
            <StarIcon key={key} fill="#222" />
          </div>
        ))}
      </div>
    </div>
  </div>
)

const Slider = ({ testimonials, nextIcon, prevIcon }) => {
  const swiperRef = useRef(null)
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
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
    <div className="testimonials-slider-container">
      <Swiper {...params} ref={swiperRef}>
        {testimonials.map(
          ({ title, description, occupation, avatar, ratings }) => {
            return (
              <div>
                <TestimonialsCard
                  title={title}
                  description={description}
                  occupation={occupation}
                  ratings={ratings}
                  avatar={avatar}
                />
              </div>
            )
          }
        )}
      </Swiper>
      <button className="prev-btn" onClick={goPrev}>
        <SliderLeftArrow width="49" height="50" fill=" #66891D" />
      </button>
      <button className="next-btn" onClick={goNext}>
        <SliderRightArrow width="49" height="50" fill="#66891D" />
      </button>
    </div>
  )
}

const TestimonialsSlider = ({ testimonials }) => (
  <section className="testimonials-slider-section section-container container-padding">
    <div className="testimonials-slider-container">
      <Slider testimonials={testimonials} />
    </div>
  </section>
)

export default TestimonialsSlider
