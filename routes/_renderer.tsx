import { reactRenderer } from '@hono/react-renderer'

const importMap = {
    imports: {
        'react': '/node_modules/react/index.js',
        'react/jsx-runtime': '/node_modules/react/jsx-runtime.js',
        'react/jsx-dev-runtime': '/node_modules/react/jsx-dev-runtime.js',
        'react-dom': '/node_modules/react-dom/index.js',
        'react-dom/client': '/node_modules/react-dom/client.js',
    },
}

export default reactRenderer(({ children, c }) => {
    return (
        <html lang='ko'>
            <head>
                <meta charSet='UTF-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <title>{c.var.title || 'Honobono'}</title>
                <script type='importmap' dangerouslySetInnerHTML={{ __html: JSON.stringify(importMap) }} />
                <link rel='stylesheet' href='/styles.css' />
                <script src='/theme.js' defer></script>
                <script src='/island/client.js' type='module' defer></script>
            </head>
            <body className='antialiased bg-background text-foreground'>{children}</body>
        </html>
    )
})
