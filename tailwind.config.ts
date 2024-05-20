import plugin from 'tailwindcss/plugin';
import formPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{ts,svelte}', './src/app.html'],
	theme: {
		colors: {
			black: '#000',
			white: '#fff',
			current: 'currentColor',
			transparent: 'transparent',

			textPrimary: 'var(--text-primary)',
			textSecondary: 'var(--text-secondary)',
			textInverse: 'var(--text-inverse)',

			bgPrimary: 'var(--background-primary)',
			bgSecondary: 'var(--background-secondary)',

			// primary: {
			// 	extralight: 'hsl(208, 48%, 17%)',
			// 	light: 'hsl(208, 48%, 15%)',
			// 	DEFAULT: 'hsl(208, 48%, 10%)',
			// 	dark: 'hsl(208, 48%, 6%)',
			// },
			// accent: {
			// 	light: 'hsl(174, 80%, 50%)',
			// 	DEFAULT: 'hsl(174, 80%, 40%)',
			// },

			// gray: {
			// 	900: 'hsl(208, 20%, 10%)',
			// 	800: 'hsl(208, 20%, 20%)',
			// 	700: 'hsl(208, 20%, 30%)',
			// 	600: 'hsl(208, 20%, 40%)',
			// 	500: 'hsl(208, 20%, 50%)',
			// 	400: 'hsl(208, 20%, 60%)',
			// 	300: 'hsl(208, 20%, 70%)',
			// 	200: 'hsl(208, 20%, 80%)',
			// 	100: 'hsl(208, 20%, 90%)',

			// 	DEFAULT: 'hsl(208, 20%, 80%)',
			// },

			highlight: {
				positive: 'hsl(142, 71%, 45%)',
				neutral: 'hsl(217, 91%, 60%)',
				warn: 'hsl(48, 96%, 53%)',
				error: 'hsl(0, 84%, 60%)',
			},
		},
		// screens: {
		// 	tablet: '780px',
		// 	desktop: '1192px',
		// },
		extend: {
			typography: ({ theme }: any) => ({
				dark: {
					css: {
						'--tw-prose-body': theme('colors.textPrimary'),
						'--tw-prose-headings': theme('colors.textPrimary'),
						'--tw-prose-links': theme('colors.textPrimary'),
						'--tw-prose-code': theme('colors.textPrimary'),
						'--tw-prose-bold': theme('colors.textPrimary'),
					},
				},
			}),
		},
	},

	plugins: [
		formPlugin,
		typographyPlugin,
		plugin(({ addVariant, addUtilities }) => {
			addUtilities({
				'.scrollbar-thin': { 'scrollbar-width': 'thin' },
			});

			addVariant('codeblock', 'pre &');
			addVariant('not-codeblock', ':not(pre) > &');

			addVariant('hocus', ['&:hover', '&:focus']);
			addVariant('children', '& > *');
		}),
	],
} satisfies Config;
