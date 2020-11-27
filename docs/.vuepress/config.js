module.exports = {
  title: 'Portfolio',
  head: [
    ['meta', { name: 'description', content: "Takayuki Hara's Portfolio" }],
    ['meta', { name: 'theme-color', content: 'white' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png', sizes: '72x72' }],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/favicon.png', sizes: '114x114' }
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/favicon.png', sizes: '120x120' }
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/favicon.png', sizes: '144x144' }
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'OSS',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/kurosame',
            target: '_blank'
          },
          {
            text: 'npm',
            link: 'https://www.npmjs.com/~kurosame',
            target: '_blank'
          },
          {
            text: 'Docker Hub',
            link: 'https://hub.docker.com/u/kurosame',
            target: '_blank'
          }
        ]
      },
      {
        text: 'Article',
        items: [
          {
            text: 'Qiita',
            link: 'https://qiita.com/kurosame',
            target: '_blank'
          },
          {
            text: 'Zenn',
            link: 'https://zenn.dev/kurosame',
            target: '_blank'
          },
          {
            text: 'Hatena Blog',
            link: 'https://blog.hatena.ne.jp/kurosame-th',
            target: '_blank'
          },
          {
            text: 'Speaker Deck',
            link: 'https://speakerdeck.com/kurosame',
            target: '_blank'
          }
        ]
      },
      {
        text: 'SNS',
        items: [
          {
            text: 'Twitter',
            link: 'https://twitter.com/kurosame_th',
            target: '_blank'
          }
        ]
      }
    ],
    sidebar: [
      {
        title: 'Front-End',
        collapsable: false,
        children: [
          ['/react/', 'React'],
          ['/vuejs/', 'Vue.js'],
          ['/dart/', 'Dart']
        ]
      },
      {
        title: 'Native-Apps',
        collapsable: false,
        children: [
          ['/swift/', 'Swift'],
          ['/flutter/', 'Flutter']
        ]
      },
      {
        title: 'Back-End',
        collapsable: false,
        children: [
          ['/scala/', 'Scala'],
          ['/golang/', 'Go'],
          ['/python/', 'Python']
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
      },
      {
        title: 'Other',
        collapsable: false,
        children: [
          ['/angular/', 'Angular'],
          ['/weex/', 'Weex'],
          ['/java/', 'Java'],
          ['/php/', 'PHP']
        ]
      }
    ],
    sidebarDepth: 0
  },
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    }
  }
}
