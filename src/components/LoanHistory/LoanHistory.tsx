import React from 'react'
import styles from './LoanHistory.module.scss'
import NoDataIcon from '../../icons/NoDataIcon'

export interface LoanHistoryData {
	id: string
	time: string
	nickname: string
	tradeDeal: string
	volume: string
	profit: string
	hold: string
	walletCredit: string
}

interface LoanHistoryProps {
	data?: LoanHistoryData[]
	isEmpty?: boolean
}

const LoanHistory: React.FC<LoanHistoryProps> = ({
	data = [],
	isEmpty = false,
}) => {
	if (isEmpty) {
		return (
			<div className={styles.emptyState}>
				<div className={styles.emptyIcon}>
					<NoDataIcon />
				</div>
				<div>
					<p className={styles.emptyText}>
						Данный аккаунт пока не имеет истории займов Xau Commerce
					</p>
					<div className={styles.gradientLine}></div>
				</div>
			</div>
		)
	}

	return (
		<div className={styles.tableContainer}>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Время (UTC)</th>
						<th>Никнейм</th>
						<th>Торговая сделка</th>
						<th>Объём PaxG</th>
						<th>Прибыль</th>
						<th>Удержание Xau</th>
						<th>Зачисление Xau Wallet</th>
					</tr>
				</thead>
				<tbody>
					{data.map((loan, index) => (
						<tr key={index}>
							<td>{loan.time}</td>
							<td>{loan.nickname}</td>
							<td>{loan.tradeDeal}</td>
							<td>{loan.volume}</td>
							<td>{loan.profit}</td>
							<td>{loan.hold}</td>
							<td>{loan.walletCredit}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default LoanHistory
