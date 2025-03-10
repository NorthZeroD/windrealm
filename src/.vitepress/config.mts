import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/windrealm/',
  lang: 'zh-Hans',
  title: "风绘之境",
  description: "一个支持生电、养老的纯净综合性MC服务器~",
  head: [['link', { rel: 'icon', href: '/windrealm/assets/logo/Windrealm.svg' }]],
  lastUpdated: true,

  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },

  themeConfig: {

    logo: '/assets/logo/Windrealm.svg',
    sidebar: [
      {
        text: '关于',
        items: [
          {text: '关于', link: '/about'}
        ]
      },
      {
        text: '联系我们',
        items: [
          {text: '联系我们', link: '/contact'}
        ]
      }
    ],

    nav: [
      { text: '主页', link: '/' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NorthZeroD/simpdoc' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: '本站所有文档采用 CC BY-SA 4.0 许可协议发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} NorthZeroD`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'
  }
})
