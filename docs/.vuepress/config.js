module.exports = {
  title: "Takayuki Hara's portfolio",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/kurosame/portfolio' }
    ],
    sidebar: [
      {
        title: 'Front-End',
        collapsable: false,
        children: [
          ['/react/', 'React'],
          ['/vuejs/', 'Vue.js'],
          ['/angular/', 'Angular']
        ]
      },
      {
        title: 'Native-Apps',
        collapsable: false,
        children: [['/swift/', 'Swift'], ['/weex/', 'Weex']]
      },
      {
        title: 'Back-End',
        collapsable: false,
        children: [
          ['/scala/', 'Scala'],
          ['/go/', 'Go'],
          ['/python/', 'Python'],
          ['/java/', 'Java'],
          ['/php/', 'PHP']
        ]
      },
      {
        title: 'Infra',
        collapsable: false,
        children: [
          ['/aws/', 'AWS‎'],
          ['/firebase/', 'Firebase'],
          ['/digdag/', 'Digdag']
        ]
      }
    ],
    sidebarDepth: 0
  },
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh'
      }
    }
  }
}
