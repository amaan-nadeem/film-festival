import React from "react"

import Event from "../Event"
import "./index.scss"

const Events = ({ title, events, ...props }) => {
  return (
    <section className="app-testimonials-section section-container section-margin container-padding">
      <div className="text-center">
        <h1 className="title text-5xl font-bold section-heading">{title}</h1>
      </div>
      <div className="events-container">
        <div className="col">
          {events.map((eve, idx) => {
            if (idx % 2 === 0) {
              return <Event {...eve} />
            }
          })}
        </div>
        <div className="col">
          {events.map((eve, idx) => {
            if (idx % 2 === 1) {
              return <Event {...eve} />
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Events
