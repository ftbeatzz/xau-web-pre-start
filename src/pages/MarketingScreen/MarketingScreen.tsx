import React from 'react'
import styles from './MarketingScreen.module.scss'
import Tabs from '../../components/Tabs/Tabs'
import { useTabs } from '../../hooks/useTabs'
import type { TabItem } from '../../components/Tabs/Tabs'
import SmallXaut from '../../icons/SmallXaut'
import SmallPaxg from '../../icons/SmallPaxg'
import SellIcon from '../../icons/SellIcon'
import SendIcon from '../../icons/SendIcon'
import RefIcon from '../../icons/RefIcon'
import PartnersTable, {
	type PartnerData,
} from '../../components/PartnersTable/PartnersTable'
import PartnerProfitTable, {
	type PartnerProfitData,
} from '../../components/PartnerProfitTable/PartnerProfitTable'
import LevelDropdown from '../../components/LevelDropdown/LevelDropdown'
import NetworkInfoModal from '../../components/NetworkInfoModal/NetworkInfoModal'
import PartnerInfoModal from '../../components/PartnerInfoModal/PartnerInfoModal'
import QualificationTable from '../../components/QualificationTable/QualificationTable'
import MarketingSendModal from '../../components/MarketingSendModal/MarketingSendModal'
import MarketingSellModal from '../../components/MarketingSellModal/MarketingSellModal'
import RefModal from '../../components/RefModal/RefModal'

