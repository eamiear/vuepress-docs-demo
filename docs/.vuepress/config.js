module.exports = {

  // 访问项目路径 http://localhost/vuepress/
  base: '/vuepress/',

  // 网站标题
  title: 'vuepress',

  // 文档、网站描述
  description: 'vuepress docs demo',

  // <head>标签中注入额外meta信息
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/icon.png` }],
  ],
  // dev 服务器主机
  //host: '',

  // 开发环境端口
  port: 7777,

  // build 输出目录
  dest: './dist',

  // 主题配置
  themeConfig: { 

    // 导航栏
    nav: require('./nav/zh'),

    // 侧边栏
    sidebar:{

      // 侧边栏分组
      '/components/': [
        {
          title: '基础组件',
          collapsable: true,
          children: [
            'alert',
            'button',
            'demo'
          ]
        },
        {
          title: '可视化组件',
          collapsable: true,
          children: [
            'chart'
          ]
        }
      ],
      '/library/': [
        {
          title: '实体工具类',
          collapsable: false,
          children: [
            'utils'
          ]
        }
      ]
    }
  }
}