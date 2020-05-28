import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/home_page">Socialization</Link>
        </li>
        <li>
          <Link to="/intro">Intro</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
