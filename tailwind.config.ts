import plugin from 'tailwindcss/plugin';
import formPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';
import headlessUIPlugin from '@headlessui/tailwindcss';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{ts,tsx,mdx}'],
	theme: {
		extend: {},
	},

	plugins: [
		formPlugin,
		typographyPlugin,
		headlessUIPlugin,
		plugin(({ addVariant, addUtilities }) => {
			addUtilities({
				'.scrollbar-thin': { 'scrollbar-width': 'thin' },
			});
			addVariant('hocus', ['&:hover', '&:focus']);
			addVariant('current', '&[data-active-link="true"]');
			addVariant('current', '&[data-active-link="true"]');
		}),
	],
} satisfies Config;
