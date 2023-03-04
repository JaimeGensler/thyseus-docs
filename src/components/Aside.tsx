import React from 'react';

type Props = React.PropsWithChildren<{
	type: 'note' | 'warn';
}>;
export function Aside({ type, children }: Props) {
	return (
		<aside
			style={{
				marginTop: '1rem',
				border: '1px solid rgb(80, 80, 80)',
				background: 'rgba(255, 255, 255, 0.05)',
				borderRadius: '6px',
				padding: '1rem',
			}}
		>
			{children}
		</aside>
	);
}
