import React from 'react'
import Tabs from '../Tabs/Tabs'
import type { OperationRow } from '../OperationsTable'
import OperationsTable from '../OperationsTable'
import Modal from '../Modal/Modal'
import styles from './OperationsModal.module.scss'
import CloseIcon from '../../icons/CloseIcon'
import InfoIcon from '../../icons/InfoIcon'

export type OperationType = 'buy' | 'sell' | 'withdraw' | 'deposit'

interface OperationsModalProps {
	isOpen: boolean
	onClose: () => void
	type: OperationType
	data: { [key: string]: OperationRow[] } // { xaut: [...], paxg: [...] }
	initialToken?: string // 'xaut' или 'paxg'
	zIndex?: number
	hideTokenTabs?: boolean
}

const TITLES: Record<OperationType, string> = {
	buy: 'История покупок',
	sell: 'История продаж',
	withdraw: 'История выводов',
	deposit: 'История пополнений',
}

const OperationsModal: React.FC<OperationsModalProps> = ({
	isOpen,
	onClose,
	type,
	data,
	initialToken = 'xaut',
	zIndex = 1100,
	hideTokenTabs = false,
}) => {
	const tabs = [
		{ id: 'xaut', label: 'Xaut' },
		{ id: 'paxg', label: 'PaxG' },
	]
	const [activeToken, setActiveToken] = React.useState(initialToken)
	React.useEffect(() => {
		if (isOpen) setActiveToken(initialToken)
	}, [isOpen, initialToken])
	const currentData = data[activeToken] || []

	// Локальное состояние для модалки с информацией
	const [isInfoOpen, setIsInfoOpen] = React.useState(false)

	const renderInfoContent = () => {
		switch (type) {
			case 'withdraw':
				return (
					<div className={styles.infoContent}>
						<div className={styles.infoHeader}>
							<span>
								<InfoIcon />
							</span>
							<h3>Информация по выводу</h3>
							<div className={styles.gradientLine}></div>
						</div>
						<div className={styles.infoText}>
							<p>
								Вывод золотых активов в процессе автоматического запроса,
								который может занимать до 30 минут.
							</p>
							<p>
								Все запросы на вывод активов, автоматически проходят процедуру
								изъятия средств из фондов торгового оборота XAU.
							</p>
							<p>
								Сейчас ваш платеж ожидает поступления из коммерческого пула
								биржевого аккаунта XAU, и в течении 30 минут запрашиваемый объём
								золотых токенов поступит на указанный вами кошелек.
							</p>
						</div>
					</div>
				)
			case 'sell':
				return (
					<div className={styles.infoContent}>
						<div className={styles.infoHeader}>
							<span>
								<InfoIcon />
							</span>
							<h3>Информация по продаже</h3>
							<div className={styles.gradientLine}></div>
						</div>
						<div className={styles.infoText}>
							<p>
								Продажа золотых токенов в процессе автоматического запроса,
								который может занимать до 30 минут.
							</p>
							<p>
								Все запросы на продажу активов, автоматически проходят процедуру
								изъятия средств из фондов торгового оборота XAU.
							</p>
							<p>
								Сейчас ваш запрос на продажу токенов ожидает поступления из
								коммерческого пула биржевого аккаунта XAU, и в течении 30 минут,
								сумма в USDT поступит на указанный вами кошелек.
							</p>
						</div>
					</div>
				)
			case 'buy':
				return (
					<div className={styles.infoContent}>
						<div className={styles.infoHeader}>
							<span>
								<InfoIcon />
							</span>
							<h3>Информация по покупке</h3>
							<div className={styles.gradientLine}></div>
						</div>
						<div className={styles.infoText}>
							<p>
								Покупка золотых токенов в процессе автоматического запроса,
								который может занимать до 30 минут.
							</p>
							<p>
								Все финансовые поступления активов автоматически распределяются
								и направляются в фонды торгового оборота XAU.
							</p>
							<p>
								Сейчас ваш актив ожидает определения в один из коммерческих
								пулов XAU, процесс может занимать до 30 минут и в течении этого
								времени, объём будет доступен на вашем балансе для дальнейших
								действий и активации коммерции XAU.
							</p>
						</div>
					</div>
				)
			case 'deposit':
				return (
					<div className={styles.infoContent}>
						<div className={styles.infoHeader}>
							<span>
								<InfoIcon />
							</span>
							<h3>Информация по депозиту</h3>
							<div className={styles.gradientLine}></div>
						</div>
						<div className={styles.infoText}>
							<p>
								Депозит в процессе обработки автоматического запроса и в течении
								30 минут активы будут зачислены на ваш баланс.
							</p>
							<p>
								Все финансовые поступления активов автоматически распределяются
								и направляются в фонды торгового оборота XAU.
							</p>
							<p>
								Сейчас ваш актив ожидает определения в один из коммерческих
								пулов XAU, процесс может занимать до 30 минут и в течении этого
								времени, объём будет доступен на вашем балансе для дальнейших
								действий и активации коммерции XAU.
							</p>
						</div>
					</div>
				)
		}
	}

	// Закрытие по Escape
	React.useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEscape)
			document.body.style.overflow = 'hidden'
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

	if (!isOpen) return null

	return (
		<>
			<div
				className={styles.modalOverlay}
				onClick={handleBackdropClick}
				style={{ zIndex }}
			>
				<div className={styles.modal}>
					<div className={styles.modalHeader}>
						<h3 className={styles.modalTitle}>
							{`${TITLES[type]} ${
								tabs.find(t => t.id === activeToken)?.label || ''
							}`}
						</h3>
						<button className={styles.closeButton} onClick={onClose}>
							<CloseIcon />
						</button>
					</div>
					<div className={styles.modalContent}>
						{!hideTokenTabs && (
							<div className={styles.tabsWrapper}>
								<div className={styles.gradientLine}></div>
								<h3>Выбор криптовалюты</h3>
								<Tabs
									tabs={tabs}
									activeTab={activeToken}
									onTabChange={setActiveToken}
								/>
							</div>
						)}
						<div className={styles.content}>
							<OperationsTable
								data={currentData}
								token={activeToken as 'xaut' | 'paxg'}
								operationType={type}
							/>
						</div>
						<div className={styles.footer}>
							<button
								className={styles.infoButton}
								onClick={() => setIsInfoOpen(true)}
								type='button'
							>
								<span>
									Информация по{' '}
									{type === 'withdraw'
										? 'выводу'
										: type === 'sell'
										? 'продаже'
										: type === 'buy'
										? 'покупке'
										: 'депозиту'}
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Дополнительная модалка с информацией */}
			<Modal
				isOpen={isInfoOpen}
				onClose={() => setIsInfoOpen(false)}
				title={''}
				zIndex={zIndex + 100}
			>
				{renderInfoContent()}
			</Modal>
		</>
	)
}

export default OperationsModal
