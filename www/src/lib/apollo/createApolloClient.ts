import { IncomingMessage } from 'http';
import { NextPageContext } from 'next';
import url from 'url';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';
import cookie from 'cookie';
import axios from 'axios';

import { isClient } from '../platform';

if (!isClient) {
  const parsedUrl = url.parse(
    process.env.GRAPHQL_URI || 'cussapi_cussapi:9052/graphql',
  );
  axios.defaults.baseURL =
    (parsedUrl.protocol ? 'http://' : '') + parsedUrl.host;
}

/**
 * Get the user token from cookie
 */
export const getToken = (req?: IncomingMessage) => {
  const parsedCookie = cookie.parse(
    req ? req.headers.cookie ?? '' : document.cookie,
  );

  return parsedCookie.accessToken;
};

export const createApolloClient = (
  initialState: NormalizedCacheObject = {},
  ctx: NextPageContext,
) => {
  const fetchOptions = {
    agent: null,
  };

  // If you are using a https_proxy, add fetchOptions with 'https-proxy-agent' agent instance
  // 'https-proxy-agent' is required here because it's a sever-side only module
  if (typeof window === 'undefined') {
    if (process.env.https_proxy) {
      fetchOptions.agent = new (require('https-proxy-agent'))(
        process.env.https_proxy,
      );
    }
  }

  const httpLink = new HttpLink({
    uri: process.env.GRAPHQL_URI, // Server URL (must be absolute)
    credentials: 'same-origin',
    fetch,
    fetchOptions,
  });

  const authLink = setContext((_request, { headers }) => {
    const token = getToken(ctx?.req);

    return {
      headers: {
        ...headers,
        authorization: token,
      },
    };
  });

  return new ApolloClient({
    connectToDevTools: Boolean(ctx),
    ssrMode: Boolean(ctx),
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState),
  });
};
