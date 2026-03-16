import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: '苍书文档',
      defaultLocale: 'root',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      // ✅ 正确的写法：用 components，不是 overrideComponents
      components: {
        Layout: './src/layouts/Layout.astro',
      },
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: '首页',
          link: '/',
        },
        {
          label: '资源目录',
          items: [
            { label: '往期更新目录', link: '/guides/example/' },
          ],
        },
        {
          label: '获取往期',
          autogenerate: { directory: 'reference' },
        },
      ],
      social: [
        {
          icon: 'warning',
          label: '投诉',
          href: '/report/',
        },
      ],
    }),
  ],
});
