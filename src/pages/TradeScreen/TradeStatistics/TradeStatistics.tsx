import React, { useState } from 'react'
import styles from './TradeStatistics.module.scss'
import Tabs from '../../../components/Tabs/Tabs'
import TradeOrdersHistory from '../../../components/TradeOrdersHistory'
import type { TradeOrderData } from '../../../components/TradeOrdersHistory'
import XautIcon from '../../../icons/XautIcon'
import PaxgIcon from '../../../icons/PaxgIcon'

// Данные для истории торговых ордеров
const tradeOrdersData: TradeOrderData[] = [
	{
		id: '1',
		leftTime: '2025-05-28 22:45:02',
		leftPair: 'XAUT/ETH',
		leftVolume: '1.00000000',
		sellPrice: '2,585.15 ETH',
		pnl: '+5.01',
		buyPrice: '2,590.15 ETH',
		rightVolume: '1.00285681',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 22:47:02',
	},
	{
		id: '2',
		leftTime: '2025-05-28 22:45:18',
		leftPair: 'XAUT/ETH',
		leftVolume: '1.00000000',
		sellPrice: '2,503.18 ETH',
		pnl: '+9.98',
		buyPrice: '2,513.12 ETH',
		rightVolume: '1.00385681',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 22:47:18',
	},
	{
		id: '3',
		leftTime: '2025-05-28 22:46:09',
		leftPair: 'XAUT/ETH',
		leftVolume: '0.75003001',
		sellPrice: '2,513.21 ETH',
		pnl: '+1.11',
		buyPrice: '2,512.11 ETH',
		rightVolume: '0.76145828',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 22:48:09',
	},
	{
		id: '4',
		leftTime: '2025-05-28 22:47:02',
		leftPair: 'XAUT/ETH',
		leftVolume: '0.75041781',
		sellPrice: '2,523.78 ETH',
		pnl: '+1.23',
		buyPrice: '2,522.57 ETH',
		rightVolume: '0.76491054',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 22:49:02',
	},
	{
		id: '5',
		leftTime: '2025-05-28 22:47:45',
		leftPair: 'XAUT/ETH',
		leftVolume: '0.54570931',
		sellPrice: '2,529.57 ETH',
		pnl: '-6.58',
		buyPrice: '2,536.02 ETH',
		rightVolume: '0.53785125',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 22:49:45',
	},
	{
		id: '6',
		leftTime: '2025-05-28 22:47:45',
		leftPair: 'XAUT/ETH',
		leftVolume: '0.02419473',
		sellPrice: '2,542.94 ETH',
		pnl: '+7.96',
		buyPrice: '2,550.24 ETH',
		rightVolume: '0.02658104',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 22:49:45',
	},
	{
		id: '7',
		leftTime: '2025-05-28 22:48:42',
		leftPair: 'XAUT/ETH',
		leftVolume: '1.25462801',
		sellPrice: '2,505.01 ETH',
		pnl: '+5.00',
		buyPrice: '2,500.29 ETH',
		rightVolume: '1.26498151',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 22:50:42',
	},
	{
		id: '8',
		leftTime: '2025-05-28 22:49:30',
		leftPair: 'XAUT/ETH',
		leftVolume: '1.25408302',
		sellPrice: '2,567.91 ETH',
		pnl: '+7.96',
		buyPrice: '2,560.01 ETH',
		rightVolume: '1.26590901',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 22:51:30',
	},
	{
		id: '9',
		leftTime: '2025-05-28 22:50:13',
		leftPair: 'XAUT/ETH',
		leftVolume: '0.645468201',
		sellPrice: '2,580.63 ETH',
		pnl: '-10.00',
		buyPrice: '2,590.38 ETH',
		rightVolume: '0.62047194',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 22:52:13',
	},
	{
		id: '10',
		leftTime: '2025-05-28 22:51:05',
		leftPair: 'XAUT/ETH',
		leftVolume: '0.94673892',
		sellPrice: '2,578.19 ETH',
		pnl: '-14.00',
		buyPrice: '2,592.31 ETH',
		rightVolume: '0.92475015',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 22:53:05',
	},
	{
		id: '11',
		leftTime: '2025-05-28 22:52:19',
		leftPair: 'XAUT/ETH',
		leftVolume: '0.85567305',
		sellPrice: '2,539.29 ETH',
		pnl: '+11.00',
		buyPrice: '2,550.29 ETH',
		rightVolume: '0.87459181',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 22:54:19',
	},
	{
		id: '12',
		leftTime: '2025-05-28 22:53:15',
		leftPair: 'XAUT/ETH',
		leftVolume: '2.12345678',
		sellPrice: '2,555.33 ETH',
		pnl: '+15.67',
		buyPrice: '2,570.00 ETH',
		rightVolume: '2.14567890',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 22:55:15',
	},
	{
		id: '13',
		leftTime: '2025-05-28 22:54:22',
		leftPair: 'XAUT/ETH',
		leftVolume: '0.87654321',
		sellPrice: '2,548.77 ETH',
		pnl: '-8.92',
		buyPrice: '2,557.69 ETH',
		rightVolume: '0.85432109',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 22:56:22',
	},
	{
		id: '14',
		leftTime: '2025-05-28 22:55:08',
		leftPair: 'XAUT/ETH',
		leftVolume: '1.98765432',
		sellPrice: '2,562.44 ETH',
		pnl: '+12.34',
		buyPrice: '2,574.78 ETH',
		rightVolume: '2.01234567',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 22:57:08',
	},
	{
		id: '15',
		leftTime: '2025-05-28 22:56:33',
		leftPair: 'XAUT/ETH',
		leftVolume: '0.54321098',
		sellPrice: '2,551.11 ETH',
		pnl: '+3.45',
		buyPrice: '2,554.56 ETH',
		rightVolume: '0.55678901',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 22:58:33',
	},
	{
		id: '16',
		leftTime: '2025-05-28 22:57:19',
		leftPair: 'XAUT/ETH',
		leftVolume: '1.23456789',
		sellPrice: '2,566.88 ETH',
		pnl: '-5.67',
		buyPrice: '2,572.55 ETH',
		rightVolume: '1.21098765',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 22:59:19',
	},
	{
		id: '17',
		leftTime: '2025-05-28 22:58:45',
		leftPair: 'XAUT/ETH',
		leftVolume: '0.76543210',
		sellPrice: '2,559.22 ETH',
		pnl: '+8.90',
		buyPrice: '2,568.12 ETH',
		rightVolume: '0.78901234',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 23:00:45',
	},
	{
		id: '18',
		leftTime: '2025-05-28 22:59:12',
		leftPair: 'XAUT/ETH',
		leftVolume: '1.45678901',
		sellPrice: '2,573.66 ETH',
		pnl: '-11.23',
		buyPrice: '2,584.89 ETH',
		rightVolume: '1.43210987',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 23:01:12',
	},
	{
		id: '19',
		leftTime: '2025-05-28 23:00:28',
		leftPair: 'XAUT/ETH',
		leftVolume: '0.98765432',
		sellPrice: '2,560.99 ETH',
		pnl: '+6.78',
		buyPrice: '2,567.77 ETH',
		rightVolume: '1.00123456',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 23:02:28',
	},
	{
		id: '20',
		leftTime: '2025-05-28 23:01:55',
		leftPair: 'XAUT/ETH',
		leftVolume: '2.34567890',
		sellPrice: '2,575.33 ETH',
		pnl: '+18.90',
		buyPrice: '2,594.23 ETH',
		rightVolume: '2.37890123',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 23:03:55',
	},
	{
		id: '21',
		leftTime: '2025-05-28 23:02:41',
		leftPair: 'XAUT/ETH',
		leftVolume: '0.65432109',
		sellPrice: '2,552.44 ETH',
		pnl: '-4.56',
		buyPrice: '2,557.00 ETH',
		rightVolume: '0.63210987',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 23:04:41',
	},
	{
		id: '22',
		leftTime: '2025-05-28 23:03:17',
		leftPair: 'XAUT/ETH',
		leftVolume: '1.78901234',
		sellPrice: '2,568.77 ETH',
		pnl: '+9.12',
		buyPrice: '2,577.89 ETH',
		rightVolume: '1.81234567',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 23:05:17',
	},
	{
		id: '23',
		leftTime: '2025-05-28 23:04:33',
		leftPair: 'XAUT/ETH',
		leftVolume: '0.43210987',
		sellPrice: '2,553.88 ETH',
		pnl: '+2.34',
		buyPrice: '2,556.22 ETH',
		rightVolume: '0.44567890',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 23:06:33',
	},
	{
		id: '24',
		leftTime: '2025-05-28 23:05:49',
		leftPair: 'XAUT/ETH',
		leftVolume: '1.12345678',
		sellPrice: '2,571.55 ETH',
		pnl: '-7.89',
		buyPrice: '2,579.44 ETH',
		rightVolume: '1.09876543',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 23:07:49',
	},
	{
		id: '25',
		leftTime: '2025-05-28 23:06:22',
		leftPair: 'XAUT/ETH',
		leftVolume: '0.87654321',
		sellPrice: '2,564.11 ETH',
		pnl: '+13.45',
		buyPrice: '2,577.56 ETH',
		rightVolume: '0.90123456',
		rightPair: 'ETH/Xaut',
		rightTime: '2025-05-28 23:08:22',
	},
]

