import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite';
export default defineConfig({
    plugins: [vue(), DefineOptions()],
    server: {
      host: '0.0.0.0',
      port: 3001,
    },
})
