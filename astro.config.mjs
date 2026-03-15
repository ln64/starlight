import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: '苍书文档',
      defaultLocale: 'zh-cn',
      // 社交链接 - 只留投诉
      social: [
        {
          icon: 'warning',  // 使用内置的警告图标
          label: '投诉',
          href: 'https://doc.cs64.ink/report/',
        },
        // 如果有其他社交链接（比如github），可以留着
        // 没有的话就只这一条
      ],
    }),
  ],
});
