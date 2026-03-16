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
      // 使用自定义头部组件
      components: {
        Header: './src/components/CustomHeader.astro',
      },
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
      // ❗ 重要：删除 social 配置，因为我们在自定义组件里已经加了投诉按钮
    }),
  ],
});
