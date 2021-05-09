import React from "react"

const CategoriesListing = ({ title, categories }) => (
  <div className="categories-listing">
    <h2>{title}</h2>
    <div className="categories">
      {categories.map((bullet, index) => (
        <div className="category" key={bullet}>
          <p className="number">{index + 1}.</p>
          <p className="bullet">{bullet}</p>
        </div>
      ))}
    </div>
  </div>
)

export default CategoriesListing
