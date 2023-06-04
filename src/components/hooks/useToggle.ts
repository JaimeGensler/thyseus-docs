import { useState, useCallback } from 'react';

const toggle = (x: boolean) => !x;
export function useToggle(
	initialState: boolean = false,
): [boolean, () => void] {
	const [state, setState] = useState(initialState);
	const toggleState = useCallback(() => setState(toggle), []);
	return [state, toggleState];
}
