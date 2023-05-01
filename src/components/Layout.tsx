import React from 'react';
import Head from 'next/head';
import { BlogLayout } from './BlogLayout/BlogLayout';
import { DocsLayout } from './DocsLayout/DocsLayout';
import { PageContextProvider } from 'components/PageContext';
import type { NextraThemeLayoutProps } from 'nextra';
import { ThemeConfigProvider } from './ThemeConfig';

const getTitle = ({ title }: { title?: string }) =>
	`${process.env.NODE_ENV === 'development' ? '[DEV] ' : ''}${
		title ? `${title} | ` : ''
	}Thyseus`;

export function Layout({
	children,
	pageOpts,
	themeConfig,
}: NextraThemeLayoutProps) {
	const { route, frontMatter } = pageOpts;

	const Wrapper =
		frontMatter.layout === false
			? React.Fragment
			: route.startsWith('/blog')
			? BlogLayout
			: route.startsWith('/docs')
			? DocsLayout
			: React.Fragment;

	return (
		<PageContextProvider value={pageOpts}>
			<ThemeConfigProvider value={themeConfig}>
				<Head>
					<link rel="shortcut icon" href="/favicon-s.svg" />
					<title>{getTitle(frontMatter)}</title>
				</Head>
				<Wrapper>{children}</Wrapper>
			</ThemeConfigProvider>
		</PageContextProvider>
	);
}
