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
      // ✅ 加上这一块：引入自定义 CSS
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: '指南',
          items: [
            { label: '示例指南', link: '/guides/example/' },
          ],
        },
        {
          label: '参考',
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
