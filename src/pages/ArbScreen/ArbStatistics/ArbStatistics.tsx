import React, { useMemo, useState } from 'react'
import styles from './ArbStatistics.module.scss'
import Tabs, { type TabItem } from '../../../components/Tabs/Tabs'
import ArbOrdersTable, { type ArbOrderRow } from './ArbOrdersTable'

const ArbStatistics: React.FC = () => {
	const cryptoTabs: TabItem[] = [
		{ id: 'xaut', label: 'Tether Gold (Xaut)', shortLabel: 'Xaut' },
		{ id: 'paxg', label: 'Pax Gold (PaxG)', shortLabel: 'PaxG' },
	]
	const [activeCrypto, setActiveCrypto] = useState('xaut')

	const companyStats = useMemo(
		() => ({
			volume: activeCrypto === 'xaut' ? '100.00000000' : '75.00000000',
			deals: '1,677',
			profit: activeCrypto === 'xaut' ? '27.00000000' : '14.00000000',
		}),
		[activeCrypto]
	)

	const exchanges = useMemo(
		() => [
			'Bybit',
			'HTX',
			'Icrypex',
			'Latoken',
			'Gate',
			'KuCoin',
			'KoinBX',
			'DigiFinex',
			'Bvov',
			'Ourbit',
			'BitStorage',
			'Bitrue',
			'Indodax',
			'PointPay',
			'Mexc',
			'CoinW',
		],
		[]
	)

	const pairTitle =
		activeCrypto === 'xaut' ? 'Price Xaut/USDT' : 'Price PaxG/USDT'

	const orderRows: ArbOrderRow[] = useMemo(
		() =>
			Array.from({ length: 50 }).map((_, i) => ({
				id: String(i + 1),
				time: '28/22:52',
				volume: '1.00005638',
				priceBuy: 'Binance/3,387.16',
				priceSell: 'Bybit/3,390.16',
				spread: '0.00000618',
				allFees: '1.25%',
			})),
		[]
	)

	return (
		<div className={styles.container}>
			<div className={styles.tabsWrapper}>
				<div className={styles.cryptoSection}>
					<h3 className={styles.sectionTitle}>Выбор криптовалюты</h3>
					<Tabs
						tabs={cryptoTabs}
						activeTab={activeCrypto}
						onTabChange={setActiveCrypto}
						className={styles.cryptoTabs}
					/>
				</div>
			</div>

			<div className={styles.statsBlocks}>
				{/* Левая колонка — Компания */}
				<div className={styles.companyAssets}>
					<div className={styles.assetsWrapper}>
						<div className={styles.listHeader}>
							<span className={styles.assetTitle}>Компания</span>
							<span className={styles.assetTitle}>Xau</span>
						</div>
						<div className={styles.gradientLine}></div>
						<div className={styles.assetsGrid}>
							<div className={styles.assetItem}>
								<span className={styles.assetTitle}>
									Объем {activeCrypto === 'xaut' ? 'Xaut' : 'PaxG'}
								</span>
								<span className={styles.assetValue}>{companyStats.volume}</span>
							</div>
							<div className={styles.assetItem}>
								<span className={styles.assetTitle}>Количество сделок</span>
								<span className={styles.assetValue}>{companyStats.deals}</span>
							</div>
							<div className={styles.assetItem}>
								<span className={styles.assetTitle}>Общий доход</span>
								<span className={styles.assetValue}>{companyStats.profit}</span>
							</div>
						</div>
					</div>

					<div className={styles.assetsWrapper} style={{ marginTop: 12 }}>
						<div className={styles.listHeader}>
							<span className={styles.assetTitle}>Биржа</span>
							<span className={styles.assetTitle}>{pairTitle}</span>
						</div>
						<div className={styles.gradientLine}></div>
						<div className={styles.assetsGrid}>
							{exchanges.map(name => (
								<div key={name} className={styles.assetItem}>
									<span className={styles.assetTitle}>{name}</span>
									<span className={styles.assetValue}>
										{activeCrypto === 'xaut' ? '3,337' : '2,215'}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Правая колонка — История ордеров Xau ARB */}
				<div className={styles.orderHistory}>
					<h3 className={styles.blockTitle}>История ордеров Xau ARB</h3>
					<div className={styles.gradientLine}></div>
					<ArbOrdersTable
						data={orderRows}
						tokenLabel={activeCrypto === 'xaut' ? 'Xaut' : 'PaxG'}
					/>
				</div>
			</div>
		</div>
	)
}

export default ArbStatistics
