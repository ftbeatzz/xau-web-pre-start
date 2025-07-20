import React, { useState } from 'react'
import styles from './CommerceStatistics.module.scss'
import Tabs from '../../../components/Tabs/Tabs'
import OrdersHistoryXau from '../../../components/OrdersHistoryXau'
import type { OrderHistoryData } from '../../../components/OrdersHistoryXau'
import XautIcon from '../../../icons/XautIcon'
import PaxgIcon from '../../../icons/PaxgIcon'
import UsdtIcon from '../../../icons/UsdtIcon'

// Данные для блоков статистики
const getCompanyAssetsData = (activeCrypto: string) => [
	{
		id: '1',
		title: 'Объем',
		value: '276.56930165',
		currency: activeCrypto === 'xaut' ? 'Xaut' : 'PaxG',
	},
	{
		id: '2',
		title: 'Эквивалент',
		value: '929,832.47',
		currency: 'USDT',
	},
	{
		id: '3',
		title: 'Количество Swap',
		value: '3,657',
		currency: '',
	},
]

const getEarningsData = (activeCrypto: string) => [
	{
		id: '1',
		title: `Заработано за весь период ${
			activeCrypto === 'xaut' ? 'Xaut' : 'PaxG'
		}`,
		value: '73.95691074',
		currency: '₮',
	},
	{
		id: '2',
		title: 'Эквивалент USDT',
		value: '248,602.415',
		currency: '₮',
	},
]

// Данные для истории ордеров
const orderHistoryData: OrderHistoryData[] = [
	{
		id: '1',
		time: '2025-05-28 22:45:02',
		volumeXaut: '20.56739357',
		swap: 'Xaut/PaxG',
		volumePaxg: '20.11111111',
		salePaxg: '67,603.45 USDT',
		purchaseXaut: '20.62979797',
		profitUsdt: '209.479227',
	},
	{
		id: '2',
		time: '2025-05-28 22:45:18',
		volumeXaut: '20.56739357',
		swap: 'Xaut/PaxG',
		volumePaxg: '20.11111111',
		salePaxg: '67,603.45 USDT',
		purchaseXaut: '20.62979797',
		profitUsdt: '209.479227',
	},
	{
		id: '3',
		time: '2025-05-28 22:46:09',
		volumeXaut: '20.56739357',
		swap: 'Xaut/PaxG',
		volumePaxg: '20.11111111',
		salePaxg: '67,603.45 USDT',
		purchaseXaut: '20.62979797',
		profitUsdt: '209.479227',
	},
	{
		id: '4',
		time: '2025-05-28 22:47:02',
		volumeXaut: '20.56739357',
		swap: 'Xaut/PaxG',
		volumePaxg: '20.11111111',
		salePaxg: '67,603.45 USDT',
		purchaseXaut: '20.62979797',
		profitUsdt: '209.479227',
	},
	{
		id: '5',
		time: '2025-05-28 22:47:45',
		volumeXaut: '20.56739357',
		swap: 'Xaut/PaxG',
		volumePaxg: '20.11111111',
		salePaxg: '67,603.45 USDT',
		purchaseXaut: '20.62979797',
		profitUsdt: '209.479227',
	},
	{
		id: '6',
		time: '2025-05-28 22:48:42',
		volumeXaut: '20.56739357',
		swap: 'Xaut/PaxG',
		volumePaxg: '20.11111111',
		salePaxg: '67,603.45 USDT',
		purchaseXaut: '20.62979797',
		profitUsdt: '209.479227',
	},
	{
		id: '7',
		time: '2025-05-28 22:49:30',
		volumeXaut: '20.56739357',
		swap: 'Xaut/PaxG',
		volumePaxg: '20.11111111',
		salePaxg: '67,603.45 USDT',
		purchaseXaut: '20.62979797',
		profitUsdt: '209.479227',
	},
	{
		id: '8',
		time: '2025-05-28 22:49:30',
		volumeXaut: '20.56739357',
		swap: 'Xaut/PaxG',
		volumePaxg: '20.11111111',
		salePaxg: '67,603.45 USDT',
		purchaseXaut: '20.62979797',
		profitUsdt: '209.479227',
	},
	{
		id: '9',
		time: '2025-05-28 22:49:30',
		volumeXaut: '20.56739357',
		swap: 'Xaut/PaxG',
		volumePaxg: '20.11111111',
		salePaxg: '67,603.45 USDT',
		purchaseXaut: '20.62979797',
		profitUsdt: '209.479227',
	},
	{
		id: '10',
		time: '2025-05-28 22:49:30',
		volumeXaut: '20.56739357',
		swap: 'Xaut/PaxG',
		volumePaxg: '20.11111111',
		salePaxg: '67,603.45 USDT',
		purchaseXaut: '20.62979797',
		profitUsdt: '209.479227',
	},
]

