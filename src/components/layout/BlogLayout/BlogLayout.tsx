import { Header } from '../Header';
import { MDX } from '../MDX';

type Props = React.PropsWithChildren<{}>;
export function BlogLayout({ children }: Props) {
	return (
		<div className="relative overflow-y-auto h-screen">
			<Header />
			<div className="flex">
				<main className="container mx-auto lg:max-w-screen-md flex flex-col gap-4">
					<MDX>{children}</MDX>
				</main>
			</div>
		</div>
	);
}
