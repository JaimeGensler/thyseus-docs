export type Page = {
	href: string;
	title: string;
};
export type Category = {
	name: string;
	pages: Page[];
};

export const PAGES = [
	{
		name: 'Getting Started',
		pages: [
			{
				href: '/docs',
				title: 'Introduction',
			},
			{
				href: '/docs/getting-started/installation-and-setup',
				title: 'Installation & Setup',
			},
		],
	},
	{
		name: 'Core Concepts',
		pages: [
			{ href: '/docs/core-concepts/entities', title: 'Entities' },
			{ href: '/docs/core-concepts/components', title: 'Components' },
			{ href: '/docs/core-concepts/systems', title: 'Systems' },
			{ href: '/docs/core-concepts/worlds', title: 'Worlds' },
		],
	},
	{
		name: 'System Parameters',
		pages: [
			{ href: '/docs/system-parameters/queries', title: 'Queries' },
			{ href: '/docs/system-parameters/resources', title: 'Resources' },
			{ href: '/docs/system-parameters/world', title: 'World' },
			{ href: '/docs/system-parameters/events', title: 'Events' },
			{ href: '/docs/system-parameters/threads', title: 'Threads' },
			{
				href: '/docs/system-parameters/custom',
				title: 'Custom',
			},
		],
	},
];

export const PAGES_FLAT = PAGES.reduce<Page[]>((acc, group) => {
	acc.push(...group.pages);
	return acc;
}, []);
