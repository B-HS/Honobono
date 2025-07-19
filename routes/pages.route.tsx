import { Hono } from 'hono'
import { Home } from 'pages/home'
import { Layout } from 'widgets/layout'

type Env = {
    Variables: {
        title: string
    }
}

export const PagesRoute = () => {
    const app = new Hono<Env>()
    app.get('/', (c) => {
        c.set('title', 'Home')
        return c.render(
            <Layout>
                <Home />
            </Layout>,
        )
    })

    return app
}
