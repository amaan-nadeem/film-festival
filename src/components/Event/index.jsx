import React from "react"

import "./style.scss"

const Event = ({ title, times, link, points, buyTicketsLink }) => {
  return (
    <div className="eventContainer">
      <h3 className="box-heading">{title}</h3>
      <ul className="timings">
        {times.map((moment, idx) => {
          return (
            <li key={idx}>
              <span className="timing-time">{moment.time}</span>
              <span className="timing-text">{moment.activity}</span>
            </li>
          )
        })}
      </ul>
      <a className="event-link" href={link}>
        Screening Order of Confirmed Attending Films
      </a>
      <ul className="event-points">
        {points.map((point, idx) => {
          return (
            <li key={idx} className="point">
              <span className="point-number">{idx + 1}.</span>
              <span className="point-text">{point}</span>
            </li>
          )
        })}
      </ul>
      <a href={buyTicketsLink} className="event-buyTicket">
        Buy Tickets!
      </a>
    </div>
  )
}

export default Event
