type Props = React.PropsWithChildren<{
	level: 1 | 2 | 3 | 4 | 5 | 6;
}>;

const styles = [
	'font-bold text-4xl mb-4',
	'font-semibold text-3xl mt-8 border-b border-gray-700',
	'font-medium text-xl mt-4',
];
export function Heading({ level, children }: Props) {
	const HeadingTag = `h${level}` as 'h2';
	return <HeadingTag className={styles[level - 1]}>{children}</HeadingTag>;
}
