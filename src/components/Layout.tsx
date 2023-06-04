import React from 'react';
import Head from 'next/head';
import { BlogLayout } from './BlogLayout';
import { DocsLayout } from './DocsLayout';
import { PageOptionsProvider, ThemeConfigProvider } from ':hooks';
import type { NextraThemeLayoutProps } from 'nextra';

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
		<PageOptionsProvider value={pageOpts}>
			<ThemeConfigProvider value={themeConfig}>
				<Head>
					<link rel="shortcut icon" href="/favicon-s.svg" />
					<title>{getTitle(frontMatter)}</title>
				</Head>
				<Wrapper>{children}</Wrapper>
			</ThemeConfigProvider>
		</PageOptionsProvider>
	);
}
