import { usePageContext } from '../../PageContext';
import { Header } from '../Header';
import { SideNavigation } from './SideNavigation';
import { getDocsPageMap } from './getDocsPageMap';
import { TableOfContents } from './TableOfContents';
import { Content } from './Content';

type Props = React.PropsWithChildren<{}>;
export function DocsLayout({ children }: Props) {
	const { pageMap } = usePageContext();
	const categories = getDocsPageMap(pageMap);

	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<div className="flex flex-1 relative w-full max-w-screen-xl mx-auto">
				<SideNavigation categories={categories} />
				<Content categories={categories}>{children}</Content>
				<TableOfContents />
			</div>
		</div>
	);
}
