import React from "react"

const TimelineBox = element => {
  return (
    <div className="timelineElement-content">
      <h3>{element.title}</h3>
      <p>{element.description}</p>
      <a href={element.link} className="timelineElement-button">
        Learn More
      </a>
    </div>
  )
}

export default TimelineBox
