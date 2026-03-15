import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: '苍书文档',
      // 使用 root 语言，这样文件直接放在 docs/ 下
      defaultLocale: 'root',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      // 侧边栏导航
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
      // 社交链接（投诉按钮）
      social: [
        {
          icon: 'warning',
          label: '投诉',
          href: 'https://doc.cs64.ink/report/',
        },
      ],
    }),
  ],
});
