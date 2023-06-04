import { parseISO, format } from 'date-fns';
import { Article } from '../MDX';
import { usePageOptions } from ':hooks';
import { Header } from '../Header';
import { Author } from './Author';

type Props = React.PropsWithChildren;
export function BlogLayout({ children }: Props) {
	const { frontMatter } = usePageOptions();

	return (
		<div className="relative overflow-y-auto h-screen">
			<Header className="bg-primary-light/80 backdrop-blur z-10 sticky top-0 left-0 border-b border-gray-600" />
			<main
				id="main"
				className="container mx-auto flex items-center flex-col gap-4"
			>
				<Article className="px-4 py-4">
					{/* <div className="w-full mb-4">
						<Link className="group" href="/blog">
							<Icon
								type="chevron-right"
								className="mt-px w-4 h-4 scale-[-1] motion-safe:group-hover:-translate-x-1 motion-safe:group-focus:-translate-x-1 transition-transform"
							/>
							<span>Back</span>
						</Link>
					</div> */}
					<Article.Header>
						<time
							className="text-gray-300 text-sm mb-1"
							dateTime={frontMatter.date}
						>
							{format(
								parseISO(frontMatter.date),
								'MMMM do, yyyy',
							)}
						</time>
						<Article.Title className="mb-2" />
						<Author id={frontMatter.author} />
					</Article.Header>
					{children}
				</Article>
			</main>
		</div>
	);
}
