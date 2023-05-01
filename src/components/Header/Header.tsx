import Link from 'next/link';
import { Logo } from ':ui';
import { Contents } from './Contents';

export function Header() {
	return (
		<header className="bg-primary-light h-16 flex-shrink-0 flex items-center justify-between border-b border-gray-600 px-6 py-1 gap-4 shadow-lg">
			<Link href="/" className="h-full overflow-hidden">
				<Logo className="h-full" aria-hidden />
				<span className="sr-only">Thyseus</span>
			</Link>

			<Contents />
		</header>
	);
}
