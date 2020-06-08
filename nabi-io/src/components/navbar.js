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
          <Link to="/intro">Intro</Link>
        </li>
        <li>
          <Link to="/socialization">Socialization</Link>
        </li>
        <li>
          <Link to="/sleep_or_nap">Nap</Link>
        </li>
        <li>
          <Link to="/images">Images Test</Link>
        </li>
        {/* <li>
          <Link to="/blog/my-first-post">Markdown Test</Link>
        </li> */}
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
