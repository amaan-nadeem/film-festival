import React, { useRef } from "react"
import Swiper from "react-id-swiper"
import "./index.scss"

const Slider = ({ children }) => {
  const swiperRef = useRef(null)
  const params = {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  }

  return (
    <div className="slider-container">
      <Swiper {...params} ref={swiperRef}>
        {children}
      </Swiper>
    </div>
  )
}
export default Slider
