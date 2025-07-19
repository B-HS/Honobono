import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { compress } from './compress'
import renderer from 'routes/_renderer';

export const InitializeMiddlewares = (app: Hono) => {
    app.use('*', compress())
    app.use('/*', serveStatic({ root: './assets' }))
    app.use(renderer);
    return app
}
