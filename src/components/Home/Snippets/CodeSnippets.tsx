import { Icon } from ':ui';
import { Systems } from './Systems';
import { Components } from './Components';

export function CodeSnippets() {
	return (
		<div className="grid grid-cols-1 desktop:grid-cols-2 gap-16">
			<Code snippet={Components}>
				<span>Components</span>
				{' as '}
				<span className="text-[#e5c07b]">classes</span>
			</Code>
			<Code snippet={Systems}>
				<span>Systems</span>
				{' as '}
				<span className="text-[#61afef]">functions</span>
			</Code>
		</div>
	);
}

function Code({
	children,
	snippet: Snippet,
}: React.PropsWithChildren<{ snippet: React.ComponentType }>) {
	return (
		<div className="pt-4 rounded-xl relative">
			<div className="rounded-full absolute top-0 left-3 px-2 flex items-center gap-3 text-white">
				<Icon type="code" className="w-6 h-6 mt-1" />
				<h2 className="text-2xl leading-6">{children}</h2>
			</div>

			<pre className="border border-primary-light rounded-xl pt-6 pb-2 px-4 text-sm">
				<Snippet />
			</pre>
		</div>
	);
}
