import React from 'react'
import styles from './OrdersHistoryXau.module.scss'
import NoDataIcon from '../../icons/NoDataIcon'

export interface OrderHistoryData {
	id: string
	time: string
	volumeXaut: string
	swap: string
	volumePaxg: string
	salePaxg: string
	purchaseXaut: string
	profitUsdt: string
}

interface OrdersHistoryXauProps {
	data?: OrderHistoryData[]
	isEmpty?: boolean
}

const OrdersHistoryXau: React.FC<OrdersHistoryXauProps> = ({
	data = [],
	isEmpty = false,
}) => {
	if (isEmpty) {
		return (
			<div className={styles.emptyState}>
				<div className={styles.emptyIcon}>
					<NoDataIcon />
				</div>
				<p className={styles.emptyText}>История ордеров пуста</p>
			</div>
		)
	}

	return (
		<div className={styles.tableContainer}>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Время (UTC)</th>
						<th>Объем Xaut</th>
						<th>Swap</th>
						<th>Объем PaxG</th>
						<th>Продажа PaxG</th>
						<th>Покупка Xaut</th>
						<th>Профит USDT</th>
					</tr>
				</thead>
				<tbody>
					{data.map((order, index) => (
						<tr key={index}>
							<td>{order.time}</td>
							<td>{order.volumeXaut}</td>
							<td>{order.swap}</td>
							<td>{order.volumePaxg}</td>
							<td>{order.salePaxg}</td>
							<td>{order.purchaseXaut}</td>
							<td>{order.profitUsdt}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default OrdersHistoryXau
