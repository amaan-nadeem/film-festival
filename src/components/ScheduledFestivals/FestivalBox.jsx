import React from "react"
import "./index.scss"
import classNames from "classnames"

const FestivalBox = ({
  buyTicketsLink,
  btnText,
  className,
  title,
  itineraryTimes,
  itineraryDescriptions,
  screenOrderText,
  confirmedAttendingFilms,
}) => (
  <div className={classNames("festivalContainer", className)}>
    <h3 className="box-heading">{title}</h3>
    <ul className="itinerary">
      {itineraryTimes?.length > 0 &&
        itineraryTimes.map((time, index) => (
          <li key={time}>
            <span className="itinerary-time">{time}</span>
            <span className="itinerary-text">
              {itineraryDescriptions[index]}
            </span>
          </li>
        ))}
    </ul>
    <p className="festival-link">
      {screenOrderText}
    </p>
    <ul className="festival-points">
      {confirmedAttendingFilms.map((point, idx) => (
        <li key={idx} className="point">
          <span className="point-number">{idx + 1}.</span>
          <span className="point-text">{point}</span>
        </li>
      ))}
    </ul>
    {btnText && (
      <a href={buyTicketsLink} className="festival-buyTicket">
        Buy Tickets!
      </a>
    )}
  </div>
)

export default FestivalBox
