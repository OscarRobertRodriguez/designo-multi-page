import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import stylisRTLPlugin from 'stylis-plugin-rtl'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()

    const page = renderPage(
      (App) => (props) =>
        sheet.collectStyles(
          <StyleSheetManager stylisPlugins={[stylisRTLPlugin]}>
            <App {...props} />
          </StyleSheetManager>
        )
    )

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap" rel="stylesheet"></link>
          {this.props.styleTags}
          </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}