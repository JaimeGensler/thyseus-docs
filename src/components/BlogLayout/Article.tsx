import Link from 'next/link';
import { Icon } from ':ui';
import { format, parseISO } from 'date-fns';

export type Props = {
	path: string;
	title: string;
	date: string;
	description: string;
};

export function Article({ title, path, date, description }: Props) {
	return (
		<section className="flex group">
			<div className="flex flex-col">
				<div className="w-3 h-3 border-[3px] border-gray-300 group-first:border-accent rounded-full" />
				<div className="w-[2px] flex-grow bg-gray-300 mx-auto group-first:bg-gradient-to-b group-last:bg-gradient-to-b group-first:from-accent group-first:from-25% group-first:to-gray-300 group-last:from-gray-300 group-last:from-50% group-last:to-primary" />
			</div>
			<Link
				className="flex flex-col flex-grow mb-12 pl-8 px-4"
				href={`/blog/${path}`}
			>
				<time
					className="text-gray-400 text-sm -mt-[5px]"
					dateTime={date}
				>
					{format(parseISO(date), 'MMMM do, yyyy')}
				</time>
				<h2 className="text-2xl font-semibold text-white mt-3 mb-1 flex items-center gap-2">
					<span>{title}</span>
					<span className="hidden group-first:inline italic text-gray-400 text-xs">
						✨ New! ✨
					</span>
				</h2>
				<p className="mb-4">{description}</p>
				<div className="text-sm flex items-center hocus:underline text-accent">
					<span>Read more</span>
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
