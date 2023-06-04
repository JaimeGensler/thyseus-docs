const withNextra = require('nextra')({
	theme: './src/components',
	flexsearch: {
		codeblocks: false,
	},
	themeConfig: './theme.config.jsx',
});

module.exports = withNextra();
