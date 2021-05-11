import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import heroSectionData from "../site-data/Hero"
import SEO from "../components/seo"
import Header from "../components/common/Header"
import Features from "../components/Features"
import featuresData from "../site-data/features"
import LatestBlogs from "../components/LatestBlogs"
import latestBlogsData from "../site-data/latest-blogs"
import FilmsSlider from "../components/FilmsSlider"
import SocialMedia from "../components/SocialMedia"
import socialMediaData from "../site-data/social-media"
import ScheduledFestivals from "../components/ScheduledFestivals"
import Submissions from "../components/Submissions"
import AwardCategories from "../components/AwardCategories"
import scheduledFestivalsData from "../site-data/scheduled-festivals"
import submissionsData from "../site-data/submissions"
import awardCategoriesData from "../site-data/award-categories"
import { graphql } from "gatsby"

export const eventPageQuery = graphql`
  query {
    allContentfulEventPage {
      edges {
        node {
          heroSectionTitle
          heroSectionDescription {
            heroSectionDescription
          }
          heroBgImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          heroSectionDateRange {
            heroSectionDateRange
          }
          featuresSectionTitle
          featuresBoxes {
            title
            description {
              description
            }
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
          festivalScheduleSectionTitle
          festivalEventsSectionDescription {
            festivalEventsSectionDescription
          }
          festivalScheduleContentBoxes {
            title
            itineraryTimes
            itineraryDescriptions
            screenOrderText
            confirmedAttendingFilms
            ticketBuyingLink
          }
          submissionsSectionTitle
          submissionsCategoriesListingTitle
          submissionsCategoriesListing
          submissionsSectionContentBoxes {
            title
            description {
              description
            }
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
          awardCategoriesSectionTitle
          awardCategoriesListingBoxes {
            title
            categoriesListing
          }
          awardCategoriesSectionPercentageBoxes {
            title
            description {
              description
            }
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
          festivalEventsSectionTitle
          festivalEventsSectionDescription {
            festivalEventsSectionDescription
          }
          festivalEvents {
            title
            description {
              description
            }
            descriptiveLink
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
          socialMediaSectionTitle
          socialMediaBoxes {
            cardImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            mediaPlatformIcon {
              file {
                url
              }
            }
            platformPageLink
          }
        }
      }
    }
  }
`

const Events = ({ data }) => {
  const {
    allContentfulEventPage: {
      edges: [
        {
          node: {
            heroSectionTitle,
            heroSectionDescription,
            heroBgImage,
            heroSectionDateRange,
            featuresSectionTitle,
            featuresBoxes,
            festivalScheduleSectionTitle,
            festivalScheduleContentBoxes,
            submissionsSectionTitle,
            submissionsCategoriesListingTitle,
            submissionsCategoriesListing,
            submissionsSectionContentBoxes,
            awardCategoriesSectionTitle,
            awardCategoriesListingBoxes,
            awardCategoriesSectionPercentageBoxes,
            festivalEventsSectionTitle,
            festivalEventsSectionDescription,
            festivalEvents,
            socialMediaSectionTitle,
            socialMediaBoxes,
          },
        },
      ],
    },
  } = data
  return (
    <Layout>
      <SEO title="Events" />
      <div className="top-section">
        <Header />
        <Hero
          title={heroSectionTitle}
          description={heroSectionDescription?.heroSectionDescription}
          dateRange={heroSectionDateRange?.heroSectionDateRange}
          isEvent
          bgImage={heroBgImage?.fluid?.src}
        />
      </div>
      <Features
        title={featuresSectionTitle}
        description={featuresData.description}
        contentBoxes={featuresBoxes}
      />
      <ScheduledFestivals
        isBgGray
        title={festivalScheduleSectionTitle}
        festivals={festivalScheduleContentBoxes}
      />
      <Submissions
        title={submissionsSectionTitle}
        contentBoxes={submissionsSectionContentBoxes}
        categoriesListing={submissionsCategoriesListing}
        categoriesListingTitle={submissionsCategoriesListingTitle}
      />
      <AwardCategories
        isBgGray
        title={awardCategoriesSectionTitle}
        percentageBoxes={awardCategoriesSectionPercentageBoxes}
        listing={awardCategoriesListingBoxes}
      />
      <FilmsSlider films={[{}, {}, {}, {}]} />
      <LatestBlogs
        isBgGray
        title={festivalEventsSectionTitle}
        description={
          festivalEventsSectionDescription.festivalEventsSectionDescription
        }
        // linkText={latestBlogsData.linkText}
        blogs={festivalEvents}
      />
      <SocialMedia
        title={socialMediaSectionTitle}
        mediaPlatforms={socialMediaBoxes}
      />
    </Layout>
  )
}

export default Events
