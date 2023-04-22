import { Fragment } from 'react';
import Head from 'next/head';
import { BlogLayout } from './BlogLayout/BlogLayout';
import { DocsLayout } from './DocsLayout/DocsLayout';
import { PageContextProvider } from 'components/PageContext';
import type { NextraThemeLayoutProps } from 'nextra';

const getTitle = ({ title }: { title?: string }) => `${
	process.env.NODE_ENV === 'development' ? '[DEV] ' : ''
}
				${title ? `${title} | ` : ''}Thyseus`;

export function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
	const { frontMatter, route } = pageOpts;

	const Wrapper = route.startsWith('/blog')
		? BlogLayout
		: route.startsWith('/docs')
		? DocsLayout
		: Fragment;

	return (
		<PageContextProvider value={pageOpts}>
			<Head>
				<title>{getTitle(frontMatter)}</title>
			</Head>
			<Wrapper>{children}</Wrapper>
		</PageContextProvider>
	);
}
