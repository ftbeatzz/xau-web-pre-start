import React from 'react'
import styles from './ArbOrdersTable.module.scss'

export interface ArbOrderRow {
	id: string
	time: string
	volume: string
	priceBuy: string
	priceSell: string
	spread: string
	allFees: string
}

interface ArbOrdersTableProps {
	data: ArbOrderRow[]
	tokenLabel: string
}

const ArbOrdersTable: React.FC<ArbOrdersTableProps> = ({
	data,
	tokenLabel,
}) => {
	return (
		<div className={styles.tableContainer}>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Дата/Время</th>
						<th>Объём {tokenLabel}</th>
						<th>Price Buy</th>
						<th>Price Sell</th>
						<th>Спред {tokenLabel}</th>
						<th>All fees</th>
					</tr>
				</thead>
				<tbody>
					{data.map(row => (
						<tr key={row.id}>
							<td>{row.time}</td>
							<td>{row.volume}</td>
							<td>{row.priceBuy}</td>
							<td>{row.priceSell}</td>
							<td>{row.spread}</td>
							<td>{row.allFees}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default ArbOrdersTable
