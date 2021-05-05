import * as React from "react"
import Header from "../components/common/Header"
import Features from "../components/Features"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import heroSectionData from "../site-data/Hero"
import featuresData from "../site-data/features"
import LatestBlogs from "../components/LatestBlogs"
import latestBlogsData from "../site-data/latest-blogs"
import Testimonials from "../components/Testimonials"
import testimonialsData from "../site-data/testimonials"

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
      <LatestBlogs
        title={latestBlogsData.title}
        description={latestBlogsData.description}
        linkText={latestBlogsData.linkText}
        blogs={latestBlogsData.blogs}
      />
      <Testimonials
        title={testimonialsData.title}
        description={testimonialsData.description}
        testimonials={testimonialsData.testimonials}
      />
    </Layout>
  )
}

export default IndexPage
