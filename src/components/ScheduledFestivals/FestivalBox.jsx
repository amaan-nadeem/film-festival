import React from "react"

import "./index.scss"

const FestivalBox = ({ title, times, link, points, buyTicketsLink }) => (
  <div className="festivalContainer">
    <h3 className="box-heading">{title}</h3>
    <ul className="itinerary">
      {times.map(({ time, activity }) => (
        <li key={time}>
          <span className="itinerary-time">{time}</span>
          <span className="itinerary-text">{activity}</span>
        </li>
      ))}
    </ul>
    <p className="festival-link" href={link}>
      Screening Order of Confirmed Attending Films
    </p>
    <ul className="festival-points">
      {points.map((point, idx) => (
        <li key={idx} className="point">
          <span className="point-number">{idx + 1}.</span>
          <span className="point-text">{point}</span>
        </li>
      ))}
    </ul>
    <a href={buyTicketsLink} className="festival-buyTicket">
      Buy Tickets!
    </a>
  </div>
)

export default FestivalBox
