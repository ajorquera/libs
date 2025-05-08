import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url';
import dts from 'vite-plugin-dts'

export const __dirname = dirname(fileURLToPath(import.meta.url)) + '/../';

export default ({
  plugins: [dts({ tsconfigPath: './tsconfig.app.json' })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    emptyOutDir: false
  }
})