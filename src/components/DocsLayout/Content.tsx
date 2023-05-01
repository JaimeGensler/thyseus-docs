import { Icon } from ':ui';
import { DocsCategory } from './getDocsPageMap';
import { Article } from '../MDX';
import { usePageContext } from '../PageContext';
import { TableOfContents } from './TableOfContents';
import { Footer } from './Footer';
import { useThemeConfig } from '../ThemeConfig';

type Props = React.PropsWithChildren<{ categories: DocsCategory[] }>;
export function Content({ categories, children }: Props) {
	const { route, filePath } = usePageContext();
	const { docsRepository } = useThemeConfig();

	const currentCategory =
		categories.find(category =>
			route.startsWith(`/docs/${category.route}`),
		) ?? categories[0];

	return (
		<main className="h-full grow flex-shrink-0 bg-primary-dark overflow-y-auto">
			<div className="flex items-stretch mr-auto">
				<Article className="px-8 py-4">
					<div className="not-prose flex items-center justify-between py-1 text-gray-400 text-xs">
						<p className="uppercase font-semibold">
							{currentCategory.title}
						</p>
						<a
							className="flex items-center gap-1 hover:underline"
							href={`${docsRepository}${filePath}`}
						>
							<Icon type="edit" />
							<span>Edit this page on Github</span>
						</a>
					</div>
					{children}
					<Footer categories={categories} />
				</Article>

				<TableOfContents />
			</div>
		</main>
	);
}
