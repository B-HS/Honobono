import { Hono } from 'hono'
import { PagesRoute } from './pages.route'

export const InitializeRoutes = async (app: Hono) => {
    app.route('/', PagesRoute())

    return app
}
