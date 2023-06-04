import { useCallback, useLayoutEffect, useRef } from 'react';

const noop = () => {};
export function useEvent<T extends (...args: any) => any>(handler: T): T {
	const handlerRef = useRef<T>(noop as T);
	useLayoutEffect(() => {
		handlerRef.current = handler;
	});
	return useCallback<any>(
		(...args: any[]) => handlerRef.current(...args),
		[],
	);
}
