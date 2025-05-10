import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import baseConfig, {__dirname} from './common.config'

export default defineConfig({
  ...baseConfig,
  build: {
    ...baseConfig.build,
    lib: {
      entry: resolve(__dirname, 'src/RestApi/index.ts'),
      name: 'RestApi',

      fileName: 'RestApi',
    },
    rollupOptions: {
    },
  },
})