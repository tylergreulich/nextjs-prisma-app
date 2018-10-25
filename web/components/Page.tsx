import * as React from 'react';

import { Header } from './Header';
import { Meta } from './Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const styledTheme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  boxShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  bpMed: '1300px'
};

const StyledPage = styled.div`
  background: white;
  color: ${({ theme }) => theme.black};
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('../static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next'
  }

  a {
    text-decoration: none;
    color: ${styledTheme.black}
  }
`;

export class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={styledTheme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}
