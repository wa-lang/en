import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vitepress'
import { ICONS } from './constants'
import { generateSidebarItems } from './helper/sidebarItems'
import HighlightedExt from './plugins/highlightedExt'

export default async () => defineConfig({
  lang: 'en',
  title: 'Wa',
  description: 'WASM Language',
  appearance: true,

  locales: {
    root: { label: 'English' },
    en: { label: '简体中文', link: 'https://wa-lang.org' },
  },

  themeConfig: {
    logo: '/favicon.svg',

    editLink: {
      pattern: 'https://github.com/wa-lang/wa-lang.github.io/edit/master/docs/:path',
      text: 'Edit the page',
    },

    algolia: {
      appId: '3401L2T8D6',
      apiKey: '98dd501bfa6f60574e303792007e262c',
      indexName: 'wa-lang',
    },

    nav: [
      { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
      { text: 'Playground', link: 'https://wa-lang.org/playground/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wa-lang/wa/' },
      { icon: 'twitter', link: 'https://twitter.com/wayuyan' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Quick Start', link: '/guide/quick-start' },
            { text: 'Playground', link: '/guide/playground' },
            { text: 'Example: Prime', link: '/guide/example-prime' },
            { text: 'Example: Brainfuck', link: '/guide/example-brainfuck.md' },
            { text: 'Example: Snake Game', link: '/guide/example-snake' },
          ],
        },
      ],
    },
    footer: {
      copyright: 'Copyright ©️2023 The Wa Authors',
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['script', {}, fs.readFileSync(path.resolve(__dirname, './inlined-scripts/redirectDocsPath.js'), 'utf-8')],
    ['script', {}, fs.readFileSync(path.resolve(__dirname, './inlined-scripts/restorePreference.js'), 'utf-8')],
  ],

  markdown: {
    highlight: await HighlightedExt(),
  },

})
