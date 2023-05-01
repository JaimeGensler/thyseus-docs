import Link from 'next/link';
import clsx from 'clsx';
import { usePageContext } from 'components/PageContext';
import type { DocsCategory, DocsPage } from './getDocsPageMap';

function flattenCategories(categories: DocsCategory[]): DocsPage[] {
	return categories.reduce((acc, category) => {
		acc.push(...category.pages);
		return acc;
	}, [] as DocsPage[]);
}

type Props = { categories: DocsCategory[] };
export function Footer({ categories }: Props) {
	const { route } = usePageContext();
	const flatPageMap = flattenCategories(categories);
	const currentIndex = flatPageMap.findIndex(page => page.route === route);
	const prevPage = currentIndex === 0 ? null : flatPageMap[currentIndex - 1];
	const nextPage =
		currentIndex === flatPageMap.length - 1
			? null
			: flatPageMap[currentIndex + 1];

	return (
		<footer className="flex items-start justify-between border-t border-gray-700 mt-12 mb-8 py-4">
			<FooterItem type="prev" item={prevPage} />
			<FooterItem type="next" item={nextPage} />
		</footer>
	);
}

type FooterItemProps = {
	type: 'prev' | 'next';
	item: DocsPage | null;
};
function FooterItem({ type, item }: FooterItemProps) {
	return (
		<div className="flex flex-col gap-1">
			{item && (
				<>
					<span
						className={clsx(
							'text-xs uppercase font-semibold text-gray-400',
							type === 'prev' ? 'text-start' : 'text-end',
						)}
					>
						{type === 'prev' ? 'Previous' : 'Next'}
					</span>
					<Link
						className="text-accent hocus:underline"
						href={item.route}
					>
						{item.title}
					</Link>
				</>
			)}
		</div>
	);
}
