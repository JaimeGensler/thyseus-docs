import plugin from 'tailwindcss/plugin';
import formPlugin from '@tailwindcss/forms';
import headlessUIPlugin from '@headlessui/tailwindcss';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{ts,tsx,mdx}'],
	theme: {
		colors: {
			black: '#000',
			white: '#fff',
			current: 'currentColor',
			transparent: 'transparent',

			primary: {
				extralight: 'hsl(208, 48%, 17%)',
				light: 'hsl(208, 48%, 15%)',
				DEFAULT: 'hsl(208, 48%, 10%)',
				dark: 'hsl(208, 48%, 6%)',
			},
			accent: {
				light: 'hsl(174, 80%, 50%)',
				DEFAULT: 'hsl(174, 80%, 40%)',
			},

			gray: {
				900: 'hsl(208, 20%, 10%)',
				800: 'hsl(208, 20%, 20%)',
				700: 'hsl(208, 20%, 30%)',
				600: 'hsl(208, 20%, 40%)',
				500: 'hsl(208, 20%, 50%)',
				400: 'hsl(208, 20%, 60%)',
				300: 'hsl(208, 20%, 70%)',
				200: 'hsl(208, 20%, 83%)',
				100: 'hsl(208, 20%, 90%)',

				DEFAULT: 'hsl(208, 20%, 80%)',
			},

			highlight: {
				positive: 'hsl(142, 71%, 45%)',
				neutral: 'hsl(217, 91%, 60%)',
				warn: 'hsl(48, 96%, 53%)',
				error: 'hsl(0, 84%, 60%)',
			},
		},
		screens: {
			tablet: '780px',
			desktop: '1192px',
		},
	},

	plugins: [
		formPlugin,
		headlessUIPlugin,
		plugin(({ addVariant, addUtilities }) => {
			addUtilities({
				'.scrollbar-thin': { 'scrollbar-width': 'thin' },
			});

			addVariant('codeblock', 'pre &');
			addVariant('not-codeblock', ':not(pre) > &');
			addVariant('trow', 'tbody > &');

			addVariant('hocus', ['&:hover', '&:focus']);
			addVariant('current', '&[data-active-link="true"]');
			addVariant('current', '&[data-active-link="true"]');
			addUtilities({
				'.animate-delay-2': { 'animation-delay': '2s' },
				'.animate-delay-4': { 'animation-delay': '4s' },
				'.animate-delay-6': { 'animation-delay': '6s' },
				'.animate-delay-8': { 'animation-delay': '8s' },
				'.animate-delay-10': { 'animation-delay': '10s' },
				'.animate-delay-12': { 'animation-delay': '12s' },
			});
		}),
	],
} satisfies Config;
