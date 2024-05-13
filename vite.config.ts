import {defineConfig} from 'vite'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: '@yongholeeme/secureRandom',
            fileName: (format) => `index.${format}.js`,
            formats: ['es', 'cjs'],
        },
    },
})
