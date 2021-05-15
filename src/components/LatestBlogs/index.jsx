import classnames from "classnames"
import { Link } from "gatsby"
import React from "react"
import "./index.scss"
import useWindowSize from "../../utils/useWindowWidth"
import Slider from "../common/Slider"
import Img from "gatsby-image"

const BlogCard = ({ title, description, image, readMoreText }) => (
  <div className={"latest-blogs-box flex flex-col justify-center"} key={title}>
    <img className="image" src={image.src} alt="" />
    <div className="latest-blogs-box-content mt-5">
      <h2 className="title font-semibold">{title}</h2>
      <p className="description mt-2">{description}</p>
      <p className="read-more font-semibold mt-5 border-b-2 border-black">
        {readMoreText}
      </p>
    </div>
  </div>
)

const LatestBlogs = ({ title, description, linkText, blogs, isBgGray }) => {
  const windowWidth = useWindowSize()
  return (
    <section className={classnames("section-padding", isBgGray && "bg-gray")}>
      <div className="app-latest-blogs-section ">
        <div className="latest-blogs-content text-center container-padding">
          <h1 className="title text-5xl font-bold section-heading">{title}</h1>
          <p className="description text-2xl ">{description}</p>
          {linkText && (
            <Link to="/blogs" className="link text-2xl ">
              {linkText}
            </Link>
          )}
        </div>
        {windowWidth[0] >= 1080 && (
          <div className="latest-blogs-boxes justify-center grid sm:grid-cols-2 gap-5 lg:flex">
            {blogs.map(({ title, description: { description }, image }) => (
              <BlogCard
                title={title}
                description={description}
                image={image?.fixed}
                readMoreText="READ MORE"
              />
            ))}
          </div>
        )}
        {windowWidth[0] < 1080 && (
          <div className="latest-blogs-slider-container latest-blogs-boxes">
            <Slider>
              {blogs.map(({ title, description: { description }, image }) => (
                <div>
                  <BlogCard
                    title={title}
                    description={description}
                    image={image?.fixed}
                    readMoreText="READ MORE"
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  )
}

export default LatestBlogs
