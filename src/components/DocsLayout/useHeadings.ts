import { useMemo } from 'react';
import { usePageOptions } from ':hooks';

export function useHeadings() {
	const { headings } = usePageOptions();
	return useMemo(
		() =>
			headings.map(h =>
				h.depth === 1 ? { ...h, value: 'Overview', id: 'overview' } : h,
			),
		[headings],
	);
}
