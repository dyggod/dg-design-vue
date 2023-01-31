import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    nav: [
      {
        text: '指南',
        activeMatch: '^/instructions/',
        link: '/zh/instructions/install'
      },
      {
        text: '基础组件',
        activeMatch: '^/components/',
        link: '/zh/components/button'
      }
    ],
    sidebar: {
      "/zh/instructions/": [
        {
          text: "使用指南",
          link: "/zh/instructions/",
          items: [
            { text: "指南", link: "/zh/instructions/install" },
            { text: "快速上手", link: "/zh/instructions/quickstart" },
          ],
        },
        {
          text: "组件列表",
          link: "/zh/components/",
          items: [
            { text: "组件列表", link: "/zh/components/button" },
          ],
        },
      ],
      "/zh/components/": [
        {
          text: "基础组件",
          link: "/zh/components/button",
          items: [
            { text: "Button 按钮", link: "/zh/components/button" },
            { text: "Icon 图标", link: "/zh/components/icon" },
            { text: "Magic Card 卡片", link: "/zh/components/mgcard" },
          ],
        },
        {
          text: "表单组件",
          link: "/zh/components/switch",
          items: [
            { text: "Switch 开关", link: "/zh/components/switch" },
            { text: "Rate 评分", link: "/zh/components/rate" },
          ]
        },
        {
          text: "数据展示",
          link: "/zh/components/badge",
          items: [
            { text: "Badge 徽标", link: "/zh/components/badge" },
          ]
        },
        {
          text: "反馈组件",
          link: "/zh/components/tooltip",
          items: [
            { text: "Tooltip 文字提示", link: "/zh/components/tooltip" },
          ]
        }
      ],
    }
  }
}
