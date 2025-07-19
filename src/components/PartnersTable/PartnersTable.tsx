import React from 'react'
import styles from './PartnersTable.module.scss'
import NoDataIcon from '../../icons/NoDataIcon'

export interface PartnerData {
	id: string
	registrationDateTime: string
	nickname: string
	volumeXaut: string
	volumePaxg: string
}

interface PartnersTableProps {
	data?: PartnerData[]
	isEmpty?: boolean
}

const PartnersTable: React.FC<PartnersTableProps> = ({
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
					У вас пока нет приглашенных партнеров
				</p>
			</div>
		)
	}

	return (
		<div className={styles.tableContainer}>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Дата/Время регистрации</th>
						<th>Никнейм</th>
						<th>Объем Xaut</th>
						<th>Объем PaxG</th>
					</tr>
				</thead>
				<tbody>
					{data.map((partner, index) => (
						<tr key={index}>
							<td>{partner.registrationDateTime}</td>
							<td>{partner.nickname}</td>
							<td>{partner.volumeXaut}</td>
							<td>{partner.volumePaxg}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default PartnersTable
