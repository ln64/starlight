import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: '我的资源站',
      // 设置简体中文为默认语言
      defaultLocale: 'root',
      locales: {
        // 将中文设为 root 语言，这样网址就是 /xxx 而不是 /zh-cn/xxx
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
    }),
  ],
});
