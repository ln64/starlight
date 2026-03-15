import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: '苍书文档',
      defaultLocale: 'zh-cn',
      // ✅ 确保有这一块
      components: {
        Header: './src/components/Header.astro',
      },
      // 其他配置...
    }),
  ],
});
