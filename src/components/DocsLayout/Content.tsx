import { useEffect, useRef } from 'react';
import { Icon } from ':ui';
import { usePageOptions, useThemeConfig } from ':hooks';
import { DocsCategory } from './getDocsPageMap';
import { Article } from '../MDX';
import { TableOfContents } from './TableOfContents';
import { Footer } from './Footer';

type Props = React.PropsWithChildren<{ categories: DocsCategory[] }>;
export function Content({ categories, children }: Props) {
	const { route, filePath } = usePageOptions();
	const { docsRepository } = useThemeConfig();

	const scrollContainerRef = useRef<HTMLElement>(null);
	useEffect(() => {
		if (scrollContainerRef.current) {
			// Needed to reset scroll on navigate
			scrollContainerRef.current.scrollTo({
				top: 0,
				// Smooth scrolling up the new page is kind of odd
				// Just jump to the top in this case
				behavior: 'instant' as any,
			});
		}
	}, [route]);

	const currentCategory =
		categories.find(category =>
			route.startsWith(`/docs/${category.route}`),
		) ?? categories[0];

	return (
		<main
			ref={scrollContainerRef}
			className="h-full flex-grow bg-primary-dark overflow-y-auto scroll-smooth"
			id="main"
		>
			<div className="flex items-stretch mr-auto">
				<Article className="px-8 py-4 mx-auto tablet:mx-[unset]">
					<Article.Header>
						<div className="flex flex-col gap-6 tablet:gap-2 tablet:flex-row-reverse tablet:items-center justify-between py-1 text-gray-400 text-xs">
							<a
								className="flex items-center gap-1 hover:underline"
								href={`${docsRepository}${filePath}`}
							>
								<Icon type="edit" />
								<span>Edit this page on Github</span>
							</a>
							<p className="uppercase font-semibold">
								{currentCategory.title}
							</p>
						</div>
						<Article.Title />
					</Article.Header>
					{children}
					<Footer categories={categories} />
				</Article>

				<TableOfContents />
			</div>
		</main>
	);
}
