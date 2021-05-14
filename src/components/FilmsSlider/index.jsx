import classnames from "classnames"
import React, { useRef } from "react"
import Swiper from "react-id-swiper"
import { SliderLeftArrow, SliderRightArrow } from "../common/Icons"
import VideoCard from "../VideoCard"
import "./index.scss"

const Slider = ({ films, videosThumbnail }) => {
  const swiperRef = useRef(null)
  const params = {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1280: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
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
        {films.map(({ file: { url } }, index) => {
          return (
            <div key={url}>
              <VideoCard
                video={url}
                poster={videosThumbnail?.src}
                variant=""
                youtubeId=""
                videoIndex={index}
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

const FilmsSlider = ({
  isBgGray,
  title,
  description,
  films,
  videosThumbnail,
}) => (
  <section
    className={classnames("films-slider-section", isBgGray && "bg-gray")}
  >
    <div className="section-padding-bottom section-container section-margin container-padding">
      <h1 className="title section-heading">{title}</h1>
      <p className="description">{description}</p>
      <div className="films-slider-section">
        <Slider films={films} videosThumbnail={videosThumbnail?.fluid} />
      </div>
    </div>
  </section>
)

export default FilmsSlider
