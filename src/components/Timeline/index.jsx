import React from "react"
import TimelineBox from "../TimelineBox"

import "./index.scss"

const TimeLine = ({ data }) => {
  return (
    <div className="timelineWrapper">
      {data.TimelineData.map((element, idx) => (
        <div
          key={idx}
          className={`timelineElement ${idx % 2 === 0 && "alternate"}`}
        >
          {/* {HERE} */}
          <TimelineBox
            title={element.title}
            description={element.description}
            link={element.link}
          />

          <div className="timelineElement-date">
            <div className="timelineElement-dateWrapper">
              <p>{element.date}</p>
            </div>

            <img
              src={element.logo}
              alt={element.title}
              className="timelineElement-logo"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default TimeLine
