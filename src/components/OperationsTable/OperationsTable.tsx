import React from 'react'
import styles from './OperationsTable.module.scss'
import StopIcon from '../../icons/StopIcon'

export interface OperationRow {
	id: string
	type: string // Например: 'Пополнение', 'Покупка', 'Продажа', 'Вывод'
	amount: string
	date: string
	txId?: string
}

interface OperationsTableProps {
	data: OperationRow[]
	activeTab?: 'xaut' | 'paxg' // Добавляем информацию о текущем табе
}

const OperationsTable: React.FC<OperationsTableProps> = React.memo(
	({
		data = [],
	}) => {
		if (!data.length) {
			return (
				<div className={styles.empty}>
					<span>
						<StopIcon />
					</span>
					<p>Нет данных для выбранной криптовалюты</p>
				</div>
			)
		}

		return (
			<div className={styles.container}>
				{data.map(row => (
					<div key={row.id} className={styles.tableRow}>
						<div className={styles.left}>
							<div className={styles.type}>{row.type}</div>
							<div className={styles.date}>{row.date}</div>
						</div>
						<div className={styles.right}>
							<div className={styles.amount}>{row.amount}</div>
							{row.txId && <div className={styles.txId}>TxID: {row.txId}</div>}
						</div>
					</div>
				))}
			</div>
		)
	}
)

export default OperationsTable
