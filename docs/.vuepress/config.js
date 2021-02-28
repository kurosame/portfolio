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
            text: 'GitHub [Business]',
            link: 'https://github.com/hara-takayuki',
            target: '_blank'
          },
          {
            text: 'GitHub [Private]',
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
        title: 'Works',
        collapsable: false,
        children: [
          {
            title: 'Business',
            collapsable: false,
            children: [
              ['/dorsia/', '媒体入稿システム [非公開]'],
              ['/cap/', '振り返りレポート生成 [非公開]'],
              ['/cad/', 'CA Dashboard'],
              ['/cb/', 'クリエイティブ分析のアプリ [非公開]'],
              ['/ss/', '広告系ポータルサイト [非公開]']
            ]
          },
          {
            title: 'Private',
            collapsable: false,
            children: [
              ['/luna-hp/', '広告漫画家の仕事用ウェブサイト'],
              ['/glossary/', '用語集アプリ'],
              ['/other/', '小規模なアプリなど']
            ]
          }
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
