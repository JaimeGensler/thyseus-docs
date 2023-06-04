import clsx from 'clsx';
import { useRouter } from 'next/router';
import { ButtonOrLink } from ':ui';
import { DocsCategory, DocsPage } from './getDocsPageMap';

type SideNavigationProps = { categories: DocsCategory[] };
export function SideNavigation({ categories }: SideNavigationProps) {
	return (
		<nav className="bg-primary h-full border-r border-gray-600 flex-grow flex-shrink-0 top-16 right-0 overflow-y-auto scrollbar-thin hidden tablet:block">
			<ul className="flex flex-col p-4 gap-5 min-w-0 tablet:w-52 desktop:w-64 ml-auto">
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
	const { pathname } = useRouter();
	const isCurrent = pathname === route;

	return (
		<li
			className={clsx(
				'group ml-1 transition-colors',
				isCurrent
					? 'border-l-2 pl-[3px] border-current text-accent'
					: 'border-l pl-1 border-gray-600 text-gray-200 hocus:text-gray-100 focus-within:text-gray-100 hocus:border-current focus-within:border-current',
			)}
		>
			<ButtonOrLink
				className="flex py-px px-1.5 current:font-medium transition-colors"
				href={route}
			>
				<span className="motion-safe:group-hover:translate-x-1 motion-safe:transition-transform">
					{title}
				</span>
			</ButtonOrLink>
		</li>
	);
}
