import Head from 'next/head';
import clsx from 'clsx';
import { useHasScrolled } from ':hooks';
import { Landing } from './Landing/Landing';
import { Cards } from './Cards/Cards';
import { Header } from '../Header';
import { CodeSnippets } from './Snippets';
import { Feature } from './Feature';

export function Home() {
	const hasScrolled = useHasScrolled();

	return (
		<div className="relative min-h-screen">
			<Head>
				<title>Thyseus</title>
			</Head>
			<Header
				hideLogo={!hasScrolled}
				className={clsx(
					'fixed z-50 top-0 left-0 transition-colors duration-500 border-transparent',
					hasScrolled && 'bg-primary/50 backdrop-blur-lg',
				)}
			/>
			<Landing />
			<main className="container mx-auto flex flex-col items-center pt-6 pb-12 gap-12">
				<Feature icon="rocket" title="Modern & Featureful">
					Strong typing, seamless integration with modern tools, and a
					modular architecture - Thyseus empowers developers to create
					high-performance and feature-rich apps effortlessly.
				</Feature>
				<CodeSnippets />
				<Feature icon="lock" title="Safety-first">
					Thyseus has been architected to be{' '}
					<span className="font-semibold text-gray-100">
						completely safe
					</span>{' '}
					through and through. No eval, eval-like constructs, or
					modifying global objects - so you can develop with
					confidence.
				</Feature>
				<Cards />
			</main>
		</div>
	);
}
