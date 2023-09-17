import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';

export type LinkProps = NextLinkProps & React.ComponentPropsWithoutRef<'a'>;
export type ButtonProps = React.ComponentProps<'button'>;
export type ButtonOrLinkProps = ButtonProps | LinkProps;
export function ButtonOrLink(props: ButtonOrLinkProps) {
	const { pathname } = useRouter();

	if (isButtonProps(props)) {
		return <button {...props} />;
	}

	return <NextLink data-active-link={pathname === props.href} {...props} />;
}

const isButtonProps = (props: {
	href?: string;
	disabled?: boolean;
}): props is ButtonProps => !props.href || !!props.disabled;
