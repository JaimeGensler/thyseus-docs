// export function Star() {
// 	return (
// 		<svg
// 			id="e75f8QTdlX31"
// 			xmlns="http://www.w3.org/2000/svg"
// 			xmlns-xlink="http://www.w3.org/1999/xlink"
// 			viewBox="0 0 64 64"
// 			shape-rendering="geometricPrecision"
// 			text-rendering="geometricPrecision"
// 		>
// 			<path
// 				d="M32,0c-2.993665,0-3.644769,17.633437-9,23s-23,6-23,9s17.644769,3.633437,23,9s6.006335,23,9,23s3.644769-17.633437,9-23s23-6,23-9-17.644769-3.633437-23-9-6.006335-23-9-23Z"
// 				fill="currentcolor"
// 				stroke="currentcolor"
// 				stroke-width="0.5"
// 			/>
// 		</svg>
// 	);
// }

export function SharpStar(props: React.ComponentProps<'svg'>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns-xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 64 64"
			shapeRendering="geometricPrecision"
			textRendering="geometricPrecision"
			{...props}
		>
			<path
				d="M32,0c-2,0-2.633437,18.633437-8,24s-24,6-24,8s18.633437,2.633437,24,8s6,24,8,24s2.633437-18.633437,8-24s24-6,24-8-18.633437-2.633437-24-8-6-24-8-24Z"
				fill="currentcolor"
				stroke="currentcolor"
				strokeWidth="0.5"
			/>
		</svg>
	);
}
