import { PageOpts } from 'nextra';
import { createContext, useContext } from 'react';

const pageContext = createContext<PageOpts | null>(null);

export const PageContextProvider = pageContext.Provider;
export function usePageContext(): PageOpts {
	const ctx = useContext(pageContext);
	if (ctx === null) {
		throw new Error('Forgot to provide page context!');
	}
	return ctx;
}
