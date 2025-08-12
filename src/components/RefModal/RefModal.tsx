import React, { useMemo, useState, useEffect } from 'react'
import styles from './RefModal.module.scss'
import CopyIcon from '../../icons/CopyIcon'
import ShareIcon from '../../icons/ShareIcon'
import CloseIcon from '../../icons/CloseIcon'
import Tabs, { type TabItem } from '../Tabs/Tabs'
import { useTabs } from '../../hooks/useTabs'
import ClassicTgIcon from '../../icons/ClassicTgIcon'
import EarthIcon from '../../icons/EarthIcon'

interface RefModalProps {
	isOpen: boolean
	onClose: () => void
}

const RefModal: React.FC<RefModalProps> = ({ isOpen, onClose }) => {
	const [copied, setCopied] = useState(false)
	const platformTabs: TabItem[] = [
		{ id: 'telegram', label: 'Telegram', icon: <ClassicTgIcon /> },
		{ id: 'web', label: 'Web-версия', shortLabel: 'Web', icon: <EarthIcon /> },
	]
	const {
		tabs,
		activeTab: platform,
		handleTabChange,
	} = useTabs(platformTabs, 'telegram')
	const referralCode = '7gH9pK2LmN'

	const telegramLink = useMemo(
		() => `https://t.me/xau/start?ref=${referralCode}`,
		[referralCode]
	)
	const webLink = useMemo(
		() => `${window.location.origin}/?ref=${referralCode}`,
		[referralCode]
	)
	const referralLink = platform === 'telegram' ? telegramLink : webLink

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
					<h3 className={styles.modalTitle}>Выбор платформы</h3>
					<button className={styles.closeButton} onClick={onClose}>
						<CloseIcon />
					</button>
				</div>
				<div className={styles.modalContent}>
					<div className={styles.wrapper}>
						<Tabs
							tabs={tabs}
							activeTab={platform}
							onTabChange={handleTabChange}
						/>

						<div className={styles.content}>
							<h4 className={styles.subtitle}>Ваша реферальная ссылка</h4>
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
