import { Heading } from 'nextra';
import { usePageContext } from '../../PageContext';
import clsx from 'clsx';

type StructuredHeading = Heading & { children?: StructuredHeading[] };
const getStructuredHeadings = (headings: Heading[]) =>
	headings.reduce((acc, val) => {
		if (val.depth <= 2) {
			acc.push({ ...val, children: [] });
		}
		if (val.depth === 3) {
			const previousElement = acc[acc.length - 1];
			previousElement.children.push({ ...val });
		}
		return acc;
	}, [] as StructuredHeading[]);

export function TableOfContents() {
	const { headings } = usePageContext();

	if (headings.length <= 1) {
		return null;
	}

	return (
		<div className="fixed right-[min(0px,50%-640px)] top-16 mr-auto w-64 h-[calc(100vw-64px)] px-4 pt-28 pb-6 hidden lg:block text-sm">
			<p className="text-sm uppercase text-gray-400">On this page</p>
			<ul>
				{getStructuredHeadings(headings).map(subhead => (
					<TOCItem key={subhead.id} {...subhead} />
				))}
			</ul>
		</div>
	);
}

const depthToIndent = ['gap-2', 'gap-2', 'gap-5'];
function TOCItem({ id, value, depth, children }: StructuredHeading) {
	return (
		<li className="text-gray-300 hocus:text-gray-100 py-0.5">
			<a
				className={clsx(
					'flex items-center group py-0.5 text-gray-300 hocus:text-gray-100',
					depthToIndent[depth - 1],
				)}
				href={`#${id}`}
			>
				<span className="group-hover:opacity-100 opacity-0 transition-opacity">
					#
				</span>
				{depth === 1 ? 'Overview' : value}
			</a>
			{(children?.length ?? 0) > 0 && (
				<ul>
					{children.map(child => (
						<TOCItem key={child.id} {...child} />
					))}
				</ul>
			)}
		</li>
	);
}
