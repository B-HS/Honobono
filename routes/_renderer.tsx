import { reactRenderer } from '@hono/react-renderer'

export default reactRenderer(({ children, c }) => {
    return (
        <html lang='ko'>
            <head>
                <meta charSet='UTF-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <title>{c.var.title || 'Honobono'}</title>
                <link rel='stylesheet' href='/styles.css' />
                <script src='/theme.js' defer></script>
                <script src='/island/client.js' type='module' defer></script>
            </head>
            <body className='antialiased bg-background text-foreground'>{children}</body>
        </html>
    )
})
