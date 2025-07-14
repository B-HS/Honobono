import { Header } from 'features/header'
import { html } from 'hono/html'
import { FC, PropsWithChildren } from 'hono/jsx'

export const Layout: FC<PropsWithChildren<{ pageId: string }>> = ({ pageId, children }) => {
    const pageScript = `/${pageId}.js`

    return (
        <>
            {html`<!DOCTYPE html>`}
            <html lang='ko'>
                <head>
                    <title>{Bun.env.SITE_NAME}</title>
                    <meta charset='UTF-8' />
                    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                    <meta name='theme-color' content='#FFFFFF' id='meta-theme-color' />
                    <meta name='description' content={Bun.env.SITE_NAME} />
                    <meta name='author' content='B-HS' />
                    <meta name='keywords' content='Template' />
                    <link rel='icon' href='https://blog.gumyo.net/favicon.ico' type='image/x-icon' sizes='64x64' />
                    <link rel='stylesheet' href='/styles.css' />
                    <script src='/theme.js' defer></script>
                </head>
                <body className='antialiased bg-background text-foreground'>
                    <Header />
                    {children}
                    {pageScript && <script src={pageScript}></script>}
                </body>
            </html>
        </>
    )
}
