import { Header } from '../Header';
import { usePageOptions } from ':hooks';
import { Article, type Props as ArticleProps } from './Article';

const getArticles = ({ pageMap }: any): ArticleProps[] =>
	pageMap
		.find((item: any) => item.kind === 'Folder' && item.name === 'blog')
		.children.find((child: any) => child.kind === 'Meta').data.navigation;

export function ArticleList() {
	const pageContext = usePageOptions();

	const articles = getArticles(pageContext);

	return (
		<div className="w-full min-h-screen flex flex-col">
			<Header className="bg-primary-light border-gray-600" />
			<main className="mt-16 max-w-screen-tablet mx-auto">
				<div className="flex flex-col gap-2 text-center mb-8">
					<h1 className="text-white font-bold text-5xl">
						Latest Blog Posts
					</h1>
				</div>
				<div className="px-2">
					{articles.map(data => (
						<Article {...data} />
					))}
				</div>
			</main>
		</div>
	);
}
