import { PageOpts } from 'nextra';
import { createContext, useContext } from 'react';

const pageOptions = createContext<PageOpts | null>(null);

export const PageOptionsProvider = pageOptions.Provider;
export function usePageOptions(): PageOpts {
	const ctx = useContext(pageOptions);
	if (ctx === null) {
		throw new Error('Forgot to provide page context!');
	}
	return ctx;
}
