import { useToggle, usePageOptions } from ':hooks';
import { ButtonOrLink, Icon } from ':ui';
import { DocsCategory, getDocsPageMap } from '../DocsLayout/getDocsPageMap';
import clsx from 'clsx';

export function MobileNav() {
	const [isNavOpen, toggleIsNavOpen] = useToggle(false);
	const [isDocsExpanded, toggleIsDocsExpanded] = useToggle(false);

	return (
		<>
			<button
				type="button"
				className="block tablet:hidden"
				onClick={toggleIsNavOpen}
			>
				<span className="sr-only">Menu</span>
				<Icon type={isNavOpen ? 'x' : 'bars'} className="w-6 h-6" />
			</button>

			{isNavOpen && (
				<div className="fixed z-100 w-full h-[calc(100vh-64px)] top-16 left-0 bg-primary-dark overflow-y-auto tablet:hidden">
					<ul className="px-2 py-4 flex flex-col gap-4">
						<MobileNavSection>
							<MobileNavButton
								className={clsx(
									isDocsExpanded &&
										'border-gray-500/75 border-b',
								)}
								onClick={toggleIsDocsExpanded}
							>
								<span>Docs</span>
								<Icon
									type="chevron-right"
									className={clsx(
										'w-5 h-5 transition-transform',
										isDocsExpanded && 'rotate-90',
									)}
								/>
							</MobileNavButton>
							{isDocsExpanded && <MobileDocsNav />}
						</MobileNavSection>
						<MobileNavSection>
							<MobileNavButton href="/blog/v0_12_release">
								Blog
							</MobileNavButton>
						</MobileNavSection>
					</ul>
				</div>
			)}
		</>
	);
}

function MobileNavSection({ children }: React.PropsWithChildren) {
	return (
		<li className="bg-primary-light px-3 rounded-lg w-full">{children}</li>
	);
}

function MobileNavButton({
	className,
	...props
}: React.ComponentProps<typeof ButtonOrLink>) {
	return (
		<ButtonOrLink
			className={clsx(
				'flex items-center justify-between text-lg w-full py-2',
				className,
			)}
			{...props}
		/>
	);
}

function MobileDocsNav() {
	const { pageMap } = usePageOptions();
	const categories = getDocsPageMap(pageMap);
	return (
		<ul className="flex flex-col gap-4 py-4 px-1">
			{categories.map(category => (
				<Category key={category.route} {...category} />
			))}
		</ul>
	);
}

function Category({ pages, title }: DocsCategory) {
	const [isExpanded, toggleIsExpanded] = useToggle();

	return (
		<li>
			<ButtonOrLink
				className="w-full flex items-center gap-2 hocus:text-white group transition-colors"
				onClick={toggleIsExpanded}
			>
				<span>{title}</span>
				<div className="flex-1 h-px w-full bg-gray-500/50 group-hover:bg-gray-500 transition-colors" />
				<Icon
					type="chevron-right"
					className={clsx(
						'h-3 w-3 transition-transform',
						isExpanded && 'rotate-90',
					)}
				/>
			</ButtonOrLink>
			{isExpanded && (
				<ul className="px-2.5">
					{pages.map(page => (
						<li key={page.route}>
							<ButtonOrLink
								className="text-sm py-0.5 current:text-accent"
								href={page.route}
							>
								{page.title}
							</ButtonOrLink>
						</li>
					))}
				</ul>
			)}
		</li>
	);
}
