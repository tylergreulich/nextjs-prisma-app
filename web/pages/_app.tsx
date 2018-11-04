import * as React from 'react';
import App, { Container, NextAppContext } from 'next/app';
import { WithApolloProps } from 'next-with-apollo';
import { ApolloProvider } from 'react-apollo';

import { Page } from '../components/Page';
import withData from '../lib/withData';

class MyApp extends App<WithApolloProps<any>> {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps: any = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // exposes query to user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
