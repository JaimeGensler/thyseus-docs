import { PageOpts } from 'nextra';
import { createContext, useContext } from 'react';

const pageContext = createContext<PageOpts>(null);

export const PageContextProvider = pageContext.Provider;
export function usePageContext() {
	return useContext(pageContext);
}
