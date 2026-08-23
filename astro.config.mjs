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
