import React from 'react'
import styles from './PartnerProfitTable.module.scss'
import NoDataIcon from '../../icons/NoDataIcon'
import SmallXaut from '../../icons/SmallXaut'

export interface PartnerProfitData {
	id: string
	partnerName: string
	volume: string
	dateTime: string
	profit: string
}

interface PartnerProfitTableProps {
	data?: PartnerProfitData[]
	isEmpty?: boolean
}

const PartnerProfitTable: React.FC<PartnerProfitTableProps> = ({
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
					У вас пока нет начислений по партнерской программе
				</p>
			</div>
		)
	}

	return (
		<div className={styles.container}>
			{data.map((item, index) => (
				<div key={item.id} className={styles.profitItem}>
					<div className={styles.leftColumn}>
						<div className={styles.partnerName}>{item.partnerName} - объем</div>
						<div className={styles.dateTime}>{item.dateTime}</div>
					</div>
					<div className={styles.rightColumn}>
						<div className={styles.volume}>
							<span>{item.volume}</span>
							<SmallXaut />
						</div>
						<div className={styles.profit}>профит: {item.profit}</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default PartnerProfitTable
