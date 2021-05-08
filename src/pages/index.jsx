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

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="top-section">
        <Header />
        <Hero
          bgImage={heroSectionData.heroBgImage}
          sliderContent={heroSectionData.heroSliderContent}
        />
      </div>
      <Features
        title={featuresData.title}
        description={featuresData.description}
        contentBoxes={featuresData.featureBoxes}
      />
      <Timeline data={{ TimelineData }} />
      <LatestBlogs
        isBgGray
        title={latestBlogsData.title}
        description={latestBlogsData.description}
        linkText={latestBlogsData.linkText}
        blogs={latestBlogsData.blogs}
      />
      <FilmsSlider films={[{}, {}, {}, {}]} />
      <Testimonials
        title={testimonialsData.title}
        description={testimonialsData.description}
        testimonials={testimonialsData.testimonials}
      />
      <SocialMedia
        title={socialMediaData.title}
        mediaPlatforms={socialMediaData.mediaPlatforms}
      />
    </Layout>
  )
}

export default IndexPage
