import React from "react"
import "./index.scss"
import { Link } from "gatsby"

const LatestBlogs = ({ title, description, linkText, blogs }) => {
  return (
    <section className="bg-gray section-padding">
      <div className="app-latest-blogs-section container-padding">
        <div className="latest-blogs-content text-center">
          <h1 className="title text-5xl font-bold section-heading">{title}</h1>
          <p className="description text-2xl ">{description}</p>
          <Link to="/blogs" className="link text-2xl ">
            {linkText}
          </Link>
        </div>
        <div className="latest-blogs-boxes justify-center grid sm:grid-cols-2 gap-5 md:flex">
          {blogs.map(({ title, description, image, readMoreText }) => (
            <div
              className={"latest-blogs-box flex flex-col justify-center"}
              key={title}
            >
              <img className="image" src={image} alt="" />
              <div className="latest-blogs-box-content mt-5">
                <h2 className="title font-semibold">{title}</h2>
                <p className="description mt-2">{description}</p>
                <p className="read-more font-semibold mt-5 border-b-2 border-black">
                  {readMoreText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestBlogs
