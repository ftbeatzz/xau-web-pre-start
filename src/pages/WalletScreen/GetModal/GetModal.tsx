import React from 'react'
import styles from './GetModal.module.scss'
import Modal from '../../../components/Modal'
import Tabs from '../../../components/Tabs/Tabs'
import { useTabs } from '../../../hooks/useTabs'
import LimitsIcon from '../../../icons/LimitsIcon'
import CopyIcon from '../../../icons/CopyIcon'
import ShareIcon from '../../../icons/ShareIcon'
import type { OperationRow } from '../../../components/OperationsTable'

interface GetModalProps {
	isOpen: boolean
	onClose: () => void
	tokenName: string
	onOpenOperationsModal?: (
		data: { [key: string]: OperationRow[] },
		initialToken: string,
		type: 'buy' | 'sell' | 'withdraw' | 'deposit'
	) => void
}

const addresses = {
	xaut: {
		address: '0x1f9840a8f612b40569b44a876ca02c027c31ec12',
	},
	paxg: {
		address: '0x12gresaa8f612b40569b44a876ca02c124djs14fn',
	},
}

const GetModal: React.FC<GetModalProps> = ({
	isOpen,
	onClose,
	tokenName,
	onOpenOperationsModal,
}) => {
	const tabItems = [
		{ id: 'xaut', label: 'Xaut' },
		{ id: 'paxg', label: 'PaxG' },
	]
	const { tabs, activeTab, handleTabChange } = useTabs(
		tabItems,
		tokenName.toLowerCase()
	)
	const current = addresses[activeTab as 'xaut' | 'paxg']
	const [history] = React.useState<{ [key: string]: OperationRow[] }>({
		xaut: [],
		paxg: [
			{
				id: '1',
				type: 'Пополнение',
				amount: '+ 0.00000017',
				date: '05.05.2025 02:57:36',
				txId: 'i4...jd',
			},
			{
				id: '2',
				type: 'Пополнение',
				amount: '+ 0.00000017',
				date: '05.05.2025 02:57:36',
				txId: 'i4...jd',
			},
		],
	})

	// Обработчик открытия OperationsModal
	const handleOpenOperationsModal = () => {
		if (onOpenOperationsModal) {
			onOpenOperationsModal(history, activeTab, 'deposit')
		}
		// Закрываем GetModal при открытии OperationsModal
		onClose()
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose} title={`Выбор криптовалюты`}>
			<div className={styles.wrapper}>
				<Tabs
					tabs={tabs}
					activeTab={activeTab}
					onTabChange={handleTabChange}
					className={styles.tabs}
				/>
				<div className={styles.gradientLine}></div>
				<div className={styles.tabContent}>
					<div className={styles.getHeader}>
						<h2>
							Публичный адрес моего {tabs.find(t => t.id === activeTab)?.label}{' '}
							счета
						</h2>
						<div className={styles.limitsWrapper}>
							<p>
								На этот адрес можно отправлять криптовалюту{' '}
								<span>{tabs.find(t => t.id === activeTab)?.label}</span>,
								предварительно убедившись, что отправка идет через сеть{' '}
								<span>Ethereum</span>.
							</p>
							<button>
								<span>
									<LimitsIcon />
								</span>
								<span>Лимиты</span>
							</button>
						</div>
					</div>
					<div className={styles.getAdress}>
						<div className={styles.adress}>
							<span className={styles.qrCode}>
								<img src='/img/qr.png' alt='QR' />
							</span>
							<p>My main account</p>
							<span className={styles.addressValue}>{current.address}</span>
						</div>
						<div className={styles.controls}>
							<button className={styles.shareBtn}>
								<span>
									<ShareIcon />
								</span>
								<span>Поделиться</span>
							</button>
							<button
								className={styles.copyBtn}
								onClick={() => navigator.clipboard.writeText(current.address)}
							>
								<span>
									<CopyIcon />
								</span>
								<span>Скопировать</span>
							</button>
						</div>
					</div>
					<div className={styles.historyBtnWrapper}>
						<button
							className={styles.historyBtn}
							onClick={handleOpenOperationsModal}
						>
							<div className={styles.gradientLine}></div>
							<span>История Пополнений</span>
							<div className={styles.gradientLine}></div>
						</button>
					</div>
				</div>
			</div>
		</Modal>
	)
}

export default GetModal
