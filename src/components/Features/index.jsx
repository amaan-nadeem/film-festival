import React, { useRef } from "react"
import ContentCard from "../common/ContentCard"
import "./index.scss"

import useWindowSize from "../../utils/useWindowWidth"
import Slider from "../common/Slider"

const Features = ({ title, contentBoxes }) => {
  const windowWidth = useWindowSize()

  return (
    <section className="app-feature-section section-padding-bottom section-margin ">
      <div className="feature-content text-center container-padding">
        <h1 className="title text-5xl font-bold section-heading">{title}</h1>
      </div>
      {windowWidth[0] >= 1080 && (
        <div className="feature-boxes justify-center grid sm:grid-cols-2 gap-10 lg:flex">
          {contentBoxes.map(
            ({
              title,
              description,
              image: {
                fluid: { src },
              },
            }) => (
              <ContentCard
                title={title}
                description={description.description}
                logo={src}
              />
            )
          )}
        </div>
      )}
      <div>
        {windowWidth[0] < 1080 && (
          <div className="features-slider-container">
            <Slider contentBoxes={contentBoxes}>
              {contentBoxes.map(
                ({
                  title,
                  description,
                  image: {
                    fluid: { src },
                  },
                }) => (
                  <div>
                    <ContentCard
                      title={title}
                      description={description.description}
                      logo={src}
                    />
                  </div>
                )
              )}
            </Slider>
          </div>
        )}
      </div>
    </section>
  )
}

export default Features
