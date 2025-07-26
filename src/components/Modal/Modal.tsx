import React, { useEffect, useRef } from 'react'
import styles from './Modal.module.scss'
import CloseIcon from '../../icons/CloseIcon'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	title: React.ReactNode
	children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
	const modalRef = useRef<HTMLDivElement>(null)

	// Функция для установки правильной высоты модального окна
	const setModalHeight = () => {
		if (modalRef.current) {
			const vh = window.innerHeight * 0.01
			document.documentElement.style.setProperty('--vh', `${vh}px`)
		}
	}

	// Закрытие по Escape и установка высоты
	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEscape)
			document.body.style.overflow = 'hidden' // Блокируем скролл

			// Устанавливаем высоту при открытии
			setModalHeight()

			// Обновляем высоту при изменении размера окна
			window.addEventListener('resize', setModalHeight)
			window.addEventListener('orientationchange', setModalHeight)
		}

		return () => {
			document.removeEventListener('keydown', handleEscape)
			document.body.style.overflow = 'unset'
			window.removeEventListener('resize', setModalHeight)
			window.removeEventListener('orientationchange', setModalHeight)
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
			<div className={styles.modal} ref={modalRef}>
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
