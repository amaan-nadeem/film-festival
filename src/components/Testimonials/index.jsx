import React from "react"
import "./index.scss"
import TestimonialsSlider from "./TestimonialsSlider"

const Testimonials = ({ title, testimonials, description }) => (
  <section className="bg-gray">
    <div className="app-testimonials-section section-container section-padding">
      <div className="testimonials-content text-center">
        <h1 className="title text-5xl font-bold section-heading">{title}</h1>
        <h1 className="description">{description}</h1>
      </div>
      <div className="testimonials-boxes justify-center ">
        <TestimonialsSlider testimonials={testimonials} />
      </div>
    </div>
  </section>
)

export default Testimonials
