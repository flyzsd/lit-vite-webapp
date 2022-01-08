import {resolve} from 'path';
import {defineConfig} from 'vite';
import eslint from '@rollup/plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        {
            ...eslint({include: 'src/**/*.+(js|jsx|ts|tsx)'}),
            enforce: 'pre',
            apply: 'build',
        },
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                nested: resolve(__dirname, 'nested/index.html')
            }
        },
        target: 'esnext',
        sourcemap: true
    }
})
