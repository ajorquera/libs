import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import baseConfig, {__dirname} from './common.config'

export default defineConfig({
  ...baseConfig,
  build: {
    ...baseConfig.build,
    lib: {
      entry: resolve(__dirname, 'src/utils/index.ts'),
      name: 'utils',

      fileName: 'utils',
    },
    rollupOptions: {
    },
  },
})