// import { format, parseISO } from 'date-fns';

// const FALLBACK = '2000-01-01';
// TODO: Fix next's issue with date-fns
// {
/* {format(parseISO(dateTime || FALLBACK), 'MMMM do, yyyy')} */
// }
type Props = React.ComponentProps<'time'>;
export function Time({ dateTime, ...props }: Props) {
	const [year, month, day] = dateTime!.split('-').map(Number);
	const date = new Date(year, month - 1, day);
	const monthName = date.toLocaleString('default', { month: 'long' });
	return (
		<time dateTime={dateTime} {...props}>
			{monthName} {day}, {year}
		</time>
	);
}
