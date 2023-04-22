import clsx from 'clsx';
import { useRouter } from 'next/router';
import { ButtonOrLink } from ':ui';
import { DocsCategory, DocsPage } from './getDocsPageMap';

type SideNavigationProps = { categories: DocsCategory[] };
export function SideNavigation({ categories }: SideNavigationProps) {
	return (
		<nav className="fixed top-16 left-[max(0px,50%-640px)] w-64 h-[calc(100vh-64px)] overflow-y-auto scrollbar-thin">
			<ul className="flex flex-col p-4 gap-6">
				{categories.map(category => (
					<Category key={category.title} {...category} />
				))}
			</ul>
		</nav>
	);
}

function Category({ title, pages }: DocsCategory) {
	return (
		<li>
			<span className="uppercase text-sm py-0.5 block font-semibold text-gray-400">
				{title}
			</span>
			<ul>
				{pages.map(page => (
					<NavItem key={page.title} {...page} />
				))}
			</ul>
		</li>
	);
}

function NavItem({ title, route }: DocsPage) {
	const { asPath } = useRouter();
	const isCurrent = asPath === route;

	return (
		<li
			className={clsx(
				'group ml-1 pl-1 border-l transition-colors hocus:border-gray-100',
				isCurrent
					? 'border-green-500 hocus:border-green-400'
					: 'border-gray-600',
			)}
		>
			<ButtonOrLink
				className="flex items-center justify-between gap-4 py-0.5 px-1.5 rounded text-gray-300 hocus:text-gray-100 current:text-green-500 hocus:current:text-green-400 current:font-medium transition-colors"
				href={route}
			>
				<span className="motion-safe:group-hover:translate-x-1 motion-safe:transition-transform">
					{title}
				</span>
			</ButtonOrLink>
		</li>
	);
}
