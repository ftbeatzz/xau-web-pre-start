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
import SmallPaxg from '../../../icons/SmallPaxg'
import Preloader from '../../../components/Preloader'
// import PaxgIconChart from '../../../icons/PaxgIconChart'

const PERIODS = [
	{ label: '1D', interval: '5m', limit: 288 },
	{ label: '5D', interval: '15m', limit: 480 },
	{ label: '1M', interval: '1h', limit: 720 },
	{ label: '1Y', interval: '1d', limit: 365 },
	{ label: 'ALL', interval: '1d', limit: 1000 },
]

interface ChartPoint {
	time: string
	price: number
	volume: number
	date: string
}

// Тип для одной свечи Binance
interface BinanceKline {
	0: number // open time
	1: string // open
	2: string // high
	3: string // low
	4: string // close
	5: string // volume
	6: number // close time
	7: string // quote asset volume
	8: number // number of trades
	9: string // taker buy base asset volume
	10: string // taker buy quote asset volume
	11: string // ignore
}

const getKlinesUrl = (interval: string, limit: number) =>
	`https://api.binance.com/api/v3/klines?symbol=PAXGUSDT&interval=${interval}&limit=${limit}`

// Кастомный тултип для отображения только цены
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

const PaxgChart: React.FC = () => {
	const [periodIdx, setPeriodIdx] = useState(0)
	const [allChartData, setAllChartData] = useState<ChartPoint[][]>([])
	const [chartLoading, setChartLoading] = useState(true)
	const [chartError, setChartError] = useState<string | null>(null)

	// Предзагрузка всех периодов
	useEffect(() => {
		let isMounted = true
		setChartLoading(true)
		setChartError(null)
		Promise.all(
			PERIODS.map(async period => {
				try {
					const res = await fetch(getKlinesUrl(period.interval, period.limit))
					if (!res.ok) {
						throw new Error(`HTTP error! status: ${res.status}`)
					}
					const data = await res.json()
					if (!Array.isArray(data)) {
						console.warn('Invalid data format from Binance API:', data)
						throw new Error('Нет данных')
					}
					return (data as BinanceKline[]).map(item => ({
						time: new Date(item[0])
							.toLocaleString('en-US', {
								hour: 'numeric',
								hour12: true,
							})
							.replace(':00 ', '')
							.toLowerCase(),
						price: parseFloat(item[4]),
						volume: parseFloat(item[5]),
						date: new Date(item[0]).toLocaleDateString(),
					}))
				} catch {
					return []
				}
			})
		)
			.then(results => {
				if (isMounted) {
					setAllChartData(results)
					setChartLoading(false)
					if (results.every(arr => arr.length === 0)) {
						// Fallback данные для демонстрации
						const fallbackResults = PERIODS.map(period => {
							const length = period.limit > 100 ? 30 : period.limit
							return Array.from({ length }, (_, i) => ({
								time: `${i.toString().padStart(2, '0')}:00`,
								price: 2423.45 + Math.random() * 100 - 50,
								volume: 1000 + Math.random() * 500,
								date: new Date().toLocaleDateString('ru-RU'),
							}))
						})
						setAllChartData(fallbackResults)
						setChartError(null)
					}
				}
			})
			.catch(error => {
				console.error('Error loading PAXG chart data:', error)
				if (isMounted) {
					// Fallback данные для демонстрации
					const fallbackResults = PERIODS.map(period => {
						const length = period.limit > 100 ? 30 : period.limit
						return Array.from({ length }, (_, i) => ({
							time: `${i.toString().padStart(2, '0')}:00`,
							price: 2423.45 + Math.random() * 100 - 50,
							volume: 1000 + Math.random() * 500,
							date: new Date().toLocaleDateString('ru-RU'),
						}))
					})
					setAllChartData(fallbackResults)
					setChartLoading(false)
					setChartError(null)
				}
			})
		return () => {
			isMounted = false
		}
	}, [])

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
					<ResponsiveContainer width='100%' height='100%' minHeight={300}>
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
								dataKey={PERIODS[periodIdx]?.label === '1D' ? 'time' : 'date'}
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
				<SmallPaxg />
			</div>
		</section>
	)
}

export default PaxgChart