// Данные для табов криптовалют
const cryptoCurrencyTabs = [
	{ id: 'xaut', label: 'Tether Gold (Xaut)' },
	{ id: 'paxg', label: 'Pax Gold (PaxG)' },
]

// Данные для DEX бирж
const dexExchanges = [
	{ id: 'uniswap', label: 'Uniswap' },
	{ id: 'curve', label: 'Curve' },
	{ id: 'balancer', label: 'Balancer' },
]

// Данные для CEX бирж
const cexExchanges = [
	{ id: 'toobit', label: 'Toobit' },
	{ id: 'bybit', label: 'Bybit' },
	{ id: 'bitrue', label: 'Bitrue' },
	{ id: 'mexc', label: 'Mexc' },
	{ id: 'whitebit', label: 'WhiteBIT' },
	{ id: 'ourbit', label: 'Ourbit' },
	{ id: 'okx', label: 'OKX' },
]

const CommerceStatistics: React.FC = () => {
	const [activeCrypto, setActiveCrypto] = useState('xaut')
	const [activeDexExchange, setActiveDexExchange] = useState('uniswap')
	const [activeCexExchange, setActiveCexExchange] = useState('toobit')

	return (
		<div className={styles.container}>
			{/* Верхний таб с криптовалютами */}
			<div className={styles.tabsWrapper}>
				<div className={styles.cryptoSection}>
					<h3 className={styles.sectionTitle}>Выбор криптовалюты</h3>
					<Tabs
						tabs={cryptoCurrencyTabs}
						activeTab={activeCrypto}
						onTabChange={setActiveCrypto}
						className={styles.cryptoTabs}
					/>
				</div>

				{/* Секции выбора бирж */}
				<div className={styles.exchangeSections}>
					{/* DEX секция */}
					<div className={styles.exchangeSection}>
						<h3 className={styles.sectionTitle}>
							Децентрализованная биржа (DEX)
						</h3>
						<Tabs
							tabs={dexExchanges}
							activeTab={activeDexExchange}
							onTabChange={setActiveDexExchange}
							className={styles.exchangeTabs}
						/>
					</div>

					{/* CEX секция */}
					<div className={styles.exchangeSection}>
						<h3 className={styles.sectionTitle}>
							Централизованная биржа (CEX)
						</h3>
						<Tabs
							tabs={cexExchanges}
							activeTab={activeCexExchange}
							onTabChange={setActiveCexExchange}
							className={styles.exchangeTabs}
						/>
					</div>
				</div>
			</div>

			{/* Real time order секция */}
			<div className={styles.realTimeOrder}>
				<div className={styles.realTimeHeader}>
					<h3 className={styles.realTimeTitle}>Real time order</h3>
					<div className={styles.profitSummary}>
						<span>
							Profit: 0.0623 {activeCrypto === 'xaut' ? 'Xau' : 'PaxG'} -
							209.479227 USDT
						</span>
					</div>
				</div>

				<div className={styles.orderColumns}>
					{/* Левая колонка - Uniswap */}
					<div className={styles.orderColumn}>
						<div className={styles.columnHeader}>
							<span className={styles.exchangeLabel}>Биржа</span>
							<span className={styles.exchangeName}>Uniswap</span>
						</div>
						<div className={styles.gradientLine}></div>
						<div className={styles.orderDetails}>
							<div className={styles.orderRow}>
								<span className={styles.orderLabel}>Пара:</span>
								<span className={styles.orderValue}>Xaut/PaxG</span>
							</div>
							<div className={styles.orderRow}>
								<span className={styles.orderLabel}>Объем Xaut:</span>
								<span className={styles.orderValue}>20.00000000</span>
							</div>
							<div className={styles.orderRow}>
								<span className={styles.orderLabel}>Комиссия Swap:</span>
								<span className={styles.orderValue}>2.2 USDT</span>
							</div>
							<div className={styles.orderRow}>
								<span className={styles.orderLabel}>Объем PaxG:</span>
								<span className={styles.orderValue}>19.98888888</span>
							</div>
							<div className={styles.orderRow}>
								<span className={styles.orderLabel}>Обновление:</span>
								<span className={styles.orderValue}>30 секунд</span>
							</div>
						</div>
					</div>

					{/* Средняя колонка - Toobit Sell */}
					<div className={styles.orderColumn}>
						<div className={styles.columnHeader}>
							<span className={styles.exchangeLabel}>Биржа</span>
							<span className={styles.exchangeName}>Toobit</span>
						</div>
						<div className={styles.gradientLine}></div>

						<div className={styles.orderDetails}>
							<div className={styles.orderRow}>
								<span className={styles.orderLabel}>Пара:</span>
								<span className={styles.orderValue}>PaxG/USDT</span>
							</div>
							<div className={styles.orderRow}>
								<span className={styles.orderLabel}>Market Sell Price:</span>
								<span className={styles.orderValue}>3,362.49 USDT</span>
							</div>
							<div className={styles.orderRow}>
								<span className={styles.orderLabel}>Pool volume:</span>
								<span className={styles.orderValue}>19.98888888 PaxG</span>
							</div>
							<div className={styles.orderRow}>
								<span className={styles.orderLabel}>Комиссия обмена:</span>
								<span className={styles.orderValue}>6.725159 USDT</span>
							</div>
							<div className={styles.orderRow}>
								<span className={styles.orderLabel}>Sum:</span>
								<span className={styles.orderValue}>67,244.864841 USDT</span>
							</div>
						</div>
					</div>

					{/* Правая колонка - Toobit Buy */}
					<div className={styles.orderColumn}>
						<div className={styles.columnHeader}>
							<span className={styles.exchangeLabel}>Биржа</span>
							<span className={styles.exchangeName}>Toobit</span>
						</div>
						<div className={styles.gradientLine}></div>
						<div className={styles.orderDetails}>
							<div className={styles.orderRow}>
								<span className={styles.orderLabel}>Пара:</span>
								<span className={styles.orderValue}>USDT/Xaut</span>
							</div>
							<div className={styles.orderRow}>
								<span className={styles.orderLabel}>Market Buy Price:</span>
								<span className={styles.orderValue}>3,350.49 USDT</span>
							</div>
							<div className={styles.orderRow}>
								<span className={styles.orderLabel}>Pool volume:</span>
								<span className={styles.orderValue}>67,244.864841 USDT</span>
							</div>
							<div className={styles.orderRow}>
								<span className={styles.orderLabel}>Комиссия:</span>
								<span className={styles.orderValue}>6.72448648 USDT</span>
							</div>
							<div className={styles.orderRow}>
								<span className={styles.orderLabel}>Sum:</span>
								<span className={styles.orderValue}>20.0623 Xaut</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Блоки статистики */}
			<div className={styles.statsBlocks}>
				{/* Актив компании Xaut */}
				<div className={styles.companyAssets}>
					<div>
						<h3 className={styles.blockTitle}>
							Актив компании {activeCrypto === 'xaut' ? 'Xau' : 'PaxG'}
						</h3>
					</div>
					<div className={styles.assetsWrapper}>
						<div className={styles.assetsGrid}>
							{getCompanyAssetsData(activeCrypto).map(item => (
								<div key={item.id} className={styles.assetItem}>
									<span className={styles.assetTitle}>{item.title}</span>
									<span className={styles.assetValue}>
										{item.value} {item.currency}
									</span>
								</div>
							))}
						</div>

						<div className={styles.earningsSection}>
							{getEarningsData(activeCrypto).map((item, index) => (
								<div key={item.id} className={styles.earningItem}>
									<span className={styles.earningTitle}>{item.title}</span>
									<div className={styles.earningValueWrapper}>
										<span className={styles.earningValue}>{item.value}</span>
										<div className={styles.earningIcon}>
											{index === 0 ? (
												activeCrypto === 'xaut' ? (
													<XautIcon />
												) : (
													<PaxgIcon />
												)
											) : (
												<UsdtIcon />
											)}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* История ордеров */}
				<div className={styles.orderHistory}>
					<div className={styles.historyTitle}>
						<h3 className={styles.blockTitle}>
							История ордеров {activeCrypto === 'xaut' ? 'Xau' : 'PaxG'}
						</h3>
						<div className={styles.gradientLine}></div>
					</div>
					<OrdersHistoryXau data={orderHistoryData} />
				</div>
			</div>
		</div>
	)
}

export default CommerceStatistics