const MarketingScreen: React.FC = () => {
	const marketingTabs: TabItem[] = [
		{ id: 'partner', label: 'Партнер' },
		{ id: 'network', label: 'Сеть' },
	]

	const { tabs, activeTab, handleTabChange } = useTabs(marketingTabs, 'partner')

	// Состояние для модальных окон
	const [isNetworkInfoOpen, setIsNetworkInfoOpen] = React.useState(false)
	const [isPartnerInfoOpen, setIsPartnerInfoOpen] = React.useState(false)
	const [isTableActivateOpen, setIsTableActivateOpen] = React.useState(false)
	const [isMarketingSendOpen, setIsMarketingSendOpen] = React.useState(false)
	const [isMarketingSellOpen, setIsMarketingSellOpen] = React.useState(false)
	const [isRefModalOpen, setIsRefModalOpen] = React.useState(false)

	// Обработчики для информационных модальных окон
	const openInfoModal = () => {
		if (activeTab === 'partner') {
			setIsPartnerInfoOpen(true)
		} else {
			setIsNetworkInfoOpen(true)
		}
	}

	// Контент для разных табов
	const tabContent = {
		partner: {
			title: 'Партнер',
			balanceXAUT: '0.00000017 XAUT',
			balancePaxg: '0.00000017 Paxg',
			balanceUSDT: '0.0000000$',
			chartData: 'Partner Chart Data',
			price: '3356.68 USDT',
			icon: SmallXaut,
		},
		network: {
			title: 'Сеть',
			balanceXAUT: '567.89000000 XAUT',
			balancePaxg: '0.00000017 Paxg',
			balanceUSDT: '0.00001246$',
			chartData: 'Network Chart Data',
			price: '2423.45 USDT',
			icon: SmallPaxg,
		},
	}

	const currentContent = tabContent[activeTab as keyof typeof tabContent]

	// Тексты в зависимости от выбранного таба
	const getTabTexts = () => {
		if (activeTab === 'partner') {
			return {
				partnerProgram: 'Начисления по партнерской программе',
				invitedPartners: 'Лично приглашенные партнеры',
				personalPartners: 'Личных партнеров:',
			}
		} else {
			return {
				partnerProgram: 'Начисления по программе сеть',
				invitedPartners: 'Статистика партнеров',
				personalPartners: 'Сеть:',
			}
		}
	}

	const tabTexts = getTabTexts()

	// Количество партнеров в зависимости от выбранного таба
	const getPartnerCount = () => {
		return activeTab === 'partner' ? '5' : '12,857'
	}

	const partnerCount = getPartnerCount()

	// Данные для таблицы партнеров
	const partnerData: PartnerData[] = [
		{
			id: '1',
			registrationDateTime: '2025-05-28 22:45:02',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '2',
			registrationDateTime: '2025-05-28 22:45:18',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '3',
			registrationDateTime: '2025-05-28 22:46:09',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '4',
			registrationDateTime: '2025-05-28 22:47:02',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '5',
			registrationDateTime: '2025-05-28 22:47:45',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '6',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '7',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '8',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '9',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '10',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '11',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '12',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '13',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '14',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '15',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '16',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '17',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '18',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '19',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '20',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '21',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '22',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '23',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '24',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '25',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '26',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
		{
			id: '27',
			registrationDateTime: '2025-05-28 22:51:05',
			nickname: 'Alex...hka',
			volumeXaut: '0.00000017',
			volumePaxg: '0.00000017',
		},
	]

	// Данные для таблицы прибыли партнеров
	const partnerProfitData: PartnerProfitData[] = [
		{
			id: '1',
			partnerName: 'Alex...hka',
			volume: '0.00000034',
			dateTime: '05.05.2025 02:57:36',
			profit: '0.00000017',
		},
		{
			id: '2',
			partnerName: 'Alex...hka',
			volume: '0.00000034',
			dateTime: '05.05.2025 02:57:36',
			profit: '0.00000017',
		},
		{
			id: '3',
			partnerName: 'Alex...hka',
			volume: '0.00000034',
			dateTime: '05.05.2025 02:57:36',
			profit: '0.00000017',
		},
		{
			id: '4',
			partnerName: 'Alex...hka',
			volume: '0.00000034',
			dateTime: '05.05.2025 02:57:36',
			profit: '0.00000017',
		},
		{
			id: '5',
			partnerName: 'Alex...hka',
			volume: '0.00000034',
			dateTime: '05.05.2025 02:57:36',
			profit: '0.00000017',
		},
		{
			id: '6',
			partnerName: 'Alex...hka',
			volume: '0.00000034',
			dateTime: '05.05.2025 02:57:36',
			profit: '0.00000017',
		},
		{
			id: '7',
			partnerName: 'Alex...hka',
			volume: '0.00000034',
			dateTime: '05.05.2025 02:57:36',
			profit: '0.00000017',
		},
	]

	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.left}>
					<h2 className={styles.blockTitle}>Выбор криптовалюты</h2>
					<Tabs
						tabs={tabs}
						activeTab={activeTab}
						onTabChange={handleTabChange}
						className={styles.walletTabs}
					/>

					{/* Контент кошелька - изменяется в зависимости от таба */}
					<div className={styles.cardWrapper}>
						<div className={styles.cardContent}>
							<div className={styles.cardTop}>
								<div className={styles.label}>
									<p>My partner account</p>
									<button onClick={openInfoModal} className={styles.cardTitle}>
										Информация
									</button>
								</div>
								<div className={styles.period}>
									<span>
										<span>{tabTexts.personalPartners}</span>
										<span>{partnerCount}</span>
									</span>
									{activeTab === 'network' && (
										<div className={styles.periodRight}>
											<button
												onClick={() => setIsTableActivateOpen(true)}
												className={styles.cardTitle}
											>
												Таблица активации
											</button>
										</div>
									)}
								</div>
							</div>
							<div className={styles.balance}>
								<span className={styles.balanceValue}>
									{currentContent.balanceUSDT}
								</span>
							</div>
							<div className={styles.cardBottom}>
								<div className={styles.cardBottomHeader}>
									<span>{currentContent.balanceXAUT}</span>
									<span>{currentContent.balancePaxg}</span>
								</div>
								<div className={styles.cardBottomFooter}>
									<div>
										<span>Цена 1</span>
										<SmallXaut />
										<span>- 3356.68 USDT</span>
									</div>
									<div>
										<span>Цена 1</span>
										<SmallPaxg />
										<span>- 3323.39 USDT</span>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.cardNav}>
							<div className={styles.bottomControls}>
								<button
									className={styles.silverButton}
									onClick={() => setIsMarketingSellOpen(true)}
								>
									<span>
										<SellIcon />
									</span>
									<span>Продать</span>
								</button>
								<button
									className={styles.goldButton}
									onClick={() => setIsRefModalOpen(true)}
								>
									<span>
										<RefIcon />
									</span>
									<span>Link</span>
								</button>
								<button
									className={styles.silverButton}
									onClick={() => setIsMarketingSendOpen(true)}
								>
									<span>
										<SendIcon />
									</span>
									<span>Отправить</span>
								</button>
							</div>
						</div>
					</div>

					<div className={styles.profitAllTime}>
						<div className={styles.topBlock}>
							<div className={styles.left}>
								<span>Заработано за все время</span>
								<span>{currentContent.balanceUSDT}</span>
							</div>
							<div className={styles.right}>
								<button>More</button>
							</div>
						</div>
						<div className={styles.bottomBlock}>
							<div className={styles.cardBottom}>
								<div className={styles.cardBottomHeader}>
									<span>{currentContent.balanceXAUT}</span>
									<span>{currentContent.balancePaxg}</span>
								</div>
								<div className={styles.cardBottomFooter}>
									<div>
										<span>Цена 1</span>
										<SmallXaut />
										<span>- 3356.68 USDT</span>
									</div>
									<div>
										<span>Цена 1</span>
										<SmallPaxg />
										<span>- 3323.39 USDT</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.historyTable}>
						<div className={styles.historyTableTop}>
							<h2 className={styles.blockTitle}>{tabTexts.partnerProgram}</h2>
							<div className={styles.gradientLine}></div>
						</div>
						<PartnerProfitTable data={partnerProfitData} />
					</div>
				</div>

				<div className={styles.right}>
					<div className={styles.rightHeader}>
						<h2 className={styles.blockTitle}>Информация</h2>
						<div className={styles.header}>
							<div className={styles.headerItemGold}>
								<span>Cуммарный объем:</span>
								<span>0.000034 XAUT</span>
							</div>
							<div className={styles.headerItem}>
								<span>{tabTexts.personalPartners}</span>
								<span>{partnerCount}</span>
							</div>
							<div className={styles.headerItem}>
								<span>Объем партнеров :</span>
								<span>0.000034 XAUT</span>
							</div>
							<div className={styles.headerItem}>
								<span>Объем партнеров:</span>
								<span>0.000034 PaxG</span>
							</div>
						</div>
					</div>
					{activeTab === 'network' && <LevelDropdown />}
					<div className={styles.historyTable}>
						<div className={styles.historyTableTop}>
							<h2 className={styles.blockTitle}>{tabTexts.invitedPartners}</h2>
							<div className={styles.gradientLine}></div>
						</div>
						<PartnersTable data={partnerData} />
					</div>
				</div>
			</div>

			{/* Модальные окна */}
			<NetworkInfoModal
				isOpen={isNetworkInfoOpen}
				onClose={() => setIsNetworkInfoOpen(false)}
			/>
			<PartnerInfoModal
				isOpen={isPartnerInfoOpen}
				onClose={() => setIsPartnerInfoOpen(false)}
			/>
			<QualificationTable
				isOpen={isTableActivateOpen}
				onClose={() => setIsTableActivateOpen(false)}
			/>
			<MarketingSendModal
				isOpen={isMarketingSendOpen}
				onClose={() => setIsMarketingSendOpen(false)}
				tokenBalance={currentContent.balanceXAUT}
			/>
			<MarketingSellModal
				isOpen={isMarketingSellOpen}
				onClose={() => setIsMarketingSellOpen(false)}
				tokenBalance={currentContent.balanceXAUT}
			/>
			<RefModal
				isOpen={isRefModalOpen}
				onClose={() => setIsRefModalOpen(false)}
			/>
		</div>
	)
}

export default MarketingScreen
