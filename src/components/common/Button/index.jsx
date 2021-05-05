import classnames from "classnames"
import React from "react"
import "./index.scss"

const Button = ({ children, className, isBlack }) => (
  <button className={classnames("button", className, isBlack && "background-black")}>{children}</button>
)

export default Button
