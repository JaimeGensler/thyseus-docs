import { Icon } from ':ui';

type Props = React.PropsWithChildren<{
	icon: React.ComponentProps<typeof Icon>['type'];
	title: React.ReactNode;
}>;
export function Feature({ icon, title, children }: Props) {
	return (
		<div className="flex items-center gap-8 py-6 max-w-screen-tablet px-2">
			<Icon
				className="flex-shrink-0 w-24 h-24 tablet:w-32 tablet:h-32"
				type={icon}
			/>
			<div className="flex flex-col gap-2">
				<h2 className="font-bold text-white text-4xl">{title}</h2>
				<p className="text-lg">{children}</p>
			</div>
		</div>
	);
}
