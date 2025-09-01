import React, { useEffect, useRef, useState } from 'react'
import styles from './PreStartScreen.module.scss'
import Tabs from '../../components/Tabs/Tabs'
import { useTabs } from '../../hooks/useTabs'
import type { TabItem } from '../../components/Tabs/Tabs'
import XautIcon from '../../icons/XautIcon'
import PaxgIcon from '../../icons/PaxgIcon'
import NoDataIcon from '../../icons/NoDataIcon'
import RefModal from '../../components/RefModal/RefModal'
import Modal from '../../components/Modal/Modal'
import { FreeContent } from '../FreeScreen/FreeScreen'
import WalletInfoModal from '../../components/WalletInfoModal/WalletInfoModal'
import { useTranslation } from 'react-i18next'

const PreStartScreen: React.FC = () => {
	const COUNTDOWN_KEY = 'prestart_countdown_end'
	const DURATION_MS = 18 * 24 * 60 * 60 * 1000
	const { t } = useTranslation()
	const computeTimeLeft = (endTs: number) => {
		const now = Date.now()
		const diff = Math.max(0, endTs - now)
		const totalSeconds = Math.floor(diff / 1000)
		const days = Math.floor(totalSeconds / (24 * 60 * 60))
		const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600)
		const minutes = Math.floor((totalSeconds % 3600) / 60)
		const seconds = totalSeconds % 60
		return { days, hours, minutes, seconds }
	}

	const [endTimestamp] = useState<number>(() => {
		const stored = localStorage.getItem(COUNTDOWN_KEY)
		const parsed = stored ? parseInt(stored) : NaN
		if (!stored || Number.isNaN(parsed) || parsed <= Date.now()) {
			const newEnd = Date.now() + DURATION_MS
			localStorage.setItem(COUNTDOWN_KEY, String(newEnd))
			return newEnd
		}
		return parsed
	})

	const [timeLeft, setTimeLeft] = useState(() => computeTimeLeft(endTimestamp))
	const intervalRef = useRef<number | null>(null)

	useEffect(() => {
		if (intervalRef.current) window.clearInterval(intervalRef.current)
		intervalRef.current = window.setInterval(() => {
			setTimeLeft(computeTimeLeft(endTimestamp))
		}, 1000)
		return () => {
			if (intervalRef.current) window.clearInterval(intervalRef.current)
		}
	}, [endTimestamp])

	const format2 = (n: number) => String(n).padStart(2, '0')
	const preStartTabs: TabItem[] = [
		{ id: 'xaut', label: 'Xaut' },
		{ id: 'paxg', label: 'PaxG' },
	]

	const { tabs, activeTab, handleTabChange } = useTabs(preStartTabs, 'xaut')

	const onTabChange = (tabId: string) => {
		handleTabChange(tabId)
	}

	// Состояние и данные для выпадающего списка уровней сети
	const [isLevelOpen, setIsLevelOpen] = useState(false)
	const levelRef = useRef<HTMLDivElement | null>(null)
	useEffect(() => {
		const onDocClick = (e: MouseEvent) => {
			if (levelRef.current && !levelRef.current.contains(e.target as Node)) {
				setIsLevelOpen(false)
			}
		}
		document.addEventListener('mousedown', onDocClick)
		return () => document.removeEventListener('mousedown', onDocClick)
	}, [])

	const networkLevels: { level: number; partners: number }[] = [
		{ level: 1, partners: 7 },
		{ level: 2, partners: 10 },
		{ level: 3, partners: 25 },
		{ level: 4, partners: 30 },
		{ level: 5, partners: 18 },
		{ level: 6, partners: 11 },
		{ level: 7, partners: 9 },
		{ level: 8, partners: 14 },
		{ level: 9, partners: 6 },
		{ level: 10, partners: 3 },
		{ level: 11, partners: 2 },
		{ level: 12, partners: 1 },
	]

	// Модалка реферальной ссылки
	const [isRefOpen, setIsRefOpen] = useState(false)
	const [isFreeOpen, setIsFreeOpen] = useState(false)
	const [isWalletInfoOpen, setIsWalletInfoOpen] = useState(false)

	// Состояние получения бонуса за регистрацию (сбрасывается при перезагрузке)
	const [isRegBonusClaimed, setIsRegBonusClaimed] = useState(false)

	// Табличные данные (демо). Подставьте реальные данные при интеграции
	type TableItem = { id: string; email: string; amount: string }
	const partnerData: TableItem[] = [
		{ id: '1', email: 'Alex...hka', amount: '0.00000017 Xaut' },
		{ id: '2', email: 'alex...mail.com', amount: '0.00000017 PaxG' },
		{ id: '3', email: 'Alex...hka', amount: '0.00000017 Xaut' },
		{ id: '4', email: 'alex...mail.com', amount: '0.00000017 PaxG' },
		{ id: '5', email: 'alex...mail.com', amount: '0.00000017 PaxG' },
		{ id: '6', email: 'alex...mail.com', amount: '0.00000017 PaxG' },
		{ id: '7', email: 'alex...mail.com', amount: '0.00000017 PaxG' },
		{ id: '8', email: 'alex...mail.com', amount: '0.00000017 PaxG' },
		{ id: '9', email: 'alex...mail.com', amount: '0.00000017 PaxG' },
		{ id: '10', email: 'alex...mail.com', amount: '0.00000017 PaxG' },
	]
	const tokenLabel = activeTab === 'xaut' ? 'Xaut' : 'PaxG'
	const networkData: TableItem[] = []

	const renderTable = (items: TableItem[]) => (
		<div className={styles.table}>
			<div className={styles.tableHeader}>
				<span className={styles.cell}>
					Email/{t('pre_start_table_header_nickname')}
				</span>
				<span className={styles.cell}>
					{t('pre_start_table_header_amount')} Xaut/PaxG
				</span>
			</div>
			{items.length === 0 ? (
				<div className={styles.empty}>
					<div className={styles.emptyIcon}>
						<NoDataIcon />
					</div>
					<h4>{t('pre_start_no_partners')}</h4>
				</div>
			) : (
				<div className={styles.tableBody}>
					{items.map(row => (
						<div className={styles.tableRow} key={row.id}>
							<p className={styles.cell}>{row.email}</p>
							<p className={styles.cell}>{row.amount}</p>
						</div>
					))}
				</div>
			)}
		</div>
	)

	return (
		<>
			<div className={styles.container}>
				<div className={styles.top}>
					<div className={styles.left}>
						<div className={styles.tabWrapper}>
							<h2 className={styles.blockTitle}>
								{t('pre_start_choose_currency')}
							</h2>
							<div className={styles.tab}>
								<Tabs
									tabs={tabs}
									activeTab={activeTab}
									onTabChange={onTabChange}
								/>
							</div>
							<div className={styles.gradientLine}></div>
						</div>
						<div className={styles.accInfo}>
							<div className={styles.row}>
								<h3>{t('pre_start_my_main_account')}</h3>
								<span>{activeTab === 'xaut' ? 'Xaut' : 'PaxG'}</span>
							</div>
							<div className={styles.row}>
								<p>{t('pre_start_commercial_period')}</p>
								<p>
									72{t('pre_start_timer_h')}:00{t('pre_start_timer_m')}:00
									{t('pre_start_timer_s')}
								</p>
							</div>
							<div className={styles.row}>
								<p className={styles.balance}>0.00001246$</p>
								<button onClick={() => setIsWalletInfoOpen(true)}>
									{t('pre_start_info')}
								</button>
							</div>
							<div className={styles.row}>
								<h3 className={styles.balanceXaut}>
									0.00000017 {activeTab === 'xaut' ? 'Xaut' : 'PaxG'}
								</h3>
								<p>
									{t('pre_start_price_prefix')}{' '}
									<span>
										{activeTab === 'xaut' ? <XautIcon /> : <PaxgIcon />}
									</span>{' '}
									- 3356.68 USDT
								</p>
							</div>
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.topInfo}>
							<div className={styles.timerWrapper}>
								<h2>{t('pre_start_title')}</h2>
								<p>{t('pre_start_start_in')}</p>
								<div className={styles.timer}>
									<div className={styles.timerItem}>
										<p>{String(timeLeft.days)}</p>
										<p>{t('pre_start_timer_d')}</p>
									</div>
									<div className={styles.timerItem}>
										<p>{format2(timeLeft.hours)}</p>
										<p>{t('pre_start_timer_h')}</p>
									</div>
									<div className={styles.timerItem}>
										<p>{format2(timeLeft.minutes)}</p>
										<p>{t('pre_start_timer_m')}</p>
									</div>
									<div className={styles.timerItem}>
										<p>{format2(timeLeft.seconds)}</p>
										<p>{t('pre_start_timer_s')}</p>
									</div>
								</div>
							</div>
							<div className={styles.img}>
								<img src='/img/goldCoins.png' alt='prestart' />
							</div>
						</div>
						<p className={styles.middleTxt}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut{' '}
						</p>
						<div className={styles.platformSwitcher}>
							<div className={styles.switcher}>
								<button>{t('pre_start_platform_web')}</button>
								<button>{t('pre_start_platform_tg')}</button>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.bottom}>
					<div className={styles.left}>
						<div className={styles.bonus}>
							<h2>{t('pre_start_bonus_title')}</h2>
							<h3>{t('pre_start_bonus_registration')}</h3>
							<p>
								{t('pre_start_bonus_registration_p', { activeTab: tokenLabel })}
							</p>

							<button
								className={isRegBonusClaimed ? styles.bonusBtnClaimed : ''}
								onClick={() => setIsRegBonusClaimed(true)}
								disabled={isRegBonusClaimed}
							>
								{isRegBonusClaimed
									? t('pre_start_bonus_claimed')
									: t('pre_start_bonus_get')}
							</button>
						</div>
						<div className={styles.bonus}>
							<h2>{t('pre_start_bonus_title')}</h2>
							<h3>{t('pre_start_gift_tokens_title')}</h3>
							<p>
								<p>{t('pre_start_gift_tokens_p', { activeTab: tokenLabel })}</p>
							</p>
							<button onClick={() => setIsFreeOpen(true)}>
								{t('pre_start_bonus_get')}
							</button>
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.refWrapper}>
							<div className={styles.partner}>
								<div className={styles.column}>
									<h2>YOUR PARTNER ACCOUNT</h2>
									<p>12</p>
									<span>{t('pre_start_personal_partners')}</span>
								</div>
								<div className={styles.row}>
									<span>0.00000017 XAUT</span>
									<span>0.00000017 PaxG</span>
								</div>
								<div className={styles.row}>
									<span>{t('pre_start_total_volume')}</span>
									<span>0.012 USDT</span>
								</div>
								<div className={styles.tableContainer}>
									{renderTable(partnerData)}
								</div>
							</div>
							<div className={styles.network}>
								<div className={styles.row}>
									<div className={styles.column}>
										<h2>YOUR NETWORK ACCOUNT</h2>
										<p>12</p>
										<span>{t('pre_start_network')}</span>
									</div>
									<div className={styles.levelDropdown} ref={levelRef}>
										<button
											className={styles.levelBtn}
											onClick={() => setIsLevelOpen(v => !v)}
										>
											<p className={styles.lvl}>
												{t('pre_start_level_label')} 1{' '}
											</p>
											<p className={styles.count}>7</p>
											<p className={styles.partners}>
												{t('pre_start_partners')}
											</p>
										</button>
										{isLevelOpen && (
											<div className={styles.levelMenu}>
												{networkLevels.map(item => (
													<div
														key={item.level}
														className={styles.levelMenuItem}
													>
														<span>
															{t('pre_start_level_label')} {item.level} -{' '}
															{item.partners} {t('pre_start_partners')}
														</span>
													</div>
												))}
											</div>
										)}
									</div>
								</div>
								<div className={styles.row}>
									<span>0.00000017 XAUT</span>
									<span>0.00000017 PaxG</span>
								</div>
								<div className={styles.row}>
									<span>{t('pre_start_total_volume')}</span>
									<span>0.012 USDT</span>
								</div>
								<div className={styles.tableContainer}>
									{renderTable(networkData)}
								</div>
							</div>
						</div>
						<button
							className={styles.linkBtn}
							onClick={() => setIsRefOpen(true)}
						>
							{t('pre_start_ref_link')}
						</button>
					</div>
				</div>
			</div>
			{isRefOpen && (
				<RefModal isOpen={isRefOpen} onClose={() => setIsRefOpen(false)} />
			)}
			{isFreeOpen && (
				<Modal
					isOpen={isFreeOpen}
					onClose={() => setIsFreeOpen(false)}
					title={'Выбор криптовалюты'}
					maxWidth={600}
				>
					<FreeContent />
				</Modal>
			)}
			{isWalletInfoOpen && (
				<WalletInfoModal
					isOpen={isWalletInfoOpen}
					onClose={() => setIsWalletInfoOpen(false)}
				/>
			)}
		</>
	)
}

export default PreStartScreen
