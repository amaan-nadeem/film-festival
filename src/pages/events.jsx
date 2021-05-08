import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import heroSectionData from "../site-data/Hero"
import SEO from "../components/seo"
import Header from "../components/common/Header"
import Features from "../components/Features"
import featuresData from "../site-data/features"

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
    </Layout>
  )
}

export default Events
