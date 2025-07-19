import { readdir } from 'node:fs/promises';
import { existsSync, mkdirSync } from 'node:fs';

const islandDir = './island';
const outDir = './assets/island';

console.log('Bun island builder starting...');

const build = async () => {
    console.log('Building islands...');
    try {
        if (!existsSync(outDir)) {
            mkdirSync(outDir, { recursive: true });
        }

        const files = await readdir(islandDir);
        const entrypoints = files
            .filter(file => file.endsWith('.tsx') || file.endsWith('.ts'))
            .map(file => `${islandDir}/${file}`);

        if (entrypoints.length === 0) {
            console.log('No islands or client script found to build.');
            return;
        }

        const result = await Bun.build({
            entrypoints,
            outdir: outDir,
            target: 'browser',
            naming: '[name].js',
            sourcemap: 'inline',
        });

        if (!result.success) {
            console.error('Island build failed:');
            console.error(result.logs.join('\n'));
        } else {
            console.log('Islands built successfully!');
        }
    } catch (e) {
        console.error('An error occurred during island build:', e);
    }
};

await build();
