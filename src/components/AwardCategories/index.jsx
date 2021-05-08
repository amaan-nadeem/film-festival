import React from "react"
import SectionWrapper from "../SectionWrapper"
import "./index.scss"
import FestivalBox from "../ScheduledFestivals/FestivalBox"

const PercentageBox = ({ logo, title, description }) => (
  <div className="percentage-box">
    <div className="logo-container">
      <img src={logo} alt="" />
    </div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
)
const AwardCategories = ({ isBgGray, title, percentageBoxes, listing }) => (
  <SectionWrapper
    className="award-categories"
    isBgGray={isBgGray}
    title={title}
  >
    <div className="percentage-boxes grid grid-cols-4 justify-center items-center">
      {percentageBoxes.map(({ title, description, logo }) => (
        <PercentageBox title={title} description={description} logo={logo} />
      ))}
    </div>
    <div className="grid grid-cols-2 gap-10">
      {listing.map(({ ...eve }) => (
        <FestivalBox {...eve} />
      ))}
    </div>
  </SectionWrapper>
)

export default AwardCategories
