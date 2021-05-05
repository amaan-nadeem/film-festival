import { Link } from "gatsby"
import React from "react"
import footerData from "../../../site-data/footer"
import "./index.scss"

const Footer = () => {
  return (
    <footer className="footer bg-dullishBlack ">
      <div className="footer-container container-padding">
        <div className="footer-links-main lg:flex justify-between">
          <div className="left-links grid grid-cols-2">
            {footerData.leftLinks.map(({ title, links }) => {
              return (
                <div className="ml-4 links-list" key={title}>
                  <h2 className="font-semibold list-title">{title}</h2>
                  <ul className="links-list-ul">
                    {links.map(({ href, isSocialLinks, link, socialLinks }) => (
                      <li className="link-main" key={link}>
                        {isSocialLinks ? (
                          <div className="grid grid-cols-3 gap-5">
                            {socialLinks.map(({ icon }) => (
                              <div>{icon}</div>
                            ))}
                          </div>
                        ) : (
                          <Link to={href}>{link}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
          <div className="newsletter-section pt-10 ml-4 lg:pt-0 lg:mr-0">
            <h2 className="title font-bold">
              {footerData.rightNewsletterSection.title}
            </h2>
            <p className="description">
              {footerData.rightNewsletterSection.description}
            </p>
            <form className="form flex justify-between items-center">
              <div className="form-input">
                <input
                  name="email"
                  id="email"
                  placeholder={footerData.rightNewsletterSection.textBox.label}
                />
              </div>
              <div>
                <p className="cursor-pointer">{footerData.rightNewsletterSection.textBox.btnText}</p>
                {footerData.rightNewsletterSection.textBox.arrow}
              </div>
            </form>
          </div>
        </div>
        <hr />
        <div className="footer-bottom-content md:grid grid-cols-3 items-center justify-between">
          <p>{footerData.footerBottomContent.reservedText}</p>
          <ul className="mt-4 md:mt-0 flex md:justify-between items-center">
            {footerData.footerBottomContent.links.map(({ href, link }) => (
              <li className="mr-5 md:mr-0">
                <Link to={href}>{link}</Link>
              </li>
            ))}
          </ul>
          <div></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
