import { useEvent } from ':hooks';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

type Props = {
	keyName: string;
	alternateKeys?: string[];
	onPressKey?(e: KeyboardEvent): void;
};
export function KeyboardKey({
	keyName,
	alternateKeys = [],
	onPressKey,
}: Props) {
	const hasMeta = keyName.includes('⌘');
	const rawKey = hasMeta ? keyName.slice(2) : keyName;

	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);

	const handleKeydown = useEvent((e: KeyboardEvent) => {
		if (
			(hasMeta &&
				(e.metaKey || e.ctrlKey) &&
				e.key === rawKey.toLowerCase()) ||
			alternateKeys.includes(e.key)
		) {
			onPressKey?.(e);
		}
	});

	useEffect(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	}, []);

	const meta =
		isMounted && navigator.userAgent.includes('Macintosh') ? '⌘' : 'Ctrl';

	return (
		<kbd className="text-xs bg-gray-900/80 py-0.5 px-1.5 rounded">
			{clsx(hasMeta && meta, rawKey)}
		</kbd>
	);
}
