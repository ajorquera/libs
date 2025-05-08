import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url';

export const __dirname = dirname(fileURLToPath(import.meta.url)) + '/../';

export default ({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    emptyOutDir: false
  }
})