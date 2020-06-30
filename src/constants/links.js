import React from "react"
import { Link } from "gatsby"
import "../css/layout.css"
import styled from "styled-components"

const NoDotUnorderedList = styled.ul`
  list-style-type: none;
`
const NoDotorderedList = styled.ol`
  list-style-type: none;
`

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

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
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
