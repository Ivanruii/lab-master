import { resolve } from 'path';
import { defineConfig } from 'vite';

import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                nested: resolve(__dirname, './src/index.html'),
            },
        },
    },
    server: {
        open: '/src/index.html',
    },
})