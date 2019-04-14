module.exports = {
  base: '/bilibili/',
  head: [['link', { rel: 'icon', href: `/favicon-bili.png` }]],
  docsDir: 'docs',
  host: 'localhost',
  port: 2233,
  title: 'bilibili-ui',
  description: 'i love, so i do.',
  vueThemes: {
    linksHome: [],
    links: {
      github: 'https://github.com/py-kkh/bilibili-ui'
    },
    footer: []
  },
  themeConfig: {
    repo: 'py-kkh/bilibili-ui',
    docsRepo: 'py-kkh/bilibili-ui',
    docsDir: 'docs',
    docsBranch: 'dev',
    editLinks: false,
    logo: '/favicon-bili.png',
    nav: [{ text: 'Home', link: '/' }],
    sidebar: [
      {
        title: 'Layout',
        collapsable: false,
        children: ['/layout/']
      },
      {
        title: 'Theme',
        collapsable: false,
        children: ['/theme/', '/theme/icon']
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/'
          /*New Component*/
        ]
      }
    ]
  }
}
