import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>This page doesn't exist - but really?</h1>
    <p>If you wait for a waiter in a restaurant, who is the waiter?</p>
  </Layout>
)

export default NotFoundPage
