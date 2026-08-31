// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: 'https://docs.dragbuilder.io',
	integrations: [
		starlight({
			title: 'DragBuilder docs',
			logo: {
				src: './logo.svg',
				alt: 'DragBuilder Logo',
			},
			customCss: ['./src/styles/orbit-theme.css'],
			components: {
				Head: './src/components/Head.astro',
			},
			head: [
				{
					tag: 'link',
					attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
				},
				{
					tag: 'link',
					attrs: { rel: 'manifest', href: '/site.webmanifest' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: 'https://docs.dragbuilder.io/og-image.png' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image:width', content: '1200' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image:height', content: '630' },
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:image', content: 'https://docs.dragbuilder.io/og-image.png' },
				},
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebSite',
						name: 'DragBuilder Docs',
						url: 'https://docs.dragbuilder.io',
						description: 'Guides, references and how-tos for building real apps with DragBuilder.',
					}),
				},
			],
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				es: { label: 'Español', lang: 'es' },
			},
			sidebar: [{
                	label: 'Getting started',
                	translations: { es: 'Empezando' },
                	autogenerate: { directory: 'getting_started' },
                }, {
                    label: 'Basics',
                    translations: { es: 'Básicos' },
                    autogenerate: { directory: 'basics' },
                }, {
                    label: 'Firebase',
                    autogenerate: { directory: 'firebase' },
                }, {
					label: 'Guides',
                	translations: { es: 'Guías' },
                	autogenerate: { directory: 'guides' },
				}, {
                   	label: 'Advanced UI',
                   	translations: { es: 'UI avanzada' },
                    autogenerate: { directory: 'advanced_ui' },
                }
			],
		}),
	],
});
