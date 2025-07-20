import { existsSync, mkdirSync } from 'fs'
import * as islands from 'island'
import { join } from 'path'

const outDir = join(import.meta.dir, '..', 'assets', 'island')

const build = async () => {
    console.log(`Building client bundle with islands: ${Object.keys(islands).join(', ')}`)
    try {
        if (!existsSync(outDir)) {
            mkdirSync(outDir, { recursive: true })
        }

        const result = await Bun.build({
            entrypoints: [join(import.meta.dir, '..', 'island', 'client.ts')],
            outdir: outDir,
            target: 'browser',
            naming: '[name].js',
            sourcemap: 'inline',
        })

        if (!result.success) {
            console.error('Client build failed:')
            for (const log of result.logs) {
                console.error(log)
            }
        } else {
            console.log('Client bundle built successfully!')
        }
    } catch (e) {
        console.error('An error occurred during client build:', e)
    }
}

await build()
