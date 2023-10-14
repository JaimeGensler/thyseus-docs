import { usePageOptions, useThemeConfig } from ':hooks';
import { Heading, Icon } from ':ui';
import type { DocsCategory } from './getDocsPageMap';

type Props = React.PropsWithChildren<{ currentCategory: DocsCategory }>;
export function DocsHeader({ children, currentCategory }: Props) {
	const { filePath } = usePageOptions();
	const { docsRepository } = useThemeConfig();

	return (
		<header className="mb-6">
			<div className="flex flex-col gap-6 tablet:gap-2 tablet:flex-row-reverse tablet:items-center justify-between py-1 text-gray-400 text-xs">
				<a
					className="flex items-center gap-1 hover:underline"
					href={`${docsRepository}${filePath}`}
				>
					<Icon type="edit" />
					<span>Edit this page on Github</span>
				</a>
				<p className="uppercase font-semibold">
					{currentCategory.title}
				</p>
			</div>
			<Heading level={1}>{children}</Heading>
		</header>
	);
}
