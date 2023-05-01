import { useMemo } from 'react';
import { usePageContext } from '../PageContext';

export function useHeadings() {
	const { headings } = usePageContext();
	return useMemo(
		() =>
			headings.map(h =>
				h.depth === 1 ? { ...h, value: 'Overview', id: 'overview' } : h,
			),
		[headings],
	);
}
