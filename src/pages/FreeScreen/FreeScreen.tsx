import type { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Tabs from '../../components/Tabs/Tabs'
import { useTabs } from '../../hooks/useTabs'
import type { TabItem } from '../../components/Tabs/Tabs'
import styles from './FreeScreen.module.scss'
import TgIconSilver from '../../icons/TgIconSilver'

const FreeScreen: FC = () => {
	const location = useLocation()
	const navigate = useNavigate()

	// Определяем табы
	const freeTabs: TabItem[] = [
		{ id: 'xaut', label: 'Xaut' },
		{ id: 'paxg', label: 'PaxG' },
	]

	// Используем хук useTabs с учетом состояния из location
	const initialTab =
		location.state && location.state.tab === 'paxg' ? 'paxg' : 'xaut'
	const { tabs, activeTab, handleTabChange } = useTabs(freeTabs, initialTab)

	const [rewarded, setRewarded] = useState<boolean>(false)
	const [done, setDone] = useState<boolean>(false)

	// Синхронизируем с location.state
	useEffect(() => {
		if (
			location.state &&
			location.state.tab &&
			location.state.tab !== activeTab
		) {
			handleTabChange(location.state.tab)
		}
	}, [location.state, activeTab, handleTabChange])

	const handleDone = () => {
		setRewarded(true)
		setDone(true)
		window.dispatchEvent(new Event('storage'))
	}

	// Данные для разных табов
	const tabContent = {
		xaut: {
			tokenName: 'Xaut',
			description:
				'Выполните подписку на наш Telegram канал и Telegram чат, получите на счет 25 USDT в эквиваленте Xaut. Подключитесь к коммерческим сделкам и получайте прибыль.',
		},
		paxg: {
			tokenName: 'PaxG',
			description:
				'Выполните подписку на наш Telegram канал и Telegram чат, получите на счет 25 USDT в эквиваленте PaxG. Подключитесь к коммерческим сделкам и получайте прибыль.',
		},
	}

	const currentContent = tabContent[activeTab as keyof typeof tabContent]

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<Tabs
					tabs={tabs}
					activeTab={activeTab}
					onTabChange={handleTabChange}
					className={styles.freeTabs}
				/>
				<div className={styles.infoWrapper}>
					<div
						className={activeTab === 'xaut' ? styles.freeXaut : styles.freePaxg}
					>
						<div className={styles.topTxtBlock}>
							<h2>Получитье подарочные токены</h2>
							<p>{currentContent.description}</p>
						</div>

						{/* Telegram канал */}
						<div className={styles.socialsBlock}>
							<div className={styles.socialsHeader}>
								<p>Telegram канал</p>
								<p>Xau Official Channel</p>
							</div>
							<div className={styles.socialsLine}>
								<div className={styles.gradientLine}></div>
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
										<span>English</span>
										<span className={styles.socialsIcon}>
											<TgIconSilver />
										</span>
									</p>
									<button className={styles.socialBtn}>Перейти</button>
								</div>
							</div>
						</div>

						{/* Telegram чат */}
						<div className={styles.socialsBlock}>
							<div className={styles.socialsHeader}>
								<p>Telegram чат</p>
								<p>Xau Official Chat</p>
							</div>
							<div className={styles.socialsLine}>
								<div className={styles.gradientLine}></div>
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
										<span>English</span>
										<span className={styles.socialsIcon}>
											<TgIconSilver />
										</span>
									</p>
									<button className={styles.socialBtn}>Перейти</button>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.btns1Step}>
						{!rewarded && !done && (
							<>
								<button className={styles.doneBtn} onClick={handleDone}>
									Выполнено
								</button>
							</>
						)}
						{(rewarded || done) && (
							<>
								<div className={styles.btns2Step}>
									<button
										className={styles.backBtn2}
										onClick={() => navigate('/wallet')}
									>
										Назад
									</button>
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

export default FreeScreen
