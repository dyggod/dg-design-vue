import { defineConfig } from 'vitepress'
import { nav } from './layout/nav'
import { sidebar } from './layout/sidebar'

import { mdPlugin } from './config/plugin'

export default defineConfig({
  title: 'DG UI',
  base: process.env.NODE_ENV === 'production' ? '/' : './',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0,user-scalable=no'
      }
    ]
  ],

  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '最后更新时间',
    nav,
    sidebar,
    socialLinks: [
      {
        icon: 'github',
        link: ''
      }
    ],

  },
  markdown: {
    config: (md) => mdPlugin(md)
  }
})
