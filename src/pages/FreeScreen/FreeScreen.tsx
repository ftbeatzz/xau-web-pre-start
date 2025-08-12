import type { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import Tabs from '../../components/Tabs/Tabs'
import { useTabs } from '../../hooks/useTabs'
import type { TabItem } from '../../components/Tabs/Tabs'
import styles from './FreeScreen.module.scss'
import TgIconSilver from '../../icons/TgIconSilver'
import FreeInfoModal from '../../components/FreeInfoModal/FreeInfoModal'
import DoneIcon from '../../icons/DoneIcon'

const FreeScreen: FC = () => {
	const location = useLocation()
	const navigate = useNavigate()

	// Табы роли: Пользователь / Партнер
	const roleTabs: TabItem[] = [
		{ id: 'user', label: 'Пользователь' },
		{ id: 'partner', label: 'Партнер' },
	]
	const {
		tabs: activeRoleTabs,
		activeTab: activeRoleTab,
		handleTabChange: handleRoleTabChange,
	} = useTabs(roleTabs, 'user')

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
	const [infoOpen, setInfoOpen] = useState<boolean>(false)

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

	// Сброс шага при смене роли
	useEffect(() => {
		setIsCompleted(false)
	}, [activeRoleTab])

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.tabsWrapper}>
					<div className={styles.tab}>
						<p>Выбор криптовалюты</p>
						<Tabs
							tabs={tokenTabs}
							activeTab={activeTokenTab}
							onTabChange={handleTokenTabChange}
							className={styles.freeTabs}
						/>
					</div>
					<div className={styles.tab}>
						<p>Выбор программы</p>
						<Tabs
							tabs={activeRoleTabs}
							activeTab={activeRoleTab}
							onTabChange={handleRoleTabChange}
							className={styles.freeTabs}
						/>
					</div>
				</div>
				<div className={styles.infoWrapper}>
					{activeRoleTab === 'user' ? (
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
					) : (
						// Состояние: Партнер
						<div className={styles.freePaxg}>
							{!isCompleted ? (
								<>
									<div className={styles.topTxtBlock}>
										<h2>Получитье подарочные токены</h2>
										<p>ТЕКСТ ТЕКСТ</p>
										<p>ТЕКСТ ТЕКСТ</p>
										<p>ТЕКСТ ТЕКСТ</p>
										<p>ТЕКСТ ТЕКСТ</p>
										<button
											className={styles.instructionBtn}
											onClick={() => setInfoOpen(true)}
										>
											Подробная инструкция
										</button>
									</div>

									<div className={styles.inputBlock}>
										<p>Telegram канал</p>
										<div className={styles.gradientLine}></div>
										<div className={styles.input}>
											<input type='text' placeholder='Cсылка на канал' />
										</div>
										<FreeInfoModal
											isOpen={infoOpen}
											onClose={() => setInfoOpen(false)}
										/>
									</div>
									<div className={styles.inputBlock}>
										<p>YouTube канал</p>
										<div className={styles.gradientLine}></div>
										<div className={styles.input}>
											<input type='text' placeholder='Cсылка на канал' />
										</div>
									</div>
									<div className={styles.inputBlock}>
										<p>Дополнительная социальная сеть</p>
										<div className={styles.gradientLine}></div>
										<div className={styles.input}>
											<input type='text' placeholder='Cсылка на канал' />
										</div>
									</div>
								</>
							) : (
								<>
									<div className={styles.doneBlock}>
										<div className={styles.doneIcon}>
											<DoneIcon />
										</div>
										<div className={styles.doneTxt}>
											<h2>Ваш запрос был отправлен в обработку</h2>
											<div className={styles.gradientLine}></div>
										</div>
										<p>Текст</p>
										<p>Текст</p>
									</div>
								</>
							)}
						</div>
					)}
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
								{activeRoleTab === 'user' ? (
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
								) : (
									<button
										className={styles.doneBtn}
										onClick={() => navigate('/wallet')}
									>
										Вернуться в кабинет
									</button>
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default FreeScreen
