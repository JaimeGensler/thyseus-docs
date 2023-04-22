import React from 'react';
import { useRouter } from 'next/router';

export default {
	docsRepositoryBase:
		'https://github.com/JaimeGensler/thyseus-docs/tree/main/',
	useNextSeoProps() {
		const devTag = process.env.NODE_ENV === 'development' ? '[DEV] ' : '';
		const { asPath } = useRouter();
		if (asPath === '/') {
			return { titleTemplate: `${devTag}Thyseus` };
		}
		return {
			titleTemplate: `${devTag}%s | Thyseus`,
		};
	},
	logo: <span>Thyseus</span>,
	project: {
		link: 'https://github.com/JaimeGensler/thyseus',
	},
	darkMode: false,
	footer: {
		component: null,
	},
	// ...
};
