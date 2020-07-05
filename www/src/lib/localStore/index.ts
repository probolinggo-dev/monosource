import Cookie from 'js-cookie';
import cookieLib from 'cookie';
import { IncomingMessage } from 'http';

const parseCookie = (req?: IncomingMessage): Record<string, string> => {
  if (!req) {
    return Cookie.getJSON();
  }
  return cookieLib.parse(req ? req.headers.cookie || '' : document.cookie);
};

const getCookie = (key: string) => {
  return Cookie.get(key);
};

const setCookie = (
  key: string,
  value: string,
  options?: Cookie.CookieAttributes,
) => {
  // if not specified, it will be expired in one year
  const defaultOptions = {
    expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
  };
  Cookie.set(key, value, options || defaultOptions);
};

export { parseCookie, getCookie, setCookie };
