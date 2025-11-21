import { defineConfig } from 'vite';

import baseConfig, {__dirname} from './common.config'

export default defineConfig({
  ...baseConfig,
    build: {
    ...baseConfig.build,
    lib: {
      entry: 'src/styles/index.scss',
      name: 'styles',
      fileName: 'styles',
    },
  },
});
