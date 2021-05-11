import React from "react"
import SectionWrapper from "../SectionWrapper"
import FestivalBox from "./FestivalBox"
import "./index.scss"

const ScheduledFestivals = ({ isBgGray, title, festivals }) => (
  <SectionWrapper isBgGray={isBgGray} title={title}>
    <div className="festivals-container">
      <div className="col">
        {festivals.map(
          (
            {
              title,
              itineraryTimes,
              itineraryDescriptions,
              screenOrderText,
              confirmedAttendingFilms,
              ticketBuyingLink
            },
            idx
          ) => (
            <FestivalBox
              title={title}
              itineraryTimes={itineraryTimes}
              itineraryDescriptions={itineraryDescriptions}
              screenOrderText={screenOrderText}
              confirmedAttendingFilms={confirmedAttendingFilms}
              buyTicketsLink={ticketBuyingLink}
              className={idx == 1 && "row-span-2"}
            />
          )
        )}
      </div>
    </div>
  </SectionWrapper>
)

export default ScheduledFestivals
