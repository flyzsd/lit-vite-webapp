import {resolve} from 'path'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
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
