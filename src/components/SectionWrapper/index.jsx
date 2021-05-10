import classnames from "classnames"
import React from "react"

const SectionWrapper = ({
  title,
  isBgGray,
  children,
  className,
  isNoPadding,
}) => (
  <section
    className={classnames(
      "section-padding",
      isBgGray && "bg-gray",
      className,
      !isNoPadding && "container-padding"
    )}
  >
    <h2 className="section-heading">{title}</h2>
    {children}
  </section>
)

export default SectionWrapper
