import { defineConfig, type DefaultTheme } from 'vitepress'

export const commonConfig =defineConfig({
  title: 'DG UI',
  base: process.env.NODE_ENV === 'production' ? '/dg-design-vue/' : '/',
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
})
