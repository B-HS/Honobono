import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { compress } from './compress'

export const InitializeMiddlewares = (app: Hono) => {
    app.use('*', compress())
    app.use('/*', serveStatic({ root: './assets' }))
    return app
}
