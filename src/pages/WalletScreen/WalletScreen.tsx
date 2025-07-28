import React, { useCallback } from 'react'
import styles from './WalletScreen.module.scss'
import Tabs from '../../components/Tabs/Tabs'
import { useTabs } from '../../hooks/useTabs'
import type { TabItem } from '../../components/Tabs/Tabs'
import SmallXaut from '../../icons/SmallXaut'
import SmallPaxg from '../../icons/SmallPaxg'
import StartIcon from '../../icons/StartIcon'
import GetIcon from '../../icons/GetIcon'
import BuyIcon from '../../icons/BuyIcon'
import SellIcon from '../../icons/SellIcon'
import SendIcon from '../../icons/SendIcon'
import XautChart from './Chart/XautChart'
import PaxgChart from './Chart/PaxgChart'
import HistoryTable, {
	type TransactionData,
} from '../../components/HistoryTable/HistoryTable'
import GetModal from './GetModal/GetModal'
import BuyModal from './BuyModal/BuyModal'
import SellModal from './SellModal/SellModal'
import SendModal from './SendModal/SendModal'
import OperationsModal from '../../components/OperationsModal'
import LimitsModal from '../../components/LimitsModal'
import type { OperationRow } from '../../components/OperationsTable'

const WalletScreen: React.FC = () => {
	const walletTabs: TabItem[] = [
		{ id: 'xaut', label: 'Xaut' },
		{ id: 'paxg', label: 'PaxG' },
	]

	const { tabs, activeTab, handleTabChange } = useTabs(walletTabs, 'xaut')

	// Состояние для модальных окон
	const [modalState, setModalState] = React.useState({
		get: false,
		buy: false,
		sell: false,
		send: false,
	})

	// Состояние для OperationsModal
	const [operationsModalState, setOperationsModalState] = React.useState({
		isOpen: false,
		data: {} as { [key: string]: OperationRow[] },
		initialToken: 'xaut',
		type: 'withdraw' as 'buy' | 'sell' | 'withdraw' | 'deposit',
	})

	// Состояние для LimitsModal
	const [limitsModalState, setLimitsModalState] = React.useState({
		isOpen: false,
		title: '',
		content: null as React.ReactNode,
	})

	// Обработчики для открытия/закрытия модальных окон
	const openModal = useCallback((modalType: keyof typeof modalState) => {
		setModalState(prev => ({ ...prev, [modalType]: true }))
	}, [])

	const closeModal = useCallback((modalType: keyof typeof modalState) => {
		setModalState(prev => ({ ...prev, [modalType]: false }))
	}, [])

	// Обработчик открытия OperationsModal из всех модальных окон
	const handleOpenOperationsModal = useCallback(
		(
			data: { [key: string]: OperationRow[] },
			initialToken: string,
			type: 'buy' | 'sell' | 'withdraw' | 'deposit' = 'withdraw'
		) => {
			setOperationsModalState({
				isOpen: true,
				data,
				initialToken,
				type,
			})
		},
		[]
	)

	// Обработчик закрытия OperationsModal
	const handleCloseOperationsModal = useCallback(() => {
		setOperationsModalState(prev => ({ ...prev, isOpen: false }))
	}, [])

	// Обработчик открытия LimitsModal
	const handleOpenLimitsModal = useCallback(
		(title: string, content: React.ReactNode) => {
			setLimitsModalState({
				isOpen: true,
				title,
				content,
			})
		},
		[]
	)

	// Обработчик закрытия LimitsModal
	const handleCloseLimitsModal = useCallback(() => {
		setLimitsModalState(prev => ({ ...prev, isOpen: false }))
	}, [])

	// Данные для истории сделок Xaut
	const xautTransactionData: TransactionData[] = []

	// Данные для истории сделок PaxG
	const paxgTransactionData: TransactionData[] = [
		{
			id: '1',
			startDateTime: '2025-05-05 02:57:36',
			type: 'PaxG Trade',
			volumeXaut: '0.00000017',
			profit: '0.00000017',
			orderId: '67...85',
			endDateTime: '2025-05-05 02:59:36',
		},
		{
			id: '2',
			startDateTime: '2025-05-05 02:57:36',
			type: 'PaxG Commerce',
			volumeXaut: '0.00000017',
			profit: '0.00000017',
			orderId: '67...85',
			endDateTime: '2025-05-05 02:59:36',
		},
		{
			id: '3',
			startDateTime: '2025-05-05 02:57:36',
			type: 'PaxG Commerce',
			volumeXaut: '0.00000017',
			profit: '0.00000017',
			orderId: '67...85',
			endDateTime: '2025-05-05 02:59:36',
		},
		{
			id: '4',
			startDateTime: '2025-05-05 02:57:36',
			type: 'PaxG Commerce',
			volumeXaut: '0.00000017',
			profit: '0.00000017',
			orderId: '67...85',
			endDateTime: '2025-05-05 02:59:36',
		},
		{
			id: '5',
			startDateTime: '2025-05-05 02:57:36',
			type: 'PaxG Commerce',
			volumeXaut: '0.00000017',
			profit: '0.00000017',
			orderId: '67...85',
			endDateTime: '2025-05-05 02:59:36',
		},
		{
			id: '6',
			startDateTime: '2025-05-05 02:57:36',
			type: 'PaxG Commerce',
			volumeXaut: '0.00000017',
			profit: '0.00000017',
			orderId: '67...85',
			endDateTime: '2025-05-05 02:59:36',
		},
		{
			id: '7',
			startDateTime: '2025-05-05 02:57:36',
			type: 'PaxG Commerce',
			volumeXaut: '0.00000017',
			profit: '0.00000017',
			orderId: '67...85',
			endDateTime: '2025-05-05 02:59:36',
		},
		{
			id: '8',
			startDateTime: '2025-05-05 02:57:36',
			type: 'PaxG Commerce',
			volumeXaut: '0.00000017',
			profit: '0.00000017',
			orderId: '67...85',
			endDateTime: '2025-05-05 02:59:36',
		},
		{
			id: '9',
			startDateTime: '2025-05-05 02:57:36',
			type: 'PaxG Commerce',
			volumeXaut: '0.00000017',
			profit: '0.00000017',
			orderId: '67...85',
			endDateTime: '2025-05-05 02:59:36',
		},
		{
			id: '10',
			startDateTime: '2025-05-05 02:57:36',
			type: 'PaxG Commerce',
			volumeXaut: '0.00000017',
			profit: '0.00000017',
			orderId: '67...85',
			endDateTime: '2025-05-05 02:59:36',
		},
		{
			id: '11',
			startDateTime: '2025-05-05 02:57:36',
			type: 'PaxG Commerce',
			volumeXaut: '0.00000017',
			profit: '0.00000017',
			orderId: '67...85',
			endDateTime: '2025-05-05 02:59:36',
		},
		{
			id: '12',
			startDateTime: '2025-05-05 02:57:36',
			type: 'PaxG Commerce',
			volumeXaut: '0.00000017',
			profit: '0.00000017',
			orderId: '67...85',
			endDateTime: '2025-05-05 02:59:36',
		},
		{
			id: '13',
			startDateTime: '2025-05-05 02:57:36',
			type: 'PaxG Commerce',
			volumeXaut: '0.00000017',
			profit: '0.00000017',
			orderId: '67...85',
			endDateTime: '2025-05-05 02:59:36',
		},
		{
			id: '14',
			startDateTime: '2025-05-05 02:57:36',
			type: 'PaxG Commerce',
			volumeXaut: '0.00000017',
			profit: '0.00000017',
			orderId: '67...85',
			endDateTime: '2025-05-05 02:59:36',
		},
		{
			id: '15',
			startDateTime: '2025-05-05 02:57:36',
			type: 'PaxG Commerce',
			volumeXaut: '0.00000017',
			profit: '0.00000017',
			orderId: '67...85',
			endDateTime: '2025-05-05 02:59:36',
		},
		{
			id: '16',
			startDateTime: '2025-05-05 02:57:36',
			type: 'PaxG Commerce',
			volumeXaut: '0.00000017',
			profit: '0.00000017',
			orderId: '67...85',
			endDateTime: '2025-05-05 02:59:36',
		},
	]

	// Контент для разных табов
	const tabContent = {
		xaut: {
			title: 'Xaut',
			balance: '0.00000000 XAUT',
			balanceUSDT: '0.0000000$',
			chartData: 'Xaut Chart Data',
			price: '3356.68 USDT',
			icon: SmallXaut,
		},
		paxg: {
			title: 'PaxG',
			balance: '567.89000000 PAXG',
			balanceUSDT: '1377.0004235$',
			chartData: 'PaxG Chart Data',
			price: '2423.45 USDT',
			icon: SmallPaxg,
		},
	}

	const currentContent = tabContent[activeTab as keyof typeof tabContent]
	const IconComponent = currentContent.icon

	return (
		<>
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
										<p>My main account</p>
										<span className={styles.cardTitle}>
											{currentContent.title}
										</span>
									</div>
									<div className={styles.period}>
										<span>Коммерческий период</span>
										<span> 72ч:00м:00c </span>
									</div>
								</div>
								<div className={styles.balance}>
									<span className={styles.balanceValue}>
										{currentContent.balanceUSDT}
									</span>
								</div>
								<div className={styles.cardBottom}>
									<div className={styles.cardBottomLeft}>
										<span>{currentContent.balance}</span>
										<div>
											<span>Цена 1</span>
											<IconComponent />
											<span>- {currentContent.price}</span>
										</div>
									</div>
									<div className={styles.cardBottomRight}>
										<button>
											<span>
												<StartIcon />
											</span>
											<span>Старт</span>
										</button>
									</div>
								</div>
							</div>
							<div className={styles.cardNav}>
								<div className={styles.topTxt}>
									<div>
										<p>{currentContent.title}</p>
										<p>{currentContent.balance}</p>
									</div>
									<div>
										<p>Коммерческая сделка</p>
										<span>Не найдена</span>
									</div>
								</div>
								<div className={styles.bottomControls}>
									<button onClick={() => openModal('get')}>
										<span>
											<GetIcon />
										</span>
										<span>Получить</span>
									</button>
									<button onClick={() => openModal('buy')}>
										<span>
											<BuyIcon />
										</span>
										<span>Купить</span>
									</button>
									<button onClick={() => openModal('sell')}>
										<span>
											<SellIcon />
										</span>
										<span>Продать</span>
									</button>
									<button onClick={() => openModal('send')}>
										<span>
											<SendIcon />
										</span>
										<span>Отправить</span>
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.right}>
						<h2 className={styles.blockTitle}>График онлайн</h2>
						<div className={styles.chart}>
							{/* Контент графика - изменяется в зависимости от таба */}
							{activeTab === 'xaut' && <XautChart />}
							{activeTab === 'paxg' && <PaxgChart />}
						</div>
					</div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.historyTable}>
						<div className={styles.historyTableTop}>
							<h2 className={styles.blockTitle}>История комерческих сделок</h2>
							<div className={styles.gradientLine}></div>
						</div>
						<HistoryTable
							data={
								activeTab === 'paxg' ? paxgTransactionData : xautTransactionData
							}
							isEmpty={
								activeTab === 'paxg'
									? paxgTransactionData.length === 0
									: xautTransactionData.length === 0
							}
							activeTab={activeTab as 'xaut' | 'paxg'}
						/>
					</div>
				</div>
			</div>
			<GetModal
				isOpen={modalState.get}
				onClose={() => closeModal('get')}
				tokenName={currentContent.title}
				onOpenOperationsModal={handleOpenOperationsModal}
				onOpenLimitsModal={handleOpenLimitsModal}
			/>
			<BuyModal
				isOpen={modalState.buy}
				onClose={() => closeModal('buy')}
				tokenName={currentContent.title}
				onOpenOperationsModal={handleOpenOperationsModal}
				onOpenLimitsModal={handleOpenLimitsModal}
			/>
			<SellModal
				isOpen={modalState.sell}
				onClose={() => closeModal('sell')}
				tokenName={currentContent.title}
				tokenBalance={currentContent.balance}
				onOpenOperationsModal={handleOpenOperationsModal}
				onOpenLimitsModal={handleOpenLimitsModal}
			/>
			<SendModal
				isOpen={modalState.send}
				onClose={() => closeModal('send')}
				tokenName={currentContent.title}
				tokenBalance={currentContent.balance}
				onOpenOperationsModal={handleOpenOperationsModal}
				onOpenLimitsModal={handleOpenLimitsModal}
			/>
			<OperationsModal
				isOpen={operationsModalState.isOpen}
				onClose={handleCloseOperationsModal}
				type={operationsModalState.type}
				data={operationsModalState.data}
				initialToken={operationsModalState.initialToken}
			/>
			<LimitsModal
				isOpen={limitsModalState.isOpen}
				onClose={handleCloseLimitsModal}
				title={limitsModalState.title}
				content={limitsModalState.content}
			/>
		</>
	)
}

export default WalletScreen
