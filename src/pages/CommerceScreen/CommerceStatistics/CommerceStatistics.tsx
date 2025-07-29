import React, { useState, useEffect } from 'react'
import styles from './CommerceStatistics.module.scss'
import Tabs from '../../../components/Tabs/Tabs'
import OrdersHistoryXau from '../../../components/OrdersHistoryXau'
import type { OrderHistoryData } from '../../../components/OrdersHistoryXau'
import XautIcon from '../../../icons/XautIcon'
import PaxgIcon from '../../../icons/PaxgIcon'
import UsdtIcon from '../../../icons/UsdtIcon'
import DropDownArrow from '../../../icons/DropDownArrow'

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
	{ id: 'xaut', label: 'Tether Gold (Xaut)', shortLabel: 'Xaut' },
	{ id: 'paxg', label: 'Pax Gold (PaxG)', shortLabel: 'PaxG' },
]

// Данные для DEX бирж
const dexExchanges = [
	{ id: 'uniswap', label: 'Uniswap' },
	{ id: 'curve', label: 'Curve' },
	{ id: 'balancer', label: 'Balancer' },
]

// Данные для CEX бирж для Xaut (Commerce)
const cexExchangesXaut = [
	{ id: 'icrypex', label: 'Icrypex' },
	{ id: 'ourbit', label: 'Ourbit' },
	{ id: 'bybit', label: 'Bybit' },
	{ id: 'htx', label: 'HTX' },
	{ id: 'gate', label: 'Gate' },
	{ id: 'mexc', label: 'MEXC' },
	{ id: 'bitrue', label: 'Bitrue' },
	{ id: 'coinw', label: 'CoinW' },
]

// Данные для CEX бирж для PaxG (Commerce)
const cexExchangesPaxg = [
	{ id: 'binance', label: 'Binance' },
	{ id: 'toobit', label: 'Toobit' },
	{ id: 'mexc', label: 'MEXC' },
	{ id: 'ourbit', label: 'Ourbit' },
	{ id: 'lbank', label: 'LBank' },
	{ id: 'gate', label: 'Gate' },
	{ id: 'coinw', label: 'CoinW' },
	{ id: 'bitrue', label: 'Bitrue' },
]

// Кастомный компонент для dexExchanges с переключением между табами и dropdown
const DexExchangeSelector: React.FC<{
	exchanges: Array<{ id: string; label: string }>
	activeExchange: string
	onExchangeChange: (exchangeId: string) => void
	className?: string
}> = ({ exchanges, activeExchange, onExchangeChange, className }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const [isMobile, setIsMobile] = useState(false)

	// Определяем, является ли экран мобильным
	useEffect(() => {
		const checkIsMobile = () => {
			setIsMobile(window.innerWidth < 1023)
		}

		checkIsMobile()
		window.addEventListener('resize', checkIsMobile)

		return () => window.removeEventListener('resize', checkIsMobile)
	}, [])

	const activeExchangeLabel =
		exchanges.find(ex => ex.id === activeExchange)?.label || 'Uniswap'

	if (isMobile) {
		return (
			<div className={`${styles.dropdownContainer} ${className || ''}`}>
				<button
					className={styles.dropdownButton}
					onClick={() => setIsDropdownOpen(!isDropdownOpen)}
				>
					<span>{activeExchangeLabel}</span>
					<div
						className={`${styles.dropdownArrow} ${
							isDropdownOpen ? styles.dropdownArrowUp : ''
						}`}
					>
						<DropDownArrow />
					</div>
				</button>
				{isDropdownOpen && (
					<div className={styles.dropdownMenu}>
						{exchanges.map(exchange => (
							<button
								key={exchange.id}
								className={`${styles.dropdownItem} ${
									activeExchange === exchange.id ? styles.active : ''
								}`}
								onClick={() => {
									onExchangeChange(exchange.id)
									setIsDropdownOpen(false)
								}}
							>
								{exchange.label}
							</button>
						))}
					</div>
				)}
			</div>
		)
	}

	// На десктопе показываем обычные табы
	return (
		<Tabs
			tabs={exchanges}
			activeTab={activeExchange}
			onTabChange={onExchangeChange}
		/>
	)
}

