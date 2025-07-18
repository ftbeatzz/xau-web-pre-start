import React from 'react'

const GradientWidgetLine: React.FC = () => {
	return (
		<svg
			width='20'
			height='2'
			viewBox='0 0 20 2'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect width='20' height='2' rx='1' fill='url(#gradient)' />
			<defs>
				<linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
					<stop offset='0%' stopColor='rgba(225, 220, 195, 0.1)' />
					<stop offset='50%' stopColor='#e1dcc3' />
					<stop offset='100%' stopColor='rgba(239, 233, 207, 0.1)' />
				</linearGradient>
			</defs>
		</svg>
	)
}

export default GradientWidgetLine
