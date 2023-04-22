const withNextra = require('nextra')({
	// theme: 'nextra-theme-docs',
	theme: './src/components',
	themeConfig: './theme.config.jsx',
});

module.exports = withNextra();
