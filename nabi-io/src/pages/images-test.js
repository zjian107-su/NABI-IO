import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export class Images extends Component {
  render() {
    const data = this.props.data
    const images = data.galleryImages.edges

    return (
      <Layout>
        <ul style={{ ...styles.ul, ...styles.row }}>
          {images.map(image => (
            <li
              style={styles.column20}
              key={image.node.childImageSharp.fixed.src}
            >
              <img
                src={image.node.childImageSharp.fixed.src}
                alt={image.node.childImageSharp.fixed.originalName}
              />
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

const styles = {}

styles.row = {
  display: `flex`,
  flexWrap: `wrap`,
  margin: `8px -4px 1rem`,
}

styles.ul = {
  padding: `0`,
  listStyle: `none`,
}

styles.column20 = {
  flexShrink: 0,
  flexGrow: 0,
  color: `#999`,
  width: `20%`,
  padding: `0 4px`,
  margin: 0,
}

export default Images

export const pageQuery = graphql`
  query ImageQueryTest {
    galleryImages: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
      edges {
        node {
          childImageSharp {
            fixed(height: 150, width: 150) {
              src
              originalName
            }
          }
        }
      }
    }
  }
`
