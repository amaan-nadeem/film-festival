import React from "react"
import ContentCard from "../common/ContentCard"
import SectionWrapper from "../SectionWrapper"
import CategoriesListing from "./CategoriesListing"
import "./index.scss"
import useWindowSize from "../../utils/useWindowWidth"
import Slider from "../common/Slider"

const Submissions = ({
  isBgGray,
  title,
  contentBoxes,
  categoriesListingTitle,
  categoriesListing,
}) => {
  const windowWidth = useWindowSize()

  return (
    <SectionWrapper className="submissions" isBgGray={isBgGray} title={title}>
      {windowWidth[0] >= 1080 && (
        <div className="submission-boxes justify-center grid sm:grid-cols-2 gap-5 md:flex">
          {contentBoxes.map(({ title, description, image }) => (
            <div>
              <ContentCard
                title={title}
                description={description?.description}
                logo={image?.fluid?.src}
              />
            </div>
          ))}
        </div>
      )}
      <div>
        {windowWidth[0] < 1080 && (
          <div className="submissions-slider-container">
            <Slider>
              {contentBoxes.map(({ title, description, image }) => (
                <div>
                  <ContentCard
                    title={title}
                    description={description?.description}
                    logo={image?.fluid?.src}
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
      <CategoriesListing
        title={categoriesListingTitle}
        categories={categoriesListing}
      />
    </SectionWrapper>
  )
}

export default Submissions
