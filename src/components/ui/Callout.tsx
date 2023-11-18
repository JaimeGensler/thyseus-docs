import React from 'react';
import clsx from 'clsx';

const styleLookup = {
	note: 'bg-highlight-neutral/20 border-highlight-neutral',
	warn: 'bg-highlight-warn/20 border-highlight-warn',
	error: 'bg-highlight-error/20 border-highlight-error',
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
				'not-prose border border-dashed rounded px-3 py-1.5 flex items-start gap-3',
				styleLookup[type],
			)}
		>
			<span>{emojiLookup[type]}</span>
			<p>{getContent(children)}</p>
		</div>
	);
}
