import { MDXProvider } from 'nextra/mdx';
import { Heading } from './Heading';
import Link from 'next/link';
import { Code } from './Code';
import clsx from 'clsx';
import { createComponent } from './createElement';

const mdxComponents = {
	h1: createComponent(Heading, '', { level: 1 }),
	h2: createComponent(Heading, '', { level: 2 }),
	h3: createComponent(Heading, '', { level: 3 }),
	// h4-h6 omitted as they are currently unused and unsupported by TOC

	p: createComponent('p', 'my-5'),
	a: createComponent(Link, 'text-accent font-medium underline'),
	strong: createComponent('strong', 'font-semibold text-white'),

	code: createComponent(
		'code',
		'not-codeblock:font-mono not-codeblock:text-[0.875em] not-codeblock:text-white not-codeblock:bg-gray-700/50 not-codeblock:px-1 not-codeblock:py-0.5 not-codeblock:rounded',
	),
	pre: Code,

	ul: createComponent('ul', 'list-disc mt-5 pl-5'),
	li: createComponent('li', 'my-1'),

	table: createComponent(
		'table',
		'w-full table-auto my-6 text-sm leading-6 text-left',
	),
	thead: createComponent('thead', 'border-b border-gray-400 bg-gray-700/50'),
	tbody: createComponent('tbody', 'divide-y divide-gray-700'),
	th: createComponent('th', 'font-semibold py-2 px-1.5 text-white'),
	tr: createComponent('tr', 'even:bg-gray-700/5'),
	td: createComponent('td', 'py-2 px-1.5'),
};

export function Article({
	children,
	className,
}: React.PropsWithChildren<{ className?: string }>) {
	return (
		<article
			className={clsx(
				'text-gray text-base leading-7 w-[720px]',
				className,
			)}
		>
			{/* <div className="prose prose-invert"> */}
			<MDXProvider components={mdxComponents as any}>
				{children}
			</MDXProvider>
			{/* </div> */}
		</article>
	);
}
