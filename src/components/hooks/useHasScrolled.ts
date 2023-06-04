import { useEffect, useState } from 'react';

export function useHasScrolled() {
	const [hasScrolled, setHasScrolled] = useState(false);

	useEffect(() => {
		function handleScroll() {
			setHasScrolled(window.scrollY > 0);
		}
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return hasScrolled;
}
