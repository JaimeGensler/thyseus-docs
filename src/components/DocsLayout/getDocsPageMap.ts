import type { Folder, MdxFile, MetaJsonFile, PageMapItem } from 'nextra';

const getOrderedPages = (pageMap: PageMapItem[]) =>
	(pageMap.find(item => item.kind === 'Meta') as MetaJsonFile).data
		.navigation as { title: string; path: string }[];

export type DocsCategory = {
	route: string;
	title: string;
	pages: DocsPage[];
};
export type DocsPage = {
	route: string;
	title: string;
};
export function getDocsPageMap(pageMap: PageMapItem[]): DocsCategory[] {
	const { children: docsPages } = pageMap.find(
		(item): item is Folder<PageMapItem> =>
			item.kind === 'Folder' && item.name === 'docs',
	)!;
	return getOrderedPages(docsPages).map((category, i) => {
		const folder = docsPages.find(
			(item): item is Folder<PageMapItem> =>
				item.kind === 'Folder' && item.name === category.path,
		)!;
		const children = [...folder.children];
		if (i === 0) {
			children.push(
				docsPages.find(
					page => page.kind === 'MdxPage' && page.name === 'index',
				)!,
			);
		}

		return {
			title: category.title,
			route: category.path,
			pages: getOrderedPages(children).map(page => {
				const pageMapItem = children.find(
					(item): item is MdxFile =>
						item.kind === 'MdxPage' && item.name === page.path,
				)!;
				return {
					route: pageMapItem.route,
					title: page.title,
				};
			}),
		};
	});
}
