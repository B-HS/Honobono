import { Hono } from 'hono'
import { Home } from 'pages'
import { Layout } from '../widgets/layout'

export const PagesRoute = () => {
    const app = new Hono()

    app.get('/', (c) => {
        return c.html(
            <Layout pageId='home'>
                <Home />
            </Layout>,
        )
    })

    return app
}
