import React from "react"
import SectionWrapper from "../SectionWrapper"
import FestivalBox from "./FestivalBox"
import "./index.scss"

const ScheduledFestivals = ({ isBgGray, title, festivals }) => (
  <SectionWrapper isBgGray={isBgGray} title={title}>
    <div className="festivals-container">
      <div className="col">
        {festivals.map((eve, idx) => idx % 2 === 0 && <FestivalBox {...eve} />)}
      </div>
      <div className="col">
        {festivals.map((eve, idx) => idx % 2 === 1 && <FestivalBox {...eve} />)}
      </div>
    </div>
  </SectionWrapper>
)

export default ScheduledFestivals
