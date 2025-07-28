import React from 'react'
import styles from './LimitsModal.module.scss'
import CloseIcon from '../../icons/CloseIcon'

interface LimitsModalProps {
	isOpen: boolean
	onClose: () => void
	title: string
	content: React.ReactNode
	zIndex?: number
}

const LimitsModal: React.FC<LimitsModalProps> = ({
	isOpen,
	onClose,
	content,
	zIndex = 1100,
}) => {
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
					<button className={styles.closeButton} onClick={onClose}>
						<CloseIcon />
					</button>
				</div>
				<div className={styles.modalContent}>{content}</div>
			</div>
		</div>
	)
}

export default LimitsModal
