import React from "react"
import "./index.scss"
import useWindowSize from "../../utils/useWindowWidth"
import Slider from "../common/Slider"
import { Link } from "gatsby"

const SocialMediaCard = ({ image, icon, platformPageLink }) => (
  <Link to={platformPageLink}>
    <div className="card">
      <img className="icon" src={icon} alt="" />
      <img src={image} alt="" />
    </div>
  </Link>
)
const SocialMedia = ({ title, mediaPlatforms }) => {
  const windowWidth = useWindowSize()
  console.log("mediaPlatform", mediaPlatforms)
  return (
    <section className="section-padding">
      <div className="app-social-media-section ">
        <div className="social-media-content text-center container-padding">
          <h1 className="title text-5xl font-bold section-heading">{title}</h1>
        </div>
        {windowWidth[0] >= 1080 && (
          <div className="media-platforms grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {mediaPlatforms.map(
              ({ mediaPlatformIcon, cardImage, platformPageLink }) => (
                <SocialMediaCard
                  image={cardImage?.fluid?.src}
                  icon={mediaPlatformIcon?.file?.url}
                  platformPageLink={platformPageLink}
                />
              )
            )}
          </div>
        )}

        {windowWidth[0] < 1080 && (
          <div className="social-media-slider-container media-platforms">
            <Slider>
              {mediaPlatforms.map(
                ({ mediaPlatformIcon, cardImage, platformPageLink }) => (
                  <div>
                    <SocialMediaCard
                      image={cardImage?.fluid?.src}
                      icon={mediaPlatformIcon?.file?.url}
                      platformPageLink={platformPageLink}
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

export default SocialMedia
