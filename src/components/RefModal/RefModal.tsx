import React, { useState, useEffect } from 'react'
import styles from './RefModal.module.scss'
import CopyIcon from '../../icons/CopyIcon'
import ShareIcon from '../../icons/ShareIcon'
import CloseIcon from '../../icons/CloseIcon'

interface RefModalProps {
	isOpen: boolean
	onClose: () => void
}

const RefModal: React.FC<RefModalProps> = ({ isOpen, onClose }) => {
	const [copied, setCopied] = useState(false)
	const referralLink = 'https://t.me/xau/start?ref=7gH9pK2LmN'

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

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(referralLink)
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		} catch (err) {
			console.error('Ошибка копирования:', err)
		}
	}

	const handleShare = async () => {
		if (navigator.share) {
			try {
				await navigator.share({
					title: 'Реферальная ссылка',
					url: referralLink,
				})
			} catch (err) {
				console.error('Ошибка шаринга:', err)
			}
		} else {
			// Fallback для браузеров без поддержки Web Share API
			handleCopy()
		}
	}

	if (!isOpen) return null

	return (
		<div className={styles.modalOverlay} onClick={handleBackdropClick}>
			<div className={styles.modal}>
				<div className={styles.modalHeader}>
					<h3 className={styles.modalTitle}>Ваша реферальная ссылка</h3>
					<button className={styles.closeButton} onClick={onClose}>
						<CloseIcon />
					</button>
				</div>
				<div className={styles.modalContent}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<div className={styles.referralLink}>{referralLink}</div>

							<div className={styles.buttons}>
								<button className={styles.copyButton} onClick={handleCopy}>
									<CopyIcon />
									<span>{copied ? 'Скопировано!' : 'Скопировать'}</span>
								</button>

								<button className={styles.shareButton} onClick={handleShare}>
									<ShareIcon />
									<span>Поделиться</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RefModal
