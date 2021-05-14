import * as React from "react"
import Header from "../components/common/Header"
import Features from "../components/Features"
import FilmsSlider from "../components/FilmsSlider"
import Hero from "../components/Hero"
import LatestBlogs from "../components/LatestBlogs"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials"
import featuresData from "../site-data/features"
import heroSectionData from "../site-data/Hero"
import latestBlogsData from "../site-data/latest-blogs"
import testimonialsData from "../site-data/testimonials"
import Timeline from "../components/Timeline"
import TimelineData from "../site-data/timeline"
import SocialMedia from "../components/SocialMedia"
import socialMediaData from "../site-data/social-media"
import { graphql } from "gatsby"

export const landingPageQuery = graphql`
  query {
    allContentfulLandingPage {
      edges {
        node {
          heroSliderCards {
            title
            description {
              description
            }
            learnMoreBtnLink
          }
          heroBgImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          featureSectionTitle
          featureBoxes {
            title
            description {
              description
            }
            image {
              fixed {
                ...GatsbyContentfulFixed
              }
            }
          }
          festivalTimelineBoxes {
            festivalTitle
            festivalDate
            festivalDescription {
              festivalDescription
            }
            festivalLogo {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
          testimonialsSectionTitle
          testimonialsSectionDescription {
            testimonialsSectionDescription
          }
          testimonials {
            avatar {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            reviewer
            occupation
            rating
            review {
              review
            }
          }
          blogsSectionTitle
          blogsSectionDescription {
            blogsSectionDescription
          }
          blogs {
            title
            description {
              description
            }
            descriptiveLink
            image {
              fixed(width: 600, height: 600) {
                ...GatsbyContentfulFixed
              }
            }
          }
          socialMediaSectionTitle
          socialMediaCards {
            mediaPlatformIcon {
              file {
                url
              }
            }
            cardImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            platformPageLink
          }
          filmFestivalSectionTitle
          filmFestivalSectionDescription {
            filmFestivalSectionDescription
          }
          filmFestivalSectionVideosThumbnail {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          filmFestivalVideos {
            file {
              url
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const {
    allContentfulLandingPage: {
      edges: [
        {
          node: {
            heroSliderCards,
            heroBgImage,
            featureSectionTitle,
            featureBoxes,
            festivalTimelineBoxes,
            testimonialsSectionTitle,
            testimonialsSectionDescription,
            testimonials,
            blogsSectionTitle,
            blogsSectionDescription,
            blogs,
            socialMediaSectionTitle,
            socialMediaCards,
            filmFestivalSectionTitle,
            filmFestivalSectionDescription,
            filmFestivalVideos,
            filmFestivalSectionVideosThumbnail,
          },
        },
      ],
    },
  } = data
  return (
    <Layout>
      <SEO title="Home" />
      <div className="top-section">
        <Header />
        <Hero bgImage={heroBgImage.fluid} sliderContent={heroSliderCards} />
      </div>
      <Features title={featureSectionTitle} contentBoxes={featureBoxes} />
      <Timeline festivalTimelineBoxes={festivalTimelineBoxes} />
      <LatestBlogs
        isBgGray
        title={blogsSectionTitle}
        description={blogsSectionDescription.blogsSectionDescription}
        linkText={latestBlogsData.linkText}
        blogs={blogs}
      />
      <FilmsSlider
        title={filmFestivalSectionTitle}
        description={
          filmFestivalSectionDescription?.filmFestivalSectionDescription
        }
        films={filmFestivalVideos}
        videosThumbnail={filmFestivalSectionVideosThumbnail}
      />
      <Testimonials
        title={testimonialsSectionTitle}
        description={
          testimonialsSectionDescription.testimonialsSectionDescription
        }
        testimonials={testimonials}
      />
      <SocialMedia
        title={socialMediaSectionTitle}
        mediaPlatforms={socialMediaCards}
      />
    </Layout>
  )
}

export default IndexPage
