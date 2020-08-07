import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../../css/layout.css"
import Navbar from "./navbar"
import Sidebar from "./sidebar"

const Layout = ({ children }) => {
  // -----------  0616
  const [isOpen, setIsOpen] = React.useState(false)
  // test 1
  // console.log("isOpen is " + isOpen)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
    // test 2
    // console.log("isOpen is" + isOpen)
  }
  // ------------ END 0616

  const data = useStaticQuery(graphql`
    query SiteTitleQuery1 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div
        style={{
          margin: `0 0`,
          maxWidth: 2048,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
