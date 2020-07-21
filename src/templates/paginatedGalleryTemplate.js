import React from "react"
import { Helmet } from "react-helmet"
import { GlobalStateContext } from "../components/gallery-page/globalState.js"
import View from "../components/gallery-page/view.js"
import "../components/gallery-page/layout.css"
import "typeface-open-sans/index.css"
import { exitFullScreen } from "../util/fullScreenHelpers.js"
import Footer from "../components/gallery-page/footer.js"
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
        <GlobalStateContext.Consumer>
          {globalState => (
            <>
              <View
                globalState={globalState}
                pageContext={this.props.pageContext}
                highlight={highlight}
              />

              <Footer />
            </>
          )}
        </GlobalStateContext.Consumer>
      </>
    )
  }
}

export default PaginatedGalleryTemplate