// Данные для табов криптовалют
const cryptoCurrencyTabs = [
	{ id: 'xaut', label: 'Tether Gold (Xaut)' },
	{ id: 'paxg', label: 'Pax Gold (PaxG)' },
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
	{ id: 'gate', label: 'Gate' },
]

const TradeStatistics: React.FC = () => {
	const [activeCrypto, setActiveCrypto] = useState('xaut')
	const [activeCexExchange, setActiveCexExchange] = useState('toobit')

	return (
		<div className={styles.container}>
			{/* Верхний таб с криптовалютами */}
			<div className={styles.tabsWrapper}>
				<div className={styles.cryptoSection}>
					<Tabs
						tabs={cryptoCurrencyTabs}
						activeTab={activeCrypto}
						onTabChange={setActiveCrypto}
						className={styles.cryptoTabs}
					/>
				</div>

				{/* Секции выбора бирж */}
				<div className={styles.exchangeSections}>
					{/* CEX секция */}
					<div className={styles.exchangeSection}>
						<Tabs
							tabs={cexExchanges}
							activeTab={activeCexExchange}
							onTabChange={setActiveCexExchange}
							className={styles.exchangeTabs}
						/>
					</div>
				</div>

				{/* Real time order секция */}
				<div className={styles.realTimeOrder}>
					<div className={`${styles.orderBlock} ${styles.bigOne}`}>
						<div className={styles.blockHeader}>
							<div className={styles.blockHeaderTitle}>
								<h3 className={styles.blockTitle}>Биржа</h3>
								<h3 className={styles.blockTitle}>
									{cexExchanges.find(
										exchange => exchange.id === activeCexExchange
									)?.label || 'Toobit'}
								</h3>
							</div>
							<div className={styles.gradientLine}></div>
						</div>
						<div className={styles.blockContent}>
							<div className={styles.dataRow}>
								<span className={styles.dataLabel}>
									Объем {activeCrypto === 'xaut' ? 'Xaut:' : 'Paxg:'}
								</span>
								<div className={styles.dataValue}>
									<span>121.45682912</span>
									{activeCrypto === 'xaut' ? <XautIcon /> : <PaxgIcon />}
								</div>
							</div>
							<div className={styles.dataRow}>
								<span className={styles.dataLabel}>
									Эффективность торговли:
								</span>
								<span className={styles.dataValue}>10,537</span>
							</div>
							<div className={styles.dataRow}>
								<span className={styles.dataLabel}>Прибыльные сделки:</span>
								<span className={styles.dataValue}>9,537</span>
							</div>
							<div className={styles.dataRow}>
								<span className={styles.dataLabel}>Убыточные сделки:</span>
								<span className={styles.dataValue}>1,000</span>
							</div>
							<div className={styles.dataRow}>
								<span className={styles.dataLabel}>Финансовый результат:</span>
								<div className={styles.dataValue}>
									<span>31.46917468</span>
									{activeCrypto === 'xaut' ? <XautIcon /> : <PaxgIcon />}
								</div>
							</div>
						</div>
					</div>
					<div className={styles.orderBlocks}>
						{/* Блок 1: Биржа */}

						{/* Блок 2: Открытые сделки */}
						<div className={styles.orderBlock}>
							<div className={styles.blockHeader}>
								<h3 className={styles.blockTitle}>Открытые сделки</h3>
								<div className={styles.gradientLine}></div>
							</div>
							<div className={styles.dealsBlockContent}>
								<div className={styles.dataRow}>
									<span className={styles.dataLabel}>Количество:</span>
									<span className={styles.dataValue}>534</span>
								</div>
								<div className={styles.volumeSection}>
									<span className={styles.volumeLabel}>
										Задействованый объем{' '}
										{activeCrypto === 'xaut' ? 'Xaut:' : 'Paxg:'}
									</span>
									<div className={styles.volumeValue}>
										<span className={styles.highlightedValue}>63.00001246</span>
									</div>
								</div>
								<div className={styles.dataRow}>
									<span className={styles.dataLabel}>Эффективность:</span>
									<span className={styles.dataValue}>454</span>
								</div>
							</div>
						</div>

						{/* Блок 3: Закрытые сделки */}
						<div className={styles.orderBlock}>
							<div className={styles.blockHeader}>
								<h3 className={styles.blockTitle}>Закрытые сделки</h3>
								<div className={styles.gradientLine}></div>
							</div>
							<div className={styles.dealsBlockContent}>
								<div className={styles.dataRow}>
									<span className={styles.dataLabel}>Количество:</span>
									<span className={styles.dataValue}>9,800</span>
								</div>
								<div className={styles.volumeSection}>
									<span className={styles.volumeLabel}>
										Задействованый объем{' '}
										{activeCrypto === 'xaut' ? 'Xaut:' : 'Paxg:'}
									</span>
									<div className={styles.volumeValue}>
										<span className={styles.highlightedValue}>
											456.00001246
										</span>
									</div>
								</div>
								<div className={styles.dataRow}>
									<span className={styles.dataLabel}>Эффективность:</span>
									<span className={styles.dataValue}>9,001</span>
								</div>
							</div>
						</div>

						{/* Блок 4: Отмененные сделки */}
						<div className={styles.orderBlock}>
							<div className={styles.blockHeader}>
								<h3 className={styles.blockTitle}>Отмененные сделки</h3>
								<div className={styles.gradientLine}></div>
							</div>
							<div className={styles.dealsBlockContent}>
								<div className={styles.dataRow}>
									<span className={styles.dataLabel}>Количество:</span>
									<span className={styles.dataValue}>200</span>
								</div>
								<div className={styles.volumeSection}>
									<span className={styles.volumeLabel}>
										Задействованый объем{' '}
										{activeCrypto === 'xaut' ? 'Xaut:' : 'Paxg:'}
									</span>
									<div className={styles.volumeValue}>
										<span className={styles.highlightedValue}>14.00001246</span>
									</div>
								</div>
								<div className={styles.dataRow}>
									<span className={styles.dataLabel}>Эффективность:</span>
									<span className={styles.dataValue}>0</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Блоки статистики */}
			<div className={styles.statsBlocks}>
				{/* История торговых ордеров */}
				<div className={styles.orderHistory}>
					<div className={styles.historyTitle}>
						<h3 className={styles.blockTitle}>
							История торговых ордеров{' '}
							{activeCrypto === 'xaut' ? 'Xau' : 'PaxG'}
						</h3>
						<div className={styles.gradientLine}></div>
					</div>
					<TradeOrdersHistory data={tradeOrdersData} />
				</div>
			</div>
		</div>
	)
}

export default TradeStatistics
