import React from "react"
import SectionWrapper from "../SectionWrapper"
import FestivalBox from "./FestivalBox"
import "./index.scss"

const ScheduledFestivals = ({ isBgGray, title, festivals }) => (
  <SectionWrapper isBgGray={isBgGray} title={title}>
    <div className="festivals-container">
      <div className="col">
        {festivals.map((eve, idx) => (
          <FestivalBox {...eve} className={idx == 1 && "row-span-2"} />
        ))}
      </div>
    </div>
  </SectionWrapper>
)

export default ScheduledFestivals
