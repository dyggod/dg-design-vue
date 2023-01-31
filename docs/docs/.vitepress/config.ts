import { defineConfig, } from 'vitepress'
import { commonConfig } from './layout/common'
import { enConfig } from './layout/en'
import { zhConfig } from './layout/zh'
import { nav, enNav } from './layout/nav'
import { sidebar, enSidebar } from './layout/sidebar'

import { mdPlugin } from './config/plugin'

export default defineConfig({
  ...commonConfig,
  locales: {
    zh: {
      label: '简体中文',
      lang: 'zh',
      ...zhConfig,
    },
    en: {
      label: 'English', lang: 'en',
      ...enConfig,
    },
  },
  markdown: {
    config: (md) => mdPlugin(md)
  }
})
