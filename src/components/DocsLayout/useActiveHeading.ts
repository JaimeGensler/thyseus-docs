import { useEffect, useState } from 'react';
import type { Heading } from 'nextra';

export function useActiveHeading(headings: Heading[]): string {
	const [activeHeading, setActiveHeading] = useState('');

	useEffect(() => {
		const observer = new IntersectionObserver(
			intersections => {
				const firstElementInView = intersections.find(
					intersection => intersection.isIntersecting,
				);
				if (!firstElementInView) {
					setActiveHeading(x => x);
				} else {
					setActiveHeading(firstElementInView.target.id);
				}
			},
			{
				rootMargin: '-64px 0px -30% 0px',
			},
		);

		for (const heading of headings) {
			const element = document.getElementById(
				heading.depth === 1 ? 'overview' : heading.id,
			);
			if (element) {
				observer.observe(element);
			}
		}

		return () => {
			observer.disconnect();
		};
	}, [headings]);

	return activeHeading;
}
