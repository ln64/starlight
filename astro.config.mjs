import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: '我的资源站',
      // 设置简体中文为默认语言
      defaultLocale: 'zh-cn',
      locales: {
        'zh-cn': {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      // 社交链接 - 只留投诉
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
