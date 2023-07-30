import { Icon } from ':ui';
import { Systems } from './Systems';
import { Components } from './Components';
import Link from 'next/link';

export function CodeSnippets() {
	return (
		<div className="grid grid-cols-1 desktop:grid-cols-2 gap-16 px-2">
			<Code href="/docs/core_concepts/components" snippet={Components}>
				<span>Components as </span>
				<span className="text-[#e5c07b]">classes</span>
			</Code>
			<Code href="/docs/core_concepts/systems" snippet={Systems}>
				<span>Systems as </span>
				<span className="text-[#61afef]">functions</span>
			</Code>
		</div>
	);
}

function Code({
	children,
	snippet: Snippet,
	href,
}: React.PropsWithChildren<{ snippet: React.ComponentType; href: string }>) {
	return (
		<Link href={href} className="group block pt-4 rounded-xl relative">
			<div className="rounded-full absolute top-0 left-3 px-2 flex items-center gap-3 text-white bg-primary">
				<Icon type="code" className="w-6 h-6 mt-1" />
				<h2 className="text-2xl leading-6">{children}</h2>
			</div>

			<pre className="border border-primary-light rounded-xl pt-6 pb-2 px-4 text-sm group-hover:bg-primary-light group-focus:bg-primary-light group-hover:shadow-xl transition-colors overflow-x-auto">
				<Snippet />
			</pre>
		</Link>
	);
}
