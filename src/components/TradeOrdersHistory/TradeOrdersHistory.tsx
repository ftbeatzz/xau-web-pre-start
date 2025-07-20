import React from 'react'
import styles from './TradeOrdersHistory.module.scss'

export interface TradeOrderData {
	id: string
	leftTime: string
	leftPair: string
	leftVolume: string
	sellPrice: string
	pnl: string
	buyPrice: string
	rightVolume: string
	rightPair: string
	rightTime: string
}

interface TradeOrdersHistoryProps {
	data: TradeOrderData[]
}

const TradeOrdersHistory: React.FC<TradeOrdersHistoryProps> = ({ data }) => {
	return (
		<div className={styles.tableContainer}>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Время (UTC)</th>
						<th>Пара</th>
						<th>Объём Xaut</th>
						<th>Прайс Sell</th>
						<th>PnL (USDT)</th>
						<th>Прайс Buy</th>
						<th>Объем Xaut</th>
						<th>Пара</th>
						<th>Время (UTC)</th>
					</tr>
				</thead>
				<tbody>
					{data.map(item => (
						<tr key={item.id}>
							<td>{item.leftTime}</td>
							<td>{item.leftPair}</td>
							<td>{item.leftVolume}</td>
							<td>{item.sellPrice}</td>
							<td
								className={`${styles.pnl} ${
									parseFloat(item.pnl) >= 0 ? styles.positive : styles.negative
								}`}
							>
								{item.pnl}
							</td>
							<td>{item.buyPrice}</td>
							<td>{item.rightVolume}</td>
							<td>{item.rightPair}</td>
							<td>{item.rightTime}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default TradeOrdersHistory
