import { Landing } from './Landing';
import { Cards } from './Cards/Cards';
import { Header } from '../Header';
import { CodeSnippets } from './Snippets';
import Head from 'next/head';

export function Home() {
	return (
		<div className="relative min-h-screen">
			<Head>
				<title>Thyseus</title>
			</Head>
			<Header />
			<Landing />
			<div className="container mx-auto px-2 py-12">
				<CodeSnippets />
				<Cards />
			</div>
		</div>
	);
}
