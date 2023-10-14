import { usePageOptions } from ':hooks';
import { Author } from './Author';
import { Heading, Time } from ':ui';

export function BlogHeader({ children }: React.PropsWithChildren) {
	const { frontMatter } = usePageOptions();

	return (
		<header className="mb-6">
			<Time
				className="text-gray-300 text-sm mb-2"
				dateTime={frontMatter.date}
			/>
			<Heading level={1} className="mb-3">
				{children}
			</Heading>
			<Author id={frontMatter.author} />
		</header>
	);
}
