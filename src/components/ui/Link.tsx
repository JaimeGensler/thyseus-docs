import clsx from 'clsx';
import { ButtonOrLink, type LinkProps } from './ButtonOrLink';

export function Link({ className, ...props }: LinkProps) {
	return (
		<ButtonOrLink
			className={clsx(
				'text-accent flex items-center hocus:underline hocus:text-accent-light',
				className,
			)}
			{...props}
		/>
	);
}
