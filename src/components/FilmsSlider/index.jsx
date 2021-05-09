import classnames from "classnames"
import React, { useRef } from "react"
import Swiper from "react-id-swiper"
import { SliderLeftArrow, SliderRightArrow } from "../common/Icons"
import VideoCard from "../VideoCard"
import "./index.scss"

const Slider = ({ films }) => {
  const swiperRef = useRef(null)
  const params = {
    slidesPerView: 2,
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
    <div className="films-slider-container">
      <Swiper {...params} ref={swiperRef}>
        {films.map(({ title, description, occupation, avatar, ratings }) => {
          return (
            <div>
              <VideoCard
                video={require("../../assets/video.mp4")}
                poster={require("../../site-data/Hero/hero-bg.jpg").default}
                variant=""
                youtubeId=""
              />
            </div>
          )
        })}
      </Swiper>
      <button className="prev-btn" onClick={goPrev}>
        <SliderLeftArrow width="49" height="50" fill="#66891D" />
      </button>
      <button className="next-btn" onClick={goNext}>
        <SliderRightArrow width="49" height="50" fill="#66891D" />
      </button>
    </div>
  )
}

const FilmsSlider = ({ films, isBgGray }) => (
  <section
    className={classnames("films-slider-section", isBgGray && "bg-gray")}
  >
    <div className="section-padding-bottom section-container section-margin container-padding">
      <h1 className="title section-heading">Watch Films Now!</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
        fringilla magna.
      </p>
      <div className="films-slider-section">
        <Slider films={films} />
      </div>
    </div>
  </section>
)

export default FilmsSlider
