import React from 'react'
import styles from './HistoryTable.module.scss'
import NoDataIcon from '../../icons/NoDataIcon'

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

	return (
		<div className={styles.tableContainer}>
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
	)
}

export default HistoryTable
