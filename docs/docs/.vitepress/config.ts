import { defineConfig } from 'vitepress'
import { nav } from './layout/nav'
import { sidebar } from './layout/sidebar'

import { mdPlugin } from './config/plugin'

export default defineConfig({
  title: 'DG UI',
  base: process.env.NODE_ENV === 'production' ? '/dg-ui/' : '/',
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
    logo: '/logo@4x.png',
    lastUpdatedText: '最后更新时间',
    nav,
    sidebar,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/dyggod/dg-design-vue.git'
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022 dyggod'
    }

  },
  markdown: {
    config: (md) => mdPlugin(md)
  }
})
