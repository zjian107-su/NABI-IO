import React from "react"
import { ExampleButton } from "../components/button"
import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Emoji from "../components/emoji"
// import Navbar from "../components/Navbar"
// import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src={"/logo.png"} alt="Logo" />
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
      {/* 爱的定义：https://bit.ly/31p3zW2 */}
      <ExampleButton>
        哥林多前书1 13:4-5: “爱是恒久忍耐和恩慈；它不嫉妒，不自夸，不张狂。
        不做害羞的事情，不追求自己的利益，不轻易的发怒，不计较前恶。
        不喜欢不义，只喜欢真理。
        凡事包容，凡事相信，凡事盼望，凡事忍耐。爱是永不止息。”
        <Emoji symbol="❤️" label="heart" />
      </ExampleButton>

      {/* Definition of lov: https://bit.ly/2XMpqWP */}
      {/* <ExampleButton>
        1 Corinthians 13:4-5: “Love is patient and kind; love is not envious or
        boastful or arrogant or rude. It does not insist on its own way; it is
        not irritable or resentful; it does not rejoice in wrongdoing, but
        rejoices in the truth. It bears all things, believes all things, hopes
        all things, endures all things. Love never ends."
        <Emoji symbol="❤️" label="heart" />
      </ExampleButton> */}
    </div>
  </Layout>
)

export default IndexPage
