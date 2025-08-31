import type { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import Tabs from '../../components/Tabs/Tabs'
import { useTabs } from '../../hooks/useTabs'
import type { TabItem } from '../../components/Tabs/Tabs'
import styles from './FreeScreen.module.scss'
import TgIconSilver from '../../icons/TgIconSilver'

export const FreeContent: FC = () => {
	const location = useLocation()

	// Табы токена (используются только для роли Пользователь)
	const tokenTabsConfig: TabItem[] = [
		{ id: 'xaut', label: 'Xaut' },
		{ id: 'paxg', label: 'PaxG' },
	]
	const initialTokenTab =
		location.state && location.state.tab === 'paxg' ? 'paxg' : 'xaut'
	const {
		tabs: tokenTabs,
		activeTab: activeTokenTab,
		handleTabChange: handleTokenTabChange,
	} = useTabs(tokenTabsConfig, initialTokenTab)

	const [isCompleted, setIsCompleted] = useState<boolean>(false)

	// Синхронизируем с location.state (для табов токена)
	useEffect(() => {
		if (
			location.state &&
			location.state.tab &&
			location.state.tab !== activeTokenTab
		) {
			handleTokenTabChange(location.state.tab)
		}
	}, [location.state, activeTokenTab, handleTokenTabChange])

	const handleDone = useCallback(() => {
		setIsCompleted(true)
		window.dispatchEvent(new Event('storage'))
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.tabsWrapper}>
					<div className={styles.tab}>
						<Tabs
							tabs={tokenTabs}
							activeTab={activeTokenTab}
							onTabChange={handleTokenTabChange}
							className={styles.freeTabs}
						/>
					</div>
				</div>
				<div className={styles.infoWrapper}>
					<div
						className={
							activeTokenTab === 'xaut' ? styles.freeXaut : styles.freePaxg
						}
					>
						<div className={styles.topTxtBlock}>
							<h2>Получитье подарочные токены</h2>
							<p>
								Выполните подписку на наш Telegram канал и Telegram чат,
								получите на счет 25 USDT в эквиваленте{' '}
								{activeTokenTab === 'xaut' ? 'Xaut' : 'PaxG'}. Подключитесь к
								коммерческим сделкам и получайте прибыль.
							</p>
						</div>

						{/* Telegram канал */}
						<div className={styles.socialsBlock}>
							<div className={styles.socialsHeader}>
								<span>Telegram канал</span>
								<p>Xau Official Channel</p>
							</div>
							<div className={styles.socialsContent}>
								<div className={styles.socialsLeft}>
									<p>
										<span className={styles.socialsIcon}>
											<TgIconSilver />
										</span>
										<span>Russian</span>
									</p>
									<button className={styles.socialBtn}>Перейти</button>
								</div>
								<div className={styles.socialsLine}></div>
								<div className={styles.socialsRight}>
									<p>
										<span className={styles.socialsIcon}>
											<TgIconSilver />
										</span>
										<span>English</span>
									</p>
									<button className={styles.socialBtn}>Перейти</button>
								</div>
							</div>
						</div>

						{/* Telegram чат */}
						<div className={styles.socialsBlock}>
							<div className={styles.socialsHeader}>
								<span>Telegram чат</span>
								<p>Xau Official Chat</p>
							</div>
							<div className={styles.socialsContent}>
								<div className={styles.socialsLeft}>
									<p>
										<span className={styles.socialsIcon}>
											<TgIconSilver />
										</span>
										<span>Russian</span>
									</p>
									<button className={styles.socialBtn}>Перейти</button>
								</div>
								<div className={styles.socialsLine}></div>
								<div className={styles.socialsRight}>
									<p>
										<span className={styles.socialsIcon}>
											<TgIconSilver />
										</span>
										<span>English</span>
									</p>
									<button className={styles.socialBtn}>Перейти</button>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.btns1Step}>
						{!isCompleted && (
							<>
								<button className={styles.doneBtn} onClick={handleDone}>
									Выполнено
								</button>
							</>
						)}
						{isCompleted && (
							<>
								<div className={styles.btns2Step}>
									<button className={styles.tokenBtn} disabled>
										Токен зачислен
									</button>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default FreeContent
