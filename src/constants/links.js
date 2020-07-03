import React from "react"
import { Link } from "gatsby"
import "../css/layout.css"

const data = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "Articles",
    url: "/articles",
  },
  {
    id: 3,
    text: "Gallery",
    url: "/images",
  },
]

const activeStyles = {
  background: "white",
  color: "rebeccapurple",
}

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url} activeStyle={activeStyles}>
        {link.text}
      </Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
