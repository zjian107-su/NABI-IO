import React from "react"

import { ExampleButton } from "../components/button"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Emoji from "../components/emoji"
// import Navbar from "../components/Navbar"
// import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1
      style={{
        fontWeight: `bold`,
      }}
    >
      <Emoji symbol="🐶" label="dog" />
      欢迎来到狗狗的世界
    </h1>

    <h2>训练一条听话的对世界充满爱的狗狗</h2>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <ExampleButton>我滴大宝贝</ExampleButton>
    </div>
  </Layout>
)

export default IndexPage
