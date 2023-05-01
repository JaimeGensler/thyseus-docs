import React from 'react';
import clsx from 'clsx';

const styleLookup = {
	note: 'bg-[#3b82f6]/20 border-[#3b82f6]',
	warn: 'bg-[#facc15]/20 border-[#facc15]',
	error: 'bg-[#ef4444]/20 border-[#ef4444]',
	tip: 'bg-accent/20 border-accent',
};
const emojiLookup = {
	note: 'ℹ️',
	warn: '⚠️',
	error: '🚫',
	tip: '💡',
};

const getContent = (children: any) => children.props.children;

type Props = React.PropsWithChildren<{
	type: keyof typeof styleLookup;
}>;
export function Callout({ type, children }: Props) {
	return (
		<div
			className={clsx(
				'border border-dashed rounded px-3 py-1.5 flex items-start gap-3',
				styleLookup[type],
			)}
		>
			<span>{emojiLookup[type]}</span>
			<p>{getContent(children)}</p>
		</div>
	);
}
