import { BlogHeader } from './BlogHeader';
import { FeaturedArticle, type Article } from './FeaturedArticle';
import { usePageContext } from 'components/PageContext';

const getArticles = ({ pageMap }: any): Article[] =>
	pageMap
		.find((item: any) => item.kind === 'Folder' && item.name === 'blog')
		.children.find((child: any) => child.kind === 'Meta').data.navigation;

export function ArticleList() {
	const pageContext = usePageContext();
	const [featured, ...articles] = getArticles(pageContext);

	return (
		<div className="w-full min-h-screen flex flex-col">
			<BlogHeader />
			<main className="mt-16 max-w-screen-tablet mx-auto">
				<div className="flex flex-col gap-2 text-center">
					<h1 className="text-white font-bold text-5xl">
						Thyseus News
					</h1>
					<p className="text-gray-300 text-lg">
						All the latest about your favorite Web ECS
					</p>
				</div>
				<FeaturedArticle {...featured} />
			</main>
		</div>
	);
}
