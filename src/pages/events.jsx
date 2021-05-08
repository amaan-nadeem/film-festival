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

const Events = () => {
  return (
    <Layout>
      <SEO title="Events" />
      <div className="top-section">
        <Header />
        <Hero
          isEvent
          bgImage={heroSectionData.heroBgImage}
          sliderContent={heroSectionData.heroSliderContent}
        />
      </div>
      <Features
        title={featuresData.title}
        description={featuresData.description}
        contentBoxes={featuresData.featureBoxes}
      />
      <ScheduledFestivals
        isBgGray
        title={scheduledFestivalsData.title}
        festivals={scheduledFestivalsData.festivals}
      />
      <Submissions
        title={submissionsData.title}
        contentBoxes={submissionsData.featureBoxes}
      />
      <AwardCategories
        isBgGray
        title={awardCategoriesData.title}
        percentageBoxes={awardCategoriesData.percentageBoxes}
      />
      <FilmsSlider films={[{}, {}, {}, {}]} />
      <LatestBlogs
        isBgGray
        title={latestBlogsData.title}
        description={latestBlogsData.description}
        linkText={latestBlogsData.linkText}
        blogs={latestBlogsData.blogs}
      />
      <SocialMedia
        title={socialMediaData.title}
        mediaPlatforms={socialMediaData.mediaPlatforms}
      />
    </Layout>
  )
}

export default Events
