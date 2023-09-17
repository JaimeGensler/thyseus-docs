import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// This is a really not good way of handling this but I can't be bothered
// to think of the correct way right now
export default function PortalledH1({ children }: React.PropsWithChildren<{}>) {
	const [rerendered, setRerendered] = useState(false);
	useEffect(() => {
		setRerendered(true);
	}, []);

	return (
		<>
			{typeof document !== 'undefined' &&
				rerendered &&
				createPortal(children, document.getElementsByTagName('h1')![0])}
		</>
	);
}
