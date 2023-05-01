import { createContext, useContext } from 'react';
import config from '../../theme.config';

type ThemeConfig = {
	projectRepository: string;
	docsRepository: string;
};

const themeConfigContext = createContext<ThemeConfig | null>(null);

export const ThemeConfigProvider = themeConfigContext.Provider;
export function useThemeConfig(): ThemeConfig {
	const ctx = useContext(themeConfigContext);
	return ctx ?? config;
}
