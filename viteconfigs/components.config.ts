import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import baseConfig, {__dirname} from './common.config'

export default defineConfig({
  ...baseConfig,
  build: {
    ...baseConfig.build,
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'components',

      fileName: 'components',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime','firebase/firestore'],
      output: {
        globals: {
          react: 'react',
          'firebase/firestore': 'firebase/firestore',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
})