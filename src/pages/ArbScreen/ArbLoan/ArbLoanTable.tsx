import React from 'react'
import styles from './ArbLoanTable.module.scss'

export interface ArbLoanRow {
	id: string
	time: string
	nickname: string
	exchangeBuy: string
	volumePriceBuy: string
	spreadToken: string
	profitToken: string
	volumePriceSell: string
	exchangeSell: string
	allFees: string
}

interface Props {
	data: ArbLoanRow[]
	tokenLabel: string
}

const ArbLoanTable: React.FC<Props> = ({ data, tokenLabel }) => {
	return (
		<div className={styles.tableContainer}>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Время (UTC)</th>
						<th>Никнейм</th>
						<th>Биржа Buy</th>
						<th>Объём {tokenLabel}/Price USDT</th>
						<th>Спред {tokenLabel}</th>
						<th>Прибыль {tokenLabel}</th>
						<th>Объём {tokenLabel}/Price USDT</th>
						<th>Биржа Sell</th>
						<th>All fees</th>
					</tr>
				</thead>
				<tbody>
					{data.map(row => (
						<tr key={row.id}>
							<td>{row.time}</td>
							<td>{row.nickname}</td>
							<td>{row.exchangeBuy}</td>
							<td>{row.volumePriceBuy}</td>
							<td>{row.spreadToken}</td>
							<td>{row.profitToken}</td>
							<td>{row.volumePriceSell}</td>
							<td>{row.exchangeSell}</td>
							<td>{row.allFees}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default ArbLoanTable
