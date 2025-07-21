import React from 'react'
import Modal from '../Modal/Modal'
import Tabs from '../Tabs/Tabs'
import type { OperationRow } from '../OperationsTable'
import OperationsTable from '../OperationsTable'
import styles from './OperationsModal.module.scss'

export type OperationType = 'buy' | 'sell' | 'withdraw' | 'deposit'

interface OperationsModalProps {
	isOpen: boolean
	onClose: () => void
	type: OperationType
	data: { [key: string]: OperationRow[] } // { xaut: [...], paxg: [...] }
	initialToken?: string // 'xaut' или 'paxg'
}

const TITLES: Record<OperationType, string> = {
	buy: 'История покупок',
	sell: 'История продаж',
	withdraw: 'История выводов',
	deposit: 'История пополнений',
}

const OperationsModal: React.FC<OperationsModalProps> = ({
	isOpen,
	onClose,
	type,
	data,
	initialToken = 'xaut',
}) => {
	const tabs = [
		{ id: 'xaut', label: 'Xaut' },
		{ id: 'paxg', label: 'PaxG' },
	]
	const [activeToken, setActiveToken] = React.useState(initialToken)
	React.useEffect(() => {
		if (isOpen) setActiveToken(initialToken)
	}, [isOpen, initialToken])
	const currentData = data[activeToken] || []
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title={`${TITLES[type]} ${
				tabs.find(t => t.id === activeToken)?.label || ''
			}`}
		>
			<div className={styles.tabsWrapper}>
        <div className={styles.gradientLine}></div>
				<h3>Выбор криптовалюты</h3>
				<Tabs
					tabs={tabs}
					activeTab={activeToken}
					onTabChange={setActiveToken}
				/>
			</div>
			<div className={styles.content}>
				<OperationsTable data={currentData} />
			</div>
		</Modal>
	)
}

export default OperationsModal
