/* tslint:disable:no-console */
import express, { Request, Response } from 'express';
import next from 'next';
import routes from '../src/routes';
import proxy from 'express-http-proxy';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const routesHandler = routes.getRequestHandler(app);
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.use(
      '/graphql',
      proxy(process.env.GRAPHQL_URI, {
        proxyReqPathResolver: () => '/graphql',
      }),
    );
    server.use(routesHandler);
    server.all('*', (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
