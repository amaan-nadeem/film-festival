import React from "react"
import ContentCard from "../common/ContentCard"
import SectionWrapper from "../SectionWrapper"
import CategoriesListing from "./CategoriesListing"
import "./index.scss"

const Submissions = ({ isBgGray, title, contentBoxes, categoriesListing }) => (
  <SectionWrapper className="submissions" isBgGray={isBgGray} title={title}>
    <div className="submission-boxes justify-center grid sm:grid-cols-2 gap-5 md:flex">
      {contentBoxes.map(({ title, description, logo }) => (
        <ContentCard title={title} description={description} logo={logo} />
      ))}
    </div>
    <CategoriesListing
      title={categoriesListing.title}
      categories={categoriesListing.categories}
    />
  </SectionWrapper>
)

export default Submissions
