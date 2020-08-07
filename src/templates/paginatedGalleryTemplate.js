import React from "react"
import { Helmet } from "react-helmet"
import { GlobalStateContext } from "../components/gallery-page/globalState.js"
import View from "../components/gallery-page/view.js"
// import "../components/gallery-page/layout.css"
import "typeface-open-sans/index.css"
import { exitFullScreen } from "../util/fullScreenHelpers.js"
// Don't need his footer
// import Footer from "../components/gallery-page/footer.js"

import Layout from "../components/layout/layout"
// import Header from "../components/layout/header"
// import Footer from "../components/layout/footer"
// import Navbar from "../components/layout/navbar"
// import Sidebar from "../components/sidebar"

//import theme from "../theme.yaml"

class PaginatedGalleryTemplate extends React.Component {
  componentDidMount() {
    exitFullScreen()
  }

  render() {
    const highlight =
      this.props.location && this.props.location.state
        ? this.props.location.state.highlight
        : -1
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Gatsby Starter Photo Book</title>
        </Helmet>
        <Layout>
          {/* <Header siteTitle={data.site.siteMetadata.title} />
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} /> */}
          <GlobalStateContext.Consumer>
            {globalState => (
              <>
                <View
                  globalState={globalState}
                  pageContext={this.props.pageContext}
                  highlight={highlight}
                />
                {/* <Footer /> */}
              </>
            )}
          </GlobalStateContext.Consumer>
        </Layout>
        {/* <footer>
          <Footer />
        </footer> */}
      </>
    )
  }
}

export default PaginatedGalleryTemplate
