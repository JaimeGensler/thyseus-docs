import { mdsvex, escapeSvelte } from 'mdsvex';
import { getHighlighter } from 'shiki';

import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
export default {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.svx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await getHighlighter({
						themes: ['poimandres'],
						langs: ['javascript', 'typescript'],
					});
					await highlighter.loadLanguage('javascript', 'typescript');
					const html = escapeSvelte(
						highlighter.codeToHtml(code, {
							lang,
							theme: 'poimandres',
						}),
					);
					return `{@html \`${html}\` }`;
				},
			},
		}),
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			':config': 'src/config',
			':icons': 'src/components/icons',
			':ui': 'src/components/ui',
		},
	},
};
