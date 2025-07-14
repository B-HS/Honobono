import { Hono } from 'hono'
import { InitializeMiddlewares } from './middlewares'
import { InitializeRoutes } from './routes'

const app = new Hono()

InitializeMiddlewares(app)
InitializeRoutes(app)

export default {
    port: 3000,
    fetch: app.fetch,
}
