import { useEffect, useRef } from 'react';
import { usePageOptions } from ':hooks';
import { DocsCategory } from './getDocsPageMap';
import { Article } from '../MDX';
import { TableOfContents } from './TableOfContents';
import { Footer } from './Footer';
import { DocsHeader } from './DocsHeader';

type Props = React.PropsWithChildren<{ categories: DocsCategory[] }>;
export function Content({ categories, children }: Props) {
	const { route } = usePageOptions();

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
			className="flex-grow bg-primary-dark overflow-y-auto scroll-smooth"
			id="main"
		>
			<div className="flex items-stretch mr-auto">
				<Article
					components={{
						h1: ({ children }) => (
							<DocsHeader currentCategory={currentCategory}>
								{children}
							</DocsHeader>
						),
					}}
					className="px-8 py-4 mx-auto tablet:mx-[unset]"
				>
					{children}
					<Footer categories={categories} />
				</Article>

				<TableOfContents />
			</div>
		</main>
	);
}
