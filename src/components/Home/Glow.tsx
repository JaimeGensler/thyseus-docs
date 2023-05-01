export function Glow(props: React.ComponentPropsWithoutRef<'svg'>) {
	return (
		<svg
			width="1440"
			height="426"
			viewBox="0 0 1440 426"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g filter="url(#filter0_f_196_16735)">
				<path
					d="M1439 263.267C862.314 110.19 548.121 117.004 1.00024 263.267V484L1439 449.944V263.267Z"
					fill="url(#paint0_linear_196_16735)"
				/>
				<path
					d="M1439 263.267C862.314 110.19 548.121 117.004 1.00024 263.267V484L1439 449.944V263.267Z"
					stroke="black"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_196_16735"
					x="-149.5"
					y="0.5"
					width="1739"
					height="634.012"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="75"
						result="effect1_foregroundBlur_196_16735"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_196_16735"
					x1="720"
					y1="151"
					x2="720"
					y2="484"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0.0520833" stop-color="#F0FF46" />
					<stop offset="0.09375" stop-color="#21BC4C" />
					<stop offset="0.40625" stop-color="#01411A" />
					<stop offset="1" stop-color="#03293C" />
				</linearGradient>
			</defs>
		</svg>
	);
}
