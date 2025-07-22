import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { LineChart, Line, ResponsiveContainer, YAxis, XAxis } from 'recharts'
import dataRaw from './paxg-static.json'

interface Marker {
	idx: number
	type: 'SELL' | 'BUY'
}

interface MarkerSVGProps {
	x: number
	y: number
	type: 'SELL' | 'BUY'
	i: number
	show: boolean
}

interface AbsoluteMarkersProps {
	width: number
	height: number
	show: boolean
}

const data = (dataRaw as [number, ...unknown[]][])?.map((item, idx) => ({
	price: parseFloat(item[4] as string),
	idx,
}))

const prices = data.map(d => d.price)
const minY = Math.min(...prices)
const maxY = Math.max(...prices)

const markers: Marker[] = [
	{
		idx: data.findIndex(d => d.price === Math.max(...prices.slice(0, 50))),
		type: 'SELL',
	},
	{
		idx: data.findIndex(d => d.price === Math.min(...prices.slice(50, 150))),
		type: 'BUY',
	},
	{
		idx: data.findIndex(d => d.price === Math.max(...prices.slice(0, 200))),
		type: 'SELL',
	},
	{
		idx: data.findIndex(d => d.price === Math.min(...prices.slice(200, 299))),
		type: 'BUY',
	},
]

const markerAppearStyle = (
	type: 'SELL' | 'BUY',
	i: number,
	show: boolean
): React.CSSProperties => ({
	opacity: show ? 1 : 0,
	transform: show
		? 'translateY(0)'
		: type === 'SELL'
		? 'translateY(-20px)'
		: 'translateY(20px)',
	transition: `opacity 0.5s ${0.2 + i * 0.15}s, transform 0.5s ${
		0.2 + i * 0.15
	}s`,
})

const MarkerSVG: React.FC<MarkerSVGProps> = ({ x, y, type, i, show }) => {
	if (type === 'SELL') {
		return (
			<g style={markerAppearStyle('SELL', i, show)}>
				<rect
					x={x - 14}
					y={y - 22}
					width={28}
					height={14}
					rx={3}
					fill='#C94F5C'
				/>
				<text
					x={x}
					y={y - 22 + 7}
					fill='#fff'
					fontSize={8}
					fontFamily='Unbounded'
					fontWeight='700'
					textAnchor='middle'
					dominantBaseline='middle'
				>
					SELL
				</text>
			</g>
		)
	} else {
		return (
			<g style={markerAppearStyle('BUY', i, show)}>
				<rect
					x={x - 14}
					y={y + 2}
					width={28}
					height={14}
					rx={3}
					fill='#BBAF5A'
					opacity='0.7'
				/>
				<text
					x={x}
					y={y + 2 + 7}
					fill='#222'
					fontSize={8}
					fontFamily='Unbounded'
					fontWeight='700'
					textAnchor='middle'
					dominantBaseline='middle'
				>
					BUY
				</text>
			</g>
		)
	}
}

const AbsoluteMarkers: React.FC<AbsoluteMarkersProps> = ({
	width,
	height,
	show,
}) => {
	const xScale = (idx: number) => (idx / (data.length - 1)) * width
	const yScale = (price: number) => ((maxY - price) / (maxY - minY)) * height
	return (
		<svg
			width={width}
			height={height}
			style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none' }}
		>
			{markers.map((m, i) => {
				const d = data[m.idx]
				if (!d) return null
				const x = xScale(d.idx)
				const y = yScale(d.price)
				return <MarkerSVG key={i} x={x} y={y} type={m.type} i={i} show={show} />
			})}
		</svg>
	)
}

const TradeChart: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const [size, setSize] = useState({ width: 0, height: 0 })
	const [showMarkers, setShowMarkers] = useState(false)

	useLayoutEffect(() => {
		if (!containerRef.current) return
		const update = () => {
			const rect = containerRef.current!.getBoundingClientRect()
			setSize({ width: rect.width, height: rect.height })
		}
		update()
		window.addEventListener('resize', update)
		return () => window.removeEventListener('resize', update)
	}, [])

	useEffect(() => {
		setShowMarkers(false)
		const timeout = setTimeout(() => setShowMarkers(true), 2200)
		return () => clearTimeout(timeout)
	}, [size.width, size.height])

	return (
		<div
			ref={containerRef}
			style={{ position: 'relative', width: '100%', height: 310 }}
		>
			<ResponsiveContainer width='100%' height={300}>
				<LineChart
					data={data}
					margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
				>
					<defs>
						<linearGradient id='line-gradient' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='0%' stopColor='#ffe34b' stopOpacity={1} />
							<stop offset='100%' stopColor='#ffe34b' stopOpacity={0.08} />
						</linearGradient>
					</defs>
					<XAxis dataKey='idx' hide={true} />
					<YAxis domain={[minY, maxY]} hide={true} />
					<Line
						type='monotone'
						dataKey='price'
						stroke='url(#line-gradient)'
						strokeWidth={3}
						dot={false}
						isAnimationActive={true}
						animationDuration={2200}
					/>
				</LineChart>
			</ResponsiveContainer>
			{size.width > 0 && size.height > 0 && (
				<AbsoluteMarkers
					width={size.width}
					height={size.height}
					show={showMarkers}
				/>
			)}
		</div>
	)
}

export default TradeChart
