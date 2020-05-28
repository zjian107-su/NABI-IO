import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Emoji from "../components/emoji"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1
      style={{
        fontWeight: `bold`,
      }}
    >
      🐶欢迎来到狗狗的世界
    </h1>
    <h2>训练一条听话的对世界充满爱的狗狗</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/intro">1. Intro</Link>
    <div> </div>
    <Link to="/home_page">2. Home Page</Link>
  </Layout>
)

export default IndexPage
