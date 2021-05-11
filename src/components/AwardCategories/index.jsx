import React from "react"
import FestivalBox from "../ScheduledFestivals/FestivalBox"
import SectionWrapper from "../SectionWrapper"
import "./index.scss"
import useWindowSize from "../../utils/useWindowWidth"
import Slider from "../common/Slider"

const PercentageBox = ({ logo, title, description }) => (
  <div className="percentage-box">
    <div className="logo-container">
      <img src={logo} alt="" />
    </div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
)
const AwardCategories = ({ isBgGray, title, percentageBoxes, listing }) => {
  const windowWidth = useWindowSize()

  return (
    <SectionWrapper
      className="award-categories"
      isBgGray={isBgGray}
      title={title}
      isNoPadding
    >
      {windowWidth[0] >= 1080 && (
        <div className="percentage-boxes grid grid-cols-3 lg:grid-cols-4 justify-center items-center">
          {percentageBoxes.map(({ title, description, image }) => (
            <PercentageBox
              title={title}
              description={description?.description}
              logo={image?.fluid?.src}
            />
          ))}
        </div>
      )}

      <div>
        {windowWidth[0] < 1080 && (
          <div className="award-categories-slider-container percentage-boxes">
            <Slider>
              {percentageBoxes.map(({ title, description, image }) => (
                <div>
                  <PercentageBox
                    title={title}
                    description={description?.description}
                    logo={image?.fluid?.src}
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
      <div className="award-categories-listing grid lg:grid-cols-2 gap-10 container-padding">
        {listing.map(({ title, categoriesListing }) => (
          <FestivalBox title={title} confirmedAttendingFilms={categoriesListing} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default AwardCategories
