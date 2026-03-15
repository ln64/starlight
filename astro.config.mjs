import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: '苍书文档',
      defaultLocale: 'zh-cn',
      locales: {
        'zh-cn': {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      // 引入自定义 CSS
      customCss: [
        './src/styles/custom.css',
      ],
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
