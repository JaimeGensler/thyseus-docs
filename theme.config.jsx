import React from 'react';
import { useRouter } from 'next/router';

export default {
	docsRepositoryBase: 'https://github.com/JaimeGensler/thyseus-docs',
	useNextSeoProps() {
		const { asPath } = useRouter();
		if (asPath !== '/') {
			return {
				titleTemplate: '%s | Thyseus',
			};
		}
	},
	logo: <span>Thyseus</span>,
	project: {
		link: 'https://github.com/JaimeGensler/thyseus',
	},
	darkMode: false,
	toc: {
		float: false,
	},
	footer: {
		component: null,
	},
	// ...
};
