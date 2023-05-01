import { usePageContext } from '../PageContext';
import { Header } from '../Header/Header';
import { SideNavigation } from './SideNavigation';
import { getDocsPageMap } from './getDocsPageMap';
import { Content } from './Content';

type Props = React.PropsWithChildren<{}>;
export function DocsLayout({ children }: Props) {
	const { pageMap } = usePageContext();
	const categories = getDocsPageMap(pageMap);

	return (
		<div className="min-h-screen">
			<Header />
			<div className="relative w-full h-[calc(100vh-64px)] flex overflow-hidden">
				<SideNavigation categories={categories} />
				<Content categories={categories}>{children}</Content>
			</div>
		</div>
	);
}
