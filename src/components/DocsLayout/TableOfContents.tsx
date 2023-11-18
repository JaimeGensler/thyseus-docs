import Link from 'next/link';
import clsx from 'clsx';
import { useActiveHeading } from './useActiveHeading';
import { useHeadings } from './useHeadings';
import type { Heading } from 'nextra';

type StructuredHeading = Heading & { children?: StructuredHeading[] };
const getStructuredHeadings = (headings: Heading[]) =>
	headings.reduce((acc, val) => {
		if (val.depth <= 2) {
			acc.push({ ...val, children: [] });
		}
		if (val.depth === 3) {
			const previousElement = acc[acc.length - 1];
			previousElement.children!.push({ ...val });
		}
		return acc;
	}, [] as StructuredHeading[]);

export function TableOfContents() {
	const headings = useHeadings();
	const activeHeadingId = useActiveHeading(headings);

	return (
		<aside className="flex-shrink-0 w-64 hidden desktop:block text-sm pt-[6.25rem] pb-4 px-4">
			{headings.length > 1 && (
				<div className="sticky top-[6.25rem] left-0">
					<p className="font-bold uppercase text-gray-400">
						On this page
					</p>
					<ul>
						{getStructuredHeadings(headings).map(heading => (
							<TOCItem
								key={heading.id}
								activeId={activeHeadingId}
								{...heading}
							/>
						))}
					</ul>
				</div>
			)}
		</aside>
	);
}

const depthToIndent = ['gap-2', 'gap-2', 'gap-5'];
function TOCItem({
	id,
	value,
	depth,
	children,
	activeId,
}: StructuredHeading & { activeId: string }) {
	const isActive = id === activeId;

	return (
		<li className="py-0.5">
			<Link
				className={clsx(
					'flex items-center group py-0.5',
					isActive
						? 'text-accent hocus:text-accent'
						: 'text-gray-300 hocus:text-gray-100',
					depthToIndent[depth - 1],
				)}
				href={`#${id}`}
			>
				<span
					className={clsx(
						!isActive &&
							'group-hover:opacity-100 group-focus:opacity-100 opacity-0 transition-opacity',
					)}
				>
					#
				</span>
				{value}
			</Link>
			{(children?.length ?? 0) > 0 && (
				<ul>
					{children!.map(child => (
						<TOCItem
							activeId={activeId}
							key={child.id}
							{...child}
						/>
					))}
				</ul>
			)}
		</li>
	);
}
