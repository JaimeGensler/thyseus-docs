import { useState, useEffect } from 'react';
import { Icon } from ':ui';
import { SearchDialog } from './SearchDialog';

export function Search() {
	const [isOpen, setIsOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		function handleKeydown(event: KeyboardEvent) {
			if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
				event.preventDefault();
				setIsOpen(x => !x);
			}
		}
		window.addEventListener('keydown', handleKeydown);
		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	}, []);

	return (
		<>
			<button
				type="button"
				className="flex gap-2 items-center justify-between bg-gray-700 rounded-md py-1.5 text-sm px-2 text-gray-200 min-w-[14rem]"
				onClick={() => setIsOpen(true)}
			>
				<span className="flex items-center gap-1">
					<Icon type="search" className="w-4 h-4" />
					<span className="leading-[0.875rem] pr-8">
						Search docs...
					</span>
				</span>
				{isMounted && (
					<kbd className="text-xs bg-gray-900/80 py-0.5 px-1.5 outline outline-1 outline-gray-500 rounded-md">
						{navigator.userAgent.includes('Macintosh')
							? '⌘ K'
							: 'Ctrl K'}
					</kbd>
				)}
			</button>

			<SearchDialog isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
}
