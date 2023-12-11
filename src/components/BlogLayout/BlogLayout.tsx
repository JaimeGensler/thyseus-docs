import { Article } from '../MDX';
import { Header } from '../Header';
import { Icon, Link } from ':ui';
import { BlogHeader } from './BlogHeader';

const components = { h1: BlogHeader };

type Props = React.PropsWithChildren;
export function BlogLayout({ children }: Props) {
	return (
		<div className="relative overflow-y-auto h-screen">
			<Header className="bg-primary-light/80 backdrop-blur z-10 sticky top-0 left-0 border-b border-gray-600" />
			<main id="main" className="container mx-auto">
				<Article
					components={components}
					className="px-4 pt-4 pb-32 mx-auto"
				>
					<div className="w-full mb-4">
						<Link className="group" href="/blog">
							<Icon
								type="chevron-right"
								className="mt-px w-4 h-4 scale-[-1] motion-safe:group-hover:-translate-x-1 motion-safe:group-focus:-translate-x-1 transition-transform"
							/>
							<span>Back</span>
						</Link>
					</div>
					{children}
				</Article>
			</main>
		</div>
	);
}
