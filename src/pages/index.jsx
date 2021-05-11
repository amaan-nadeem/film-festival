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
              fluid {
                ...GatsbyContentfulFluid
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
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
          socialMediaSectionTitle
          socialMediaCards {
            mediaPlatformIcon{
              file{
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
          },
        },
      ],
    },
  } = data
  console.log("heroImage", heroBgImage.fluid.src)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="top-section">
        <Header />
        <Hero bgImage={heroBgImage.fluid.src} sliderContent={heroSliderCards} />
      </div>
      <Features
        title={featureSectionTitle}
        description={featuresData.description}
        contentBoxes={featureBoxes}
      />
      <Timeline festivalTimelineBoxes={festivalTimelineBoxes} />
      <LatestBlogs
        isBgGray
        title={blogsSectionTitle}
        description={blogsSectionDescription.blogsSectionDescription}
        linkText={latestBlogsData.linkText}
        blogs={blogs}
      />
      <FilmsSlider films={[{}, {}, {}, {}]} />
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
