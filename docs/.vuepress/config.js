module.exports = {
  title: 'Portfolio',
  head: [
    ['meta', { name: 'description', content: "Takayuki Hara's Portfolio" }],
    ['meta', { name: 'theme-color', content: 'white' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/favicon-ios.png', sizes: '72x72' }
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/favicon-ios.png', sizes: '114x114' }
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/favicon-ios.png', sizes: '120x120' }
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/favicon-ios.png', sizes: '144x144' }
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/kurosame' },
      { text: 'Twitter', link: 'https://twitter.com/kurosame_th' },
      { text: 'Qiita', link: 'https://qiita.com/kurosame' },
      { text: 'Hatena Blog', link: 'https://blog.hatena.ne.jp/kurosame-th' },
      { text: 'Speaker Deck', link: 'https://speakerdeck.com/kurosame' },
      { text: 'npm', link: 'https://www.npmjs.com/~kurosame' },
      { text: 'Docker Hub', link: 'https://hub.docker.com/u/kurosame' }
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
        children: [
          ['/swift/', 'Swift'],
          ['/weex/', 'Weex']
        ]
      },
      {
        title: 'Back-End',
        collapsable: false,
        children: [
          ['/scala/', 'Scala'],
          ['/golang/', 'Go'],
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
