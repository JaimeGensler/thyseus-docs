import React from 'react';
import clsx from 'clsx';

const styleLookup = {
	note: 'bg-blue-00/20',
	warn: 'bg-yellow-500/50',
	error: 'bg-red-500/50',
	tip: 'bg-orange-500/50',
};
const emojiLookup = {
	note: '⚠️',
};

type Props = React.PropsWithChildren<{
	type: keyof typeof styleLookup;
}>;
export function Aside({ type, children }: Props) {
	return (
		<aside
			className={clsx(
				'not-prose border-1 border border-blue-500 border-dashed rounded-sm px-4 py-2 flex items-start gap-4',
				styleLookup[type],
			)}
		>
			<span>{emojiLookup[type]}</span>
			{children}
		</aside>
	);
}
