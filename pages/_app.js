import React, { useEffect } from 'react';
import Head from 'next/head';
import { Auth0Provider } from '@auth0/auth0-react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../utils/theme';
import '../styles/globals.css';

const client = new ApolloClient({
  uri   : '',
  cache : new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My App</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      <Auth0Provider domain='dev-5mlnyws7.au.auth0.com' clientId='r2xsCtluqvdgfuFoowBRRYzFNmI1ArDe'>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </Auth0Provider>
    </React.Fragment>
  );
}

export default MyApp;
