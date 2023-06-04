// import { Header } from '../Header';
// import { FeaturedArticle } from './FeaturedArticle';
// import { usePageContext } from '../PageContext';
// import { Article } from './types';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// const getArticles = ({ pageMap }: any): Article[] =>
// 	pageMap
// 		.find((item: any) => item.kind === 'Folder' && item.name === 'blog')
// 		.children.find((child: any) => child.kind === 'Meta').data.navigation;

export function ArticleList() {
	// const pageContext = usePageContext();
	const router = useRouter();

	// const [featured, ...articles] = getArticles(pageContext);

	useEffect(() => {
		router.replace('/blog/v0_12_release');
	}, []);

	return null;
	// return (
	// <div className="w-full min-h-screen flex flex-col">
	// 	<Header className="bg-primary-light border-gray-600" />
	// 	<main className="mt-16 max-w-screen-tablet mx-auto">
	// 		<div className="flex flex-col gap-2 text-center">
	// 			<h1 className="text-white font-bold text-5xl">
	// 				Latest News
	// 			</h1>
	// 			<p className="text-gray-300 text-lg">
	// 				The most recent updates from your favorite Web ECS
	// 			</p>
	// 		</div>
	// 		<FeaturedArticle {...featured} />
	// 	</main>
	// </div>
	// );
}
