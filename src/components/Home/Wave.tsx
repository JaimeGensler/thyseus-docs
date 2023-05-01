export function Wave(props: React.ComponentPropsWithoutRef<'svg'>) {
	return (
		<svg
			viewBox="0 0 1440 254"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				style={{ overflow: 'visible' }}
				d="M1383.36 65.7142C1198.46 65.7142 1198.46 0.280853 1013.59 0.280853C828.726 0.280853 828.659 65.7142 643.593 65.7142C458.526 65.7142 458.693 0.280853 273.593 0.280853C88.4928 0.280853 89.0262 65.7142 -95.8738 65.7142C-109.407 65.7142 -121.907 65.3475 -133.607 64.7142V376.148H1495.36V55.0142C1466.03 61.4142 1430.79 65.7142 1383.36 65.7142Z"
				fill="currentColor"
			/>
		</svg>
	);
}
