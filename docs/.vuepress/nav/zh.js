// 导航
module.exports = [
    { text: '主页', link: '/' },
    { text: '组件文档', link: '/components/' },
    { text: '库', link: '/library/' },
    {
      text: '列表',
      // 下拉列表
      items: [
        { text: 'github', link: 'https://github.com/eamiear/vuepress-docs-demo' },
        
        // 分组 
        { text: 'vuepress', items: [
          { text: 'vuepress', link: 'https://vuepress.vuejs.org/zh/guide/' },
          { text: 'vuepress github', link: 'https://github.com/vuejs/vuepress' },
          { text: 'vuepress docs', link: 'https://github.com/vuejs/vuepress/tree/master/packages/docs/docs/.vuepress' },
        ] }
      ]
    }
  ]