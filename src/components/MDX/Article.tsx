import { MDXProvider } from 'nextra/mdx';
import Link from 'next/link';
import { Code } from './Code';
import clsx from 'clsx';
import { createComponent } from './createElement';
import { Heading } from ':ui';

const defaultMDXComponents = {
	h1: createComponent(Heading, '', { level: 1 }),
	h2: createComponent(Heading, '', { level: 2 }),
	h3: createComponent(Heading, '', { level: 3 }),
	// h4-h6 omitted as they are currently unused and unsupported by TOC

	a: createComponent(Link, 'text-accent font-medium underline'),

	// code: createComponent(
	// 	'code',
	// 	'not-codeblock:font-mono not-codeblock:text-[0.875em] not-codeblock:text-white not-codeblock:bg-gray-700/50 not-codeblock:px-1 not-codeblock:py-0.5 not-codeblock:rounded',
	// ),
	// pre: Code,

	// ul: createComponent('ul', 'list-disc mt-5 pl-5'),
	// li: createComponent('li', 'my-1'),

	// table: createComponent(
	// 	'table',
	// 	'w-full table-auto my-6 text-sm leading-6 text-left',
	// ),
	// thead: createComponent('thead', 'border-b border-gray-400 bg-gray-700/50'),
	// tbody: createComponent('tbody', 'divide-y divide-gray-700'),
	// th: createComponent('th', 'font-semibold py-2 px-1.5 text-white'),
	// tr: createComponent('tr', 'even:bg-gray-700/5'),
	// td: createComponent('td', 'py-2 px-1.5'),
};

type Props = React.PropsWithChildren<{
	className?: string;
	components?: React.ComponentProps<typeof MDXProvider>['components'];
}>;
export function Article({ children, className, components }: Props) {
	return (
		<article
			className={clsx(
				'prose prose-dark prose-pre:px-0 min-w-0',
				className,
			)}
		>
			<MDXProvider
				components={{ ...defaultMDXComponents, ...components } as any}
			>
				{children}
			</MDXProvider>
		</article>
	);
}
