import React, { useEffect } from 'react'
import styles from './Modal.module.scss'
import CloseIcon from '../../icons/CloseIcon'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	title: React.ReactNode
	children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
	// Закрытие по Escape
	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEscape)
			document.body.style.overflow = 'hidden' // Блокируем скролл
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
		<div className={styles.modalOverlay} onClick={handleBackdropClick}>
			<div className={styles.modal}>
				<div className={styles.modalHeader}>
					<h3 className={styles.modalTitle}>{title}</h3>
					<button className={styles.closeButton} onClick={onClose}>
						<CloseIcon />
					</button>
				</div>
				<div className={styles.modalContent}>{children}</div>
			</div>
		</div>
	)
}

export default Modal
