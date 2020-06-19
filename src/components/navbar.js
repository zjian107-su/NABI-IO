import React from "react"
// import { Link } from "gatsby"
import PageLinks from "../constants/links"
import "../css/layout.css"

import { FaAlignRight } from "react-icons/fa"
import logo from "../images/logo.png"

const Navbar = ({ toggleSidebar }) => {
  return (
    // <div>
    //   <ul>
    //     {/* <li> test 1 </li>
    //     <li> test 2 </li> */}
    //     <PageLinks styleClass="nav-links"></PageLinks>

    //   </ul>
    // </div>
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          {/* <img src={logo} alt="logo" /> */}
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
