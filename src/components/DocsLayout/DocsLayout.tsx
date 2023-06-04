import { usePageOptions } from ':hooks';
import { Header } from '../Header';
import { SideNavigation } from './SideNavigation';
import { getDocsPageMap } from './getDocsPageMap';
import { Content } from './Content';

type Props = React.PropsWithChildren<{}>;
export function DocsLayout({ children }: Props) {
	const { pageMap } = usePageOptions();
	const categories = getDocsPageMap(pageMap);

	return (
		<div className="min-h-screen">
			<Header className="bg-primary-light border-b border-b-gray-600" />
			<div className="relative w-full h-[calc(100vh-64px)] flex overflow-hidden">
				<SideNavigation categories={categories} />
				<Content categories={categories}>{children}</Content>
			</div>
		</div>
	);
}
