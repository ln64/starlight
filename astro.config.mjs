// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '苍书文档',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: '使用指南',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '示例指南', slug: 'guides/example' },
					],
				},
				{
					label: '参考文档',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
