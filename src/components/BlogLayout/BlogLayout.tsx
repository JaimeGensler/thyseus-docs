import { BlogHeader } from './BlogHeader';
import { Article } from '../MDX';
import { Link, Icon } from ':ui';
import { usePageContext } from 'components/PageContext';

type Props = React.PropsWithChildren;
export function BlogLayout({ children }: Props) {
	const { frontMatter } = usePageContext();
	return (
		<div className="relative overflow-y-auto h-screen">
			<BlogHeader />
			<main className="container mx-auto flex items-center flex-col gap-4">
				<div className="w-full">
					<Link className="group" href="/blog">
						<Icon
							type="chevron-right"
							className="mt-px w-4 h-4 scale-[-1] motion-safe:group-hover:-translate-x-1 motion-safe:group-focus:-translate-x-1 transition-transform"
						/>
						<span>Back</span>
					</Link>
				</div>
				<Article>
					<time className="text-gray-400 text-sm mb-1">
						{frontMatter.date}
					</time>
					{children}
				</Article>
			</main>
		</div>
	);
}
