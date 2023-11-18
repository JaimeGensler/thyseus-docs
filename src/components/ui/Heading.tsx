import { Icon } from ':ui';
import clsx from 'clsx';
import Link from 'next/link';

const styles = [
	'scroll-mt-8',
	'scroll-mt-4 border-b border-gray-500 py-0.5',
	'scroll-mt-2.5',
];

export function Heading({
	level,
	className,
	children,
	id,
	...props
}: React.ComponentProps<'h1'> & { level: 1 | 2 | 3 | 4 | 5 | 6 }) {
	const HeadingTag = `h${level}` as 'h1';

	return (
		<HeadingTag
			className={clsx(styles[level - 1], 'not-prose', className)}
			id={level === 1 ? 'overview' : id}
			{...props}
		>
			{level === 1 ? (
				children
			) : (
				<Link className="group flex items-center gap-2" href={`#${id}`}>
					<span>{children}</span>
					<Icon
						className="h-5 w-5 transition-opacity opacity-0 group-hover:opacity-100 group-focus:opacity-100"
						type="link"
					/>
				</Link>
			)}
		</HeadingTag>
	);
}