// Кастомный компонент для cexExchanges с переключением между табами и dropdown
const CexExchangeSelector: React.FC<{
	exchanges: Array<{ id: string; label: string }>
	activeExchange: string
	onExchangeChange: (exchangeId: string) => void
	className?: string
}> = ({ exchanges, activeExchange, onExchangeChange, className }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const [isMobile, setIsMobile] = useState(false)

	// Определяем, является ли экран мобильным
	useEffect(() => {
		const checkIsMobile = () => {
			setIsMobile(window.innerWidth < 1023)
		}

		checkIsMobile()
		window.addEventListener('resize', checkIsMobile)

		return () => window.removeEventListener('resize', checkIsMobile)
	}, [])

	const activeExchangeLabel =
		exchanges.find(ex => ex.id === activeExchange)?.label || 'Toobit'

	if (isMobile) {
		return (
			<div className={`${styles.dropdownContainer} ${className || ''}`}>
				<button
					className={styles.dropdownButton}
					onClick={() => setIsDropdownOpen(!isDropdownOpen)}
				>
					<span>{activeExchangeLabel}</span>
					<div
						className={`${styles.dropdownArrow} ${
							isDropdownOpen ? styles.dropdownArrowUp : ''
						}`}
					>
						<DropDownArrow />
					</div>
				</button>
				{isDropdownOpen && (
					<div className={styles.dropdownMenu}>
						{exchanges.map(exchange => (
							<button
								key={exchange.id}
								className={`${styles.dropdownItem} ${
									activeExchange === exchange.id ? styles.active : ''
								}`}
								onClick={() => {
									onExchangeChange(exchange.id)
									setIsDropdownOpen(false)
								}}
							>
								{exchange.label}
							</button>
						))}
					</div>
				)}
			</div>
		)
	}

	// На десктопе показываем обычные табы
	return (
		<Tabs
			tabs={exchanges}
			activeTab={activeExchange}
			onTabChange={onExchangeChange}
		/>
	)
}

const CommerceStatistics: React.FC = () => {
	const [activeCrypto, setActiveCrypto] = useState('xaut')
	const [activeDexExchange, setActiveDexExchange] = useState('uniswap')
	const [activeCexExchange, setActiveCexExchange] = useState('toobit')

	// Получаем список CEX бирж в зависимости от выбранной криптовалюты
	const getCurrentCexExchanges = () => {
		return activeCrypto === 'xaut' ? cexExchangesXaut : cexExchangesPaxg
	}

	// Обработчик смены криптовалюты
	const handleCryptoChange = (cryptoId: string) => {
		setActiveCrypto(cryptoId)
		// Сбрасываем активную CEX биржу на первую в списке для новой криптовалюты
		const newCexExchanges =
			cryptoId === 'xaut' ? cexExchangesXaut : cexExchangesPaxg
		if (newCexExchanges.length > 0 && newCexExchanges[0]) {
			setActiveCexExchange(newCexExchanges[0].id)
		}
	}

	const currentCexExchanges = getCurrentCexExchanges()

	// Инициализация активной CEX биржи при загрузке компонента
	useEffect(() => {
		const currentExchanges =
			activeCrypto === 'xaut' ? cexExchangesXaut : cexExchangesPaxg
		const firstExchange = currentExchanges[0]
		if (currentExchanges.length > 0 && firstExchange) {
			setActiveCexExchange(firstExchange.id)
		}
	}, [activeCrypto])

	return (
		<div className={styles.container}>
			{/* Верхний таб с криптовалютами */}
			<div className={styles.tabsWrapper}>
				<div className={styles.cryptoSection}>
					<h3 className={styles.sectionTitle}>Выбор криптовалюты</h3>
					<Tabs
						tabs={cryptoCurrencyTabs}
						activeTab={activeCrypto}
						onTabChange={handleCryptoChange}
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
						<DexExchangeSelector
							exchanges={dexExchanges}
							activeExchange={activeDexExchange}
							onExchangeChange={setActiveDexExchange}
						/>
					</div>

					{/* CEX секция */}
					<div className={styles.exchangeSection}>
						<h3 className={styles.sectionTitle}>
							Централизованная биржа (CEX)
						</h3>
						<CexExchangeSelector
							exchanges={currentCexExchanges}
							activeExchange={activeCexExchange}
							onExchangeChange={setActiveCexExchange}
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
