/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// You can delete this file if you're not using it

// import "./src/css/main.css"

import React from "react"

import { GlobalState } from "./src/components/gallery-page/globalState.js"

export const wrapRootElement = ({ element }) => {
  return <GlobalState>{element}</GlobalState>
}
