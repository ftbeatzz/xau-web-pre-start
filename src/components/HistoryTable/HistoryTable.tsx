import React from 'react'
import styles from './HistoryTable.module.scss'
import NoDataIcon from '../../icons/NoDataIcon'
import SmallXaut from '../../icons/SmallXaut'

export interface TransactionData {
	id: string
	startDateTime: string
	type: string
	volumeXaut: string
	profit: string
	orderId: string
	endDateTime: string
}

interface HistoryTableProps {
	data?: TransactionData[]
	isEmpty?: boolean
}

const HistoryTable: React.FC<HistoryTableProps> = ({
	data = [],
	isEmpty = false,
}) => {
	if (isEmpty) {
		return (
			<div className={styles.emptyState}>
				<div className={styles.emptyIcon}>
					<NoDataIcon />
				</div>
				<p className={styles.emptyText}>
					Данный аккаунт пока не имеет истории комерческих сделок
				</p>
			</div>
		)
	}

	// Функция для форматирования даты
	const formatDate = (dateString: string) => {
		const date = new Date(dateString.replace(' ', 'T'))
		return (
			date.toLocaleDateString('ru-RU', {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric',
			}) +
			' ' +
			date.toLocaleTimeString('ru-RU', {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
			})
		)
	}

	return (
		<div className={styles.tableContainer}>
			{/* Десктопная таблица */}
			<div className={styles.desktopTable}>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>Дата/Время Старта</th>
							<th>Тип</th>
							<th>Объём Xaut</th>
							<th>Профит</th>
							<th>ID заказа</th>
							<th>Дата/Время Завершения</th>
						</tr>
					</thead>
					<tbody>
						{data.map((transaction, index) => (
							<tr key={index}>
								<td>{transaction.startDateTime}</td>
								<td>{transaction.type}</td>
								<td>{transaction.volumeXaut}</td>
								<td>{transaction.profit}</td>
								<td>{transaction.orderId}</td>
								<td>{transaction.endDateTime}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Мобильные карточки */}
			<div className={styles.mobileCards}>
				{data.map((transaction, index) => (
					<div key={index} className={styles.card}>
						<div className={styles.cardContent}>
							<div className={styles.cardLeft}>
								<div className={styles.transactionInfo}>
									<span className={styles.transactionType}>
										{transaction.type} (ID: {transaction.orderId})
									</span>
									<span className={styles.transactionDate}>
										{formatDate(transaction.startDateTime)}
									</span>
								</div>
							</div>
							<div className={styles.cardRight}>
								<div className={styles.valueContainer}>
									<span className={styles.value}>{transaction.volumeXaut}</span>
									<span className={styles.valueIcon}>
										<SmallXaut />
									</span>
								</div>
								<div className={styles.profitContainer}>
									<span className={styles.profitLabel}>профит:</span>
									<span className={styles.profitValue}>
										{transaction.profit}
									</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default HistoryTable
