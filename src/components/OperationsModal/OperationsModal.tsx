import React from 'react'
import Tabs from '../Tabs/Tabs'
import type { OperationRow } from '../OperationsTable'
import OperationsTable from '../OperationsTable'
import styles from './OperationsModal.module.scss'
import CloseIcon from '../../icons/CloseIcon'

export type OperationType = 'buy' | 'sell' | 'withdraw' | 'deposit'

interface OperationsModalProps {
	isOpen: boolean
	onClose: () => void
	type: OperationType
	data: { [key: string]: OperationRow[] } // { xaut: [...], paxg: [...] }
	initialToken?: string // 'xaut' или 'paxg'
	zIndex?: number
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
	zIndex = 1100,
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

	// Закрытие по Escape
	React.useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEscape)
			document.body.style.overflow = 'hidden'
		}

		return () => {
			document.removeEventListener('keydown', handleEscape)
			document.body.style.overflow = 'unset'
		}
	}, [isOpen, onClose])

	// Закрытие по клику вне модального окна
	const handleBackdropClick = (event: React.MouseEvent) => {
		if (event.target === event.currentTarget) {
			onClose()
		}
	}

	if (!isOpen) return null

	return (
		<div
			className={styles.modalOverlay}
			onClick={handleBackdropClick}
			style={{ zIndex }}
		>
			<div className={styles.modal}>
				<div className={styles.modalHeader}>
					<h3 className={styles.modalTitle}>
						{`${TITLES[type]} ${
							tabs.find(t => t.id === activeToken)?.label || ''
						}`}
					</h3>
					<button className={styles.closeButton} onClick={onClose}>
						<CloseIcon />
					</button>
				</div>
				<div className={styles.modalContent}>
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
				</div>
			</div>
		</div>
	)
}

export default OperationsModal
