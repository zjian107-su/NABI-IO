import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <div>
      <h4 style={{ color: `#858585` }}>
        Copyright © {new Date().getFullYear()} Nabi.io | All rights reserved. |
        Developed by{" "}
        <Link
          to="https://www.linkedin.com/in/zezhengjiang/"
          style={{ textDecoration: "none", color: "#3c3c3c" }}
        >
          Daniel Jiang
        </Link>
      </h4>
    </div>
  )
}

export default Footer
