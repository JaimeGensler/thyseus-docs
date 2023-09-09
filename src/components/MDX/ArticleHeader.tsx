import { usePageOptions } from ':hooks';
import { Heading } from './Heading';

export const ARTICLE_HEADER_TITLE_ID = 'content-header';

export function ArticleHeader({ children }: React.PropsWithChildren) {
	return <header className="mb-6">{children}</header>;
}
export function ArticleTitle({ className }: { className?: string }) {
	const { headings } = usePageOptions();
	return (
		<Heading level={1} className={className}>
			{headings[0]?.value}
		</Heading>
	);
}
