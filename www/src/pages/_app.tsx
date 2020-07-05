import React from 'react';
import App from 'next/app';

import '../style/main.less';
import '../lib/i18n';
import '../lib/moment';
import { withApollo } from '../lib/apollo';
import Fonts from '../lib/assets/Fonts';

class Root extends App {
  componentDidMount(): void {
    Fonts();
  }

  render(): React.ReactElement {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default withApollo({ ssr: true })(Root);
