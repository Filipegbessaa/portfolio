import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyle';




// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
