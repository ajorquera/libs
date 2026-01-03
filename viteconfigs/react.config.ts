import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import baseConfig, {__dirname} from './common.config'

export default defineConfig({
  ...baseConfig,
  build: {
    ...baseConfig.build,
    lib: {
      entry: resolve(__dirname, 'src/react/index.ts'),
      name: 'react',

      fileName: 'react',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime','firebase/firestore'],
      output: {
        globals: {
          react: 'React',
          'firebase/firestore': 'firebase/firestore',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
})