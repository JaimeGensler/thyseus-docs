import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';

type LinkProps = NextLinkProps & React.ComponentPropsWithoutRef<'a'>;
type ButtonProps = React.ComponentProps<'button'>;
export function ButtonOrLink(props: ButtonProps | LinkProps) {
	const { asPath } = useRouter();

	if (isButtonProps(props)) {
		return <button {...(props as any)} />;
	}

	return <NextLink data-active-link={asPath === props.href} {...props} />;
}

const isButtonProps = (props: {
	href?: string;
	disabled?: boolean;
}): props is ButtonProps => !props.href || props.disabled;
