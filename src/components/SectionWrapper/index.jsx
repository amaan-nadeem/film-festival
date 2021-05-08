import React from "react"
import classnames from "classnames"

const SectionWrapper = ({ title, isBgGray, children, className }) => (
  <section
    className={classnames(
      "section-padding container-padding",
      isBgGray && "bg-gray",
      className
    )}
  >
    <h2 className="section-heading">{title}</h2>
    {children}
  </section>
)

export default SectionWrapper
