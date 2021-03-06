import * as React from 'react';
import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext,
  NextScriptProps
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document<NextScriptProps> {
  static getInitialProps({ renderPage }: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
