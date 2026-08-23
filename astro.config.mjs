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
			sidebar: [{
                	label: 'Getting started',
                	autogenerate: { directory: 'getting_started' },
                }, {
                    label: 'Basics',
                    autogenerate: { directory: 'basics' },
                }, {
                    label: 'Firebase',
                    autogenerate: { directory: 'firebase' },
                }, {
					label: 'Guides',
                	autogenerate: { directory: 'guides' },
				}, {
                   	label: 'Advanced UI',
                    autogenerate: { directory: 'advanced_ui' },
                }
			],
		}),
	],
});
