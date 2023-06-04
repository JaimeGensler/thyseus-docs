import { Icon } from ':ui';

type Props = React.PropsWithChildren<{
	icon: React.ComponentProps<typeof Icon>['type'];
	title: React.ReactNode;
}>;
export function Feature({ icon, title, children }: Props) {
	return (
		<div className="flex items-center gap-8 py-6 max-w-screen-tablet">
			<Icon className="flex-shrink-0 w-32 h-32" type={icon} />
			<div className="flex flex-col gap-2">
				<h2 className="font-bold text-white text-4xl">{title}</h2>
				<p className="text-lg">{children}</p>
			</div>
		</div>
	);
}

// type Feature = [string, string];
// //prettier-ignore
// const features = [
// 	['Safe', 'lock',],
// 	['Multithreaded', '']
// ]

// -   A safety-first approach (no `eval` or eval-like constructs)
// -   Hassle-free multithreading
// -   Archetypal storage
// -   Complex queries
// -   Deeply customizable execution logic
// -   Dynamically sized types
// -   World-unique data
// -   Event handling
// -   Fine-grain memory management
// -   Integration with third-party libraries
