import { Icon } from ':ui';
import { DocsCategory } from './getDocsPageMap';
import { MDX } from '../MDX';
import { usePageContext } from '../../PageContext';

type Props = React.PropsWithChildren<{ categories: DocsCategory[] }>;
export function Content({ categories, children }: Props) {
	const { route, filePath } = usePageContext();

	const currentCategory = categories.find(category =>
		route.startsWith(`/docs/${category.route}`),
	);

	return (
		<main className="flex-1 px-8 py-4 flex justify-center">
			<div className="prose prose-invert mx-auto">
				<div className="not-prose flex items-center justify-between py-1 text-gray-400 text-xs">
					<p className="uppercase font-semibold">
						{currentCategory
							? currentCategory.title
							: categories[0].title}
					</p>
					<a
						className="flex items-center gap-1 hover:underline"
						href={`https://www.github.com/JaimeGensler/thyseus-docs/tree/main/${filePath}`}
					>
						<Icon type="edit" />
						<span>Edit this page on Github</span>
					</a>
				</div>
				<article>
					<MDX>{children}</MDX>
				</article>
			</div>
		</main>
	);
}
