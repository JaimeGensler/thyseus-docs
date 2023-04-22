import { useState, useEffect } from 'react';
import { SearchIcon } from './SearchIcon';
import { SearchDialog } from './SearchDialog';

export function Search() {
	const [isOpen, setIsOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<>
			<button
				type="button"
				className="flex gap-2 items-center bg-gray-700 rounded-md py-1.5 text-sm px-2 text-gray-300"
				onClick={() => setIsOpen(true)}
			>
				<SearchIcon className="w-4 h-4" />
				<span className="leading-[0.875rem] pr-8">
					Search documentation...
				</span>
				{isMounted && (
					<kbd className="text-xs bg-gray-900/80 py-0.5 px-1.5 outline outline-1 outline-gray-500 rounded-md">
						{navigator.userAgent.includes('Macintosh')
							? '⌘ K'
							: 'Ctrl K'}
					</kbd>
				)}
			</button>

			<SearchDialog isOpen={isOpen} onClose={setIsOpen} />
		</>
	);
}
