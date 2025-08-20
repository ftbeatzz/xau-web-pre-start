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
	activeTab?: string
}

const PartnerProfitTable: React.FC<PartnerProfitTableProps> = ({
	data = [],
	isEmpty = false,
	activeTab = 'partner',
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
						<div className={styles.partnerName}>{item.partnerName}</div>
						<div className={styles.dateTime}>{item.dateTime}</div>
					</div>
					<div className={styles.rightColumn}>
						<div className={styles.volume}>
							<span>{item.volume}</span>
							{!(activeTab === 'network' && index === 0) && <SmallXaut />}
						</div>
						<div className={styles.profit}>
							{activeTab === 'partner' ? 'Профит:' : ''} {item.profit}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default PartnerProfitTable
