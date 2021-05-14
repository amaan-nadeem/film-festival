import React from "react"
import TimelineBox from "../TimelineBox"
import "./index.scss"
import moment from "moment"
import Img from "gatsby-image"

const TimeLine = ({ festivalTimelineBoxes }) => (
  <div className="timelineWrapper container-padding">
    {festivalTimelineBoxes.map(
      (
        {
          festivalTitle,
          festivalDescription: { festivalDescription },
          festivalDate,
          festivalLogo,
        },
        idx
      ) => (
        <div
          key={idx}
          className={`timelineElement ${idx % 2 === 0 && "alternate"}`}
        >
          {/* {HERE} */}
          <TimelineBox
            title={festivalTitle}
            description={festivalDescription}
            link=""
          />

          <div className="timelineElement-date">
            <div className="timelineElement-dateWrapper">
              <p>{moment(festivalDate).format("MMM DD, YYYY")}</p>
            </div>
            <div className="timelineElement-logo">
              <img src={festivalLogo.fluid.src} alt="" />
            </div>
          </div>
        </div>
      )
    )}
  </div>
)

export default TimeLine
