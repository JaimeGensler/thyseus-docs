const EMPTY_PROPS = {};

export function createComponent<
	T extends React.ElementType | React.ComponentType,
>(
	ElementType: T,
	className: string,
	extraProps: Partial<React.ComponentProps<T>> = EMPTY_PROPS,
) {
	return function (props: React.ComponentPropsWithoutRef<T>) {
		//@ts-ignore
		return <ElementType className={className} {...extraProps} {...props} />;
	};
}
