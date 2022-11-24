import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';
import dts from 'vite-plugin-dts';

export default defineConfig(
  {
    build: {
      target: 'modules',
      // 打包文件目录
      outDir: 'es',
      // 压缩
      minify: false,
      // css分离
      // cssCodeSplit: true,
      rollupOptions: {
        // 忽略打包vue文件
        external: ['vue', '@dg-ui/utils'],
        input: ['index.ts'],
        output: [
          {
            format: 'umd',
            entryFileNames: '[name].js',
            dir: './dg-ui/dist',
          },
          {
            format: 'es',
            // 不用打包成.es.js,这里我们想把它打包成.js
            entryFileNames: '[name].mjs',
            // 让打包目录和我们目录对应
            preserveModules: true,
            exports: 'named',
            // 配置打包根目录
            dir: './dg-ui/es',
          },
          {
            format: 'cjs',
            entryFileNames: '[name].js',
            // 让打包目录和我们目录对应
            preserveModules: true,
            exports: 'named',
            // 配置打包根目录
            dir: './dg-ui/lib',
          },
        ],
      },
      lib: {
        entry: resolve(__dirname, './index.ts'),
        name: 'dg-ui',
      },
    },
    plugins: [
      vue(),
      DefineOptions(),
      dts({
        entryRoot: './src',
        outputDir: ['./dg-ui/es/src', './dg-ui/lib/src'],
        // 指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
        tsConfigFilePath: './tsconfig.json',
      }),
    ],
  },
);
