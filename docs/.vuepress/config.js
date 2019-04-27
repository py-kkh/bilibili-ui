module.exports = {
  base: '/bilibili-ui/',
  head: [
    ['link', { rel: 'icon', href: `/favicon-bili.png` }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: `https://fonts.googleapis.com/icon?family=Material+Icons`
      }
    ]
  ],
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
        title: 'Components',
        collapsable: false,
        children: [
          '/components/button'
          /*New Component*/
        ]
      }
    ]
  }
}
