import React from "react"

const CategoriesListing = ({ title, categories }) => (
  <div className="categories-listing">
    <h2>{title}</h2>
    <div className="categories">
      {categories.map((bullet, index) => (
        <div className="category" key={bullet}>
          <span className="number">{index + 1}.</span>
          <span className="bullet">{bullet}</span>
        </div>
      ))}
    </div>
  </div>
)

export default CategoriesListing
