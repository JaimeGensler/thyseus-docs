import Link from 'next/link';
import { Icon } from ':ui';
import { Article } from './types';

export function FeaturedArticle({ title, path, date, description }: Article) {
	return (
		<section>
			<Link
				className="group flex flex-col gap-1.5 mt-5 py-4 px-5 bg-primary-light hocus:bg-primary-extralight transition-colors shadow-lg rounded-r-xl border-l-2 border-accent"
				href={`/blog/${path}`}
			>
				<div className="flex items-center gap-2 text-gray-400">
					<h2 className="text-lg font-bold text-semibold text-white">
						{title}
					</h2>
					<span>•</span>
					<time className="text-sm">{date}</time>
				</div>
				<p>{description}</p>
				<div className="flex items-center text-accent gap-0.5">
					<span className="text-sm group-hover:underline">
						Read more
					</span>
					<Icon
						// Chevron doesn't appear centered without being nudged slightly
						className="mt-0.5 w-3 h-3 motion-safe:group-hover:translate-x-1 transition-transform"
						type="chevron-right"
						strokeWidth={3}
					/>
				</div>
			</Link>
		</section>
	);
}
