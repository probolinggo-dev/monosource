import route from 'next-routes';
import { isClient } from './lib/platform';

interface RouteType {
  name: string;
  page: string;
  pattern: string;
}

const routes: RouteType[] = [{ name: 'home', page: 'index', pattern: '/' }];

const nextRoutes = new route();
routes.forEach((item: RouteType) => {
  return nextRoutes.add(item);
});

export const Link = nextRoutes.Link;
export const Router = nextRoutes.Router;
export const getRouter = (): typeof Router => {
  if (isClient) {
    return Router;
  }
  return null;
};

export default nextRoutes;
