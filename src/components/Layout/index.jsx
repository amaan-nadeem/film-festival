/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import PropTypes from "prop-types"
import * as React from "react"
import "swiper/css/swiper.css"
import "swiper/swiper.scss"
import "../../styles/global.scss"
import Footer from "../common/Footer"

const Layout = ({ children }) => (
  <>
    <div className="container">
      <main>{children}</main>
      <Footer />
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
