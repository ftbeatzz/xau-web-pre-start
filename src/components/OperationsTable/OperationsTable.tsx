import React from 'react'
import styles from './OperationsTable.module.scss'
import StopIcon from '../../icons/StopIcon'
import SmallXaut from '../../icons/SmallXaut'
import SmallPaxg from '../../icons/SmallPaxg'

export interface OperationRow {
	id: string
	type: string // Например: 'Пополнение', 'Покупка', 'Продажа', 'Вывод'
	amount: string
	date: string
	txId?: string
	status?: string
	price?: string
	autoValue?: string
}

type TokenId = 'xaut' | 'paxg'
type OperationKind = 'buy' | 'sell' | 'withdraw' | 'deposit'

interface OperationsTableProps {
	data: OperationRow[]
	token?: TokenId
	operationType?: OperationKind
}

const OperationsTable: React.FC<OperationsTableProps> = React.memo(
	({ data = [], token = 'xaut', operationType = 'withdraw' }) => {
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

		const AutoIcon = token === 'xaut' ? SmallXaut : SmallPaxg
		const autoLabels: Record<OperationKind, string> = {
			withdraw: 'Автоматическая выплата через:',
			deposit: 'Автоматическое пополнение через:',
			buy: 'Автоматическая покупка через:',
			sell: 'Автоматическая продажа через:',
		}

		return (
			<div className={styles.container}>
				{data.map(row => (
					<div key={row.id} className={styles.tableRow}>
						<div className={styles.left}>
							<div className={styles.titleRow}>
								<div className={styles.type}>{row.type}</div>
								<div className={styles.txId}>
									TxID: {row.txId ? row.txId : 'не определен'}
								</div>
							</div>
							<div className={styles.date}>{row.date}</div>
							<div className={styles.autoLabel}>
								{autoLabels[operationType]}
							</div>
						</div>
						<div className={styles.right}>
							<div className={styles.amount}>
								{row.amount} <AutoIcon />
							</div>
							{row.price && (
								<div className={styles.price}>Цена: {row.price}</div>
							)}
							<div className={styles.status}>{row.autoValue || row.status}</div>
						</div>
					</div>
				))}
			</div>
		)
	}
)

export default OperationsTable
