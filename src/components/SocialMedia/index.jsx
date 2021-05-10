import React from "react"
import "./index.scss"
import useWindowSize from "../../utils/useWindowWidth"
import Slider from "../common/Slider"

const SocialMediaCard = ({ image, Icon }) => (
  <div className="card">
    <Icon />
    <img src={image} />
  </div>
)
const SocialMedia = ({ title, mediaPlatforms }) => {
  const windowWidth = useWindowSize()
  return (
    <section className="section-padding">
      <div className="app-social-media-section ">
        <div className="social-media-content text-center container-padding">
          <h1 className="title text-5xl font-bold section-heading">{title}</h1>
        </div>
        {windowWidth[0] >= 1080 && (
          <div className="media-platforms grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {mediaPlatforms.map(({ image, Icon }) => (
              <SocialMediaCard image={image} Icon={Icon} />
            ))}
          </div>
        )}

        {windowWidth[0] < 1080 && (
          <div className="social-media-slider-container media-platforms">
            <Slider>
              {mediaPlatforms.map(({ image, Icon }) => (
                <div>
                  <SocialMediaCard image={image} Icon={Icon} />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  )
}

export default SocialMedia
