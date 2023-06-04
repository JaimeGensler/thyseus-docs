import clsx from 'clsx';
import { Icon } from './Icon';

type Props = React.PropsWithChildren<{
	type: 'positive' | 'negative';
	title: string;
}>;
export function Opinion({ type, title, children }: Props) {
	return (
		<div className="flex flex-col my-6">
			<div className="flex items-center gap-1.5">
				<Icon
					type={
						type === 'positive'
							? 'circle-check-solid'
							: 'circle-x-solid'
					}
					className={clsx(
						'h-6 w-6',
						type === 'positive'
							? 'text-highlight-positive'
							: 'text-highlight-error',
					)}
				/>
				<p className="text-white font-medium">{title}</p>
			</div>
			<div
				className={clsx(
					'ml-3 px-4 border-l [&>*]:mt-2 [&>*]:mb-0',
					type === 'positive'
						? 'border-highlight-positive'
						: 'border-highlight-error',
				)}
			>
				{children}
			</div>
		</div>
	);
}
