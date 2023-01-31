import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    nav: [
      {
        text: 'Guide',
        activeMatch: '^/en/instructions/',
        link: '/en/instructions/install'
      },
      {
        text: 'Components',
        activeMatch: '^/components/',
        link: '/components/button'
      }
    ],
    sidebar: {
      "/en/instructions/": [
        {
          text: "Guide",
          link: "/en/instructions/",
          items: [
            { text: "guide", link: "/en/instructions/install" },
            { text: "quick start", link: "/en/instructions/quickstart" },
          ],
        },
        {
          text: "Components List",
          link: "/components/",
          items: [
            { text: "components list", link: "/en/components/button" },
          ],
        },
      ],
      "/en/components/": [
        {
          text: "基础组件",
          link: "/en/components/button",
          items: [
            { text: "Button 按钮", link: "/en/components/button" },
            { text: "Icon 图标", link: "/en/components/icon" },
            { text: "Magic Card 卡片", link: "/en/components/mgcard" },
          ],
        },
        {
          text: "表单组件",
          link: "/en/components/switch",
          items: [
            { text: "Switch 开关", link: "/en/components/switch" },
            { text: "Rate 评分", link: "/en/components/rate" },
          ]
        },
        {
          text: "数据展示",
          link: "/en/components/badge",
          items: [
            { text: "Badge 徽标", link: "/en/components/badge" },
          ]
        },
        {
          text: "反馈组件",
          link: "/en/components/tooltip",
          items: [
            { text: "Tooltip 文字提示", link: "/en/components/tooltip" },
          ]
        }
      ],
    }
  }
}
