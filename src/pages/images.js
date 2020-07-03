import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

export class Images extends Component {
  render() {
    const data = this.props.data
    const images = data.fillteredImages.edges

    return (
      <Layout
        css={css`
          background-color: pink;
          display: inline-block;
          border-bottom: 1px solid;
        `}
      >
        <ul style={{ ...styles.ul, ...styles.row }}>
          {images.map(image => (
            <li
              style={styles.column20}
              key={image.node.childImageSharp.resize.src}
            >
              <img
                src={image.node.childImageSharp.resize.src}
                alt={image.node.childImageSharp.resize.originalName}
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
  width: `33.3%`,
  padding: `0 4px`,
  margin: 0,
}

export default Images

export const pageQuery = graphql`
  query MyQuery {
    fillteredImages: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
      edges {
        node {
          childImageSharp {
            resize(width: 300, height: 300) {
              originalName
              src
            }
          }
        }
      }
    }
  }
`
