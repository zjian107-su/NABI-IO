import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// use graphql to search for data
const getData = graphql`
  {
    site {
      siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`

const Header = () => {
  // the line below used useStaticQuery[key:object_of_graphql_search_result]
  // explained in 30
  const {
    site: {
      siteMetadata: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h1>this is our heading: fetched data is showing below</h1> */}
      {/* <h1>title: {data.site.siteMetadata.title}</h1> */}
      <h1>title: {title}</h1>
      <h1>name: {name}</h1>
    </div>
  )
}

export default Header
