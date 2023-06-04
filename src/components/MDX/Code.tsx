import { useEffect, useRef, useState } from 'react';
import { Icon } from ':ui';

type Props = React.ComponentProps<'pre'> & {
	filename?: string;
};
export function Code({ children, filename, ...props }: Props) {
	const [copied, setCopied] = useState(false);
	const preRef = useRef<HTMLPreElement>(null);

	useEffect(() => {
		if (copied) {
			const id = setTimeout(() => setCopied(false), 3000);
			return () => clearTimeout(id);
		}
	}, [copied]);

	return (
		<div className="group rounded-lg my-4 overflow-hidden">
			{filename && (
				<div className="bg-gray-700 text-gray-100 py-1.5 px-3 text-xs">
					{filename}
				</div>
			)}
			<pre
				className="relative bg-gray-700/50 py-2 text-sm overflow-x-auto"
				ref={preRef}
				{...props}
			>
				<button
					className="absolute top-1 right-1.5 border border-gray/50 bg-primary-dark/80 rounded-md p-1 group-hover:opacity-100 group-focus:opacity-100 opacity-0 transition-opacity shadow-md"
					type="button"
					onClick={() => {
						navigator.clipboard.writeText(
							preRef.current?.querySelector('code')
								?.textContent || '',
						);
						setCopied(true);
					}}
				>
					<Icon
						className="w-5 h-5"
						type={copied ? 'circle-check' : 'copy'}
					/>
				</button>
				{children}
			</pre>
		</div>
	);
}
