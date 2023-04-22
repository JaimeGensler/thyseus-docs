import { Code } from 'nextra/components';
import { MDXProvider } from 'nextra/mdx';
import { Heading } from './Heading';

const mdxComponents = {
	// p: ({ children }: React.PropsWithChildren) => (
	// 	<p className="mt-6 leading-7">{children}</p>
	// ),
	// h1: props => <Heading level={1} {...props} />,
	// h2: props => <Heading level={2} {...props} />,
	// h3: props => <Heading level={3} {...props} />,
	// h4: props => <Heading level={4} {...props} />,
	// h5: props => <Heading level={5} {...props} />,
	// h6: props => <Heading level={6} {...props} />,
	// code: Code,
};

export function MDX({ children }: React.PropsWithChildren) {
	return <MDXProvider components={mdxComponents}>{children}</MDXProvider>;
}
