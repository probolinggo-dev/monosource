import React from 'react';
import App from 'next/app';

import '../styles/tailwind.css';
import '../styles/main.css';
import '../lib/i18n';
import '../lib/moment';
import { withApollo } from '../lib/apollo';

class Root extends App {
  render(): React.ReactElement {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default withApollo({ ssr: true })(Root);
