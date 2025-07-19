import React, { useState } from 'react'
import styles from './RefModal.module.scss'
import Modal from '../Modal/Modal'
import CopyIcon from '../../icons/CopyIcon'
import ShareIcon from '../../icons/ShareIcon'

interface RefModalProps {
	isOpen: boolean
	onClose: () => void
}

const RefModal: React.FC<RefModalProps> = ({ isOpen, onClose }) => {
	const [copied, setCopied] = useState(false)
	const referralLink = 'https://t.me/xau/start?ref=7gH9pK2LmN'

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

	return (
		<Modal isOpen={isOpen} onClose={onClose} title='Ваша реферальная ссылка'>
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
		</Modal>
	)
}

export default RefModal
