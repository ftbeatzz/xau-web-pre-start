import React, { useEffect, useState } from 'react'
import {
	ComposedChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	CartesianGrid,
	Area,
} from 'recharts'
import styles from './Chart.module.scss'
import SmallXaut from '../../../icons/SmallXaut'
import Preloader from '../../../components/Preloader'

const PERIODS = [
	{ label: '1D', days: 1, interval: '5' }, // 5-минутные свечи (288 точек)
	{ label: '5D', days: 5, interval: '15' }, // 15-минутные свечи (480 точек)
	{ label: '1M', days: 50, interval: '60' }, // 1-часовые свечи (720 точек)
	// { label: '1Y', days: 365, interval: '720' }, // дневные свечи (365 точек)
	// { label: 'ALL', days: 500, interval: 'D' }, // дневные свечи (1000 точек)
]

interface ChartPoint {
	time: string
	price: number
	volume: number
	date: string
}

const BYBIT_SYMBOL = 'XAUTUSDT'
const BYBIT_API_URL = 'https://api.bybit.com/v5/market/kline'

function getBybitKlineUrl({
	symbol,
	interval,
	start,
	end,
}: {
	symbol: string
	interval: string
	start: number
	end: number
}) {
	return `${BYBIT_API_URL}?category=spot&symbol=${symbol}&interval=${interval}&start=${start}&end=${end}`
}

interface TooltipPayloadItem {
	value: number
}

const CustomTooltip = ({
	active,
	payload,
}: {
	active?: boolean
	payload?: TooltipPayloadItem[]
}) => {
	if (active && payload && payload.length) {
		return (
			<div className={styles.tooltipBox}>
				{payload[0]
					? `$${payload[0].value.toLocaleString('en-US', {
							maximumFractionDigits: 2,
					  })} USDT`
					: ''}
			</div>
		)
	}
	return null
}

// Тип для свечи Bybit
interface BybitKline {
	0: string // timestamp (ms)
	1: string // open
	2: string // high
	3: string // low
	4: string // close
	5: string // volume
	6: string // turnover
}

const XautChart: React.FC = () => {
	const [periodIdx, setPeriodIdx] = useState(0)
	const [allChartData, setAllChartData] = useState<
		Record<number, ChartPoint[]>
	>({})
	const [chartLoading, setChartLoading] = useState(true)
	const [chartError, setChartError] = useState<string | null>(null)

	const period = (
		periodIdx >= 0 && periodIdx < PERIODS.length
			? PERIODS[periodIdx]
			: PERIODS[0]
	) as { label: string; days: number; interval: string }

	useEffect(() => {
		let isMounted = true
		setChartLoading(true)
		setChartError(null)

		Promise.all(
			PERIODS.map(({ days, interval }) => {
				const now = Date.now()
				const end = now
				const start = now - days * 86400 * 1000
				const url = getBybitKlineUrl({
					symbol: BYBIT_SYMBOL,
					interval,
					start,
					end,
				})
				return fetch(url)
					.then(res => res.json())
					.then(data => {
						if (!data?.result?.list || !Array.isArray(data.result.list)) {
							return []
						}
						const points = (data.result.list as BybitKline[])
							.reverse()
							.map(item => {
								const timestamp = item[0]
								const close = item[4]
								const volume = item[5]
								const dateObj = new Date(Number(timestamp))
								return {
									time:
										days <= 5
											? dateObj.toLocaleTimeString('ru-RU', {
													hour: '2-digit',
													minute: '2-digit',
													hour12: false,
											  })
											: dateObj.toLocaleDateString('ru-RU'),
									price: Number(close),
									volume: Number(volume),
									date: dateObj.toLocaleDateString('ru-RU'),
								}
							})
						return points
					})
			})
		)
			.then(results => {
				if (isMounted) {
					const dataObj: Record<number, ChartPoint[]> = {}
					results.forEach((points, idx) => {
						dataObj[idx] = points
					})
					setAllChartData(dataObj)
					setChartLoading(false)
					if (!results[periodIdx]?.length)
						setChartError('Нет данных для выбранного периода')
				}
			})
			.catch(() => {
				if (isMounted) {
					setAllChartData({})
					setChartLoading(false)
					setChartError('Ошибка загрузки графика')
				}
			})

		return () => {
			isMounted = false
		}
	}, [periodIdx])

	useEffect(() => {
		if (
			!chartLoading &&
			(!allChartData[periodIdx] || !allChartData[periodIdx].length)
		) {
			setChartError('Нет данных для выбранного периода')
		}
	}, [periodIdx, chartLoading, allChartData])

	const chartData = allChartData[periodIdx] || []

	return (
		<section className={styles.chartSection}>
			<div className={styles.periods}>
				{PERIODS.map((p, idx) => (
					<button
						key={p.label}
						onClick={() => setPeriodIdx(idx)}
						className={
							idx === periodIdx
								? `${styles.periodBtn} ${styles.periodBtnActive}`
								: styles.periodBtn
						}
					>
						{p.label}
					</button>
				))}
			</div>
			{chartLoading ? (
				<div className={styles.loading}>
					<Preloader />
				</div>
			) : chartError ? (
				<p className={styles.error}>{chartError}</p>
			) : (
				<div className={styles.chartContainer}>
					<ResponsiveContainer width='100%' height='100%'>
						<ComposedChart
							data={chartData}
							margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
						>
							<CartesianGrid
								strokeDasharray='3 3'
								stroke='#444'
								vertical={false}
							/>
							<XAxis
								dataKey={period.days <= 5 ? 'time' : 'date'}
								tick={{
									fill: '#fff',
									fontSize: 10,
									className: styles.xAxisTick,
								}}
							/>
							<YAxis
								orientation='right'
								domain={['auto', 'auto']}
								tick={{ className: styles.yAxisTick }}
								tickFormatter={v => `$${v}`}
							/>
							<Tooltip content={<CustomTooltip />} />
							<defs>
								<linearGradient id='chartGradient' x1='0' y1='0' x2='0' y2='1'>
									<stop offset='0%' stopColor='#ffe34b' stopOpacity={0.6} />
									<stop offset='100%' stopColor='#ffe34b' stopOpacity={0.0} />
								</linearGradient>
							</defs>
							<Area
								type='monotone'
								dataKey='price'
								stroke='none'
								fill='url(#chartGradient)'
							/>
							<Line
								type='monotone'
								dataKey='price'
								stroke='#ffe34b'
								strokeWidth={3}
								dot={false}
								activeDot={{
									r: 7,
									fill: '#ffe34b',
									stroke: '#222',
									strokeWidth: 2,
								}}
							/>
						</ComposedChart>
					</ResponsiveContainer>
				</div>
			)}
			<div className={styles.paxgIconChart}>
				<SmallXaut />
			</div>
		</section>
	)
}

export default XautChart
