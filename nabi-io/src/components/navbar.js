import React from "react"
// import { Link } from "gatsby"
import PageLinks from "../constants/links"
import "./layout.css"

const Navbar = () => {
  return (
    <div>
      <ul>
        {/* <li> test 1 </li>
        <li> test 2 </li> */}
        <PageLinks styleClass="nav-links"></PageLinks>
      </ul>
    </div>
  )
}

export default Navbar
