import React, { useMemo, useState } from 'react'
import styles from '../../CommerceScreen/CommerceLoan/CommerceLoan.module.scss'
import Tabs from '../../../components/Tabs/Tabs'
import ArbLoanTable, { type ArbLoanRow } from './ArbLoanTable'

const cryptoCurrencyTabs = [
	{ id: 'xaut', label: 'Tether Gold (Xaut)', shortLabel: 'Xaut' },
	{ id: 'paxg', label: 'Pax Gold (PaxG)', shortLabel: 'PaxG' },
]

const ArbLoan: React.FC = () => {
	const [activeCrypto, setActiveCrypto] = useState('xaut')
	const tokenLabel = activeCrypto === 'xaut' ? 'Xaut' : 'PaxG'

	const rows: ArbLoanRow[] = useMemo(
		() =>
			Array.from({ length: 40 }).map((_, i) => ({
				id: String(i + 1),
				time: '2025-05-28 22:52',
				nickname: 'Ale...hka',
				exchangeBuy: 'Binance',
				volumePriceBuy: '1.00005638/3,387.16',
				spreadToken: '0.00056257',
				profitToken: '0.00274618',
				volumePriceSell: '1.00005638/3,387.16',
				exchangeSell: 'Bybit',
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
						tabs={cryptoCurrencyTabs}
						activeTab={activeCrypto}
						onTabChange={setActiveCrypto}
						className={styles.cryptoTabs}
					/>
				</div>
			</div>

			<div className={styles.loanHistorySection}>
				<div>
					<h3 className={styles.loanHistoryTitle}>История займов XAU ARB</h3>
					<div className={styles.gradientLine}></div>
				</div>
				<div className={styles.loanHistoryWrapper}>
					<ArbLoanTable data={rows} tokenLabel={tokenLabel} />
				</div>
			</div>
		</div>
	)
}

export default ArbLoan
