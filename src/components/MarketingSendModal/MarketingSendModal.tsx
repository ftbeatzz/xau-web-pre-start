import React, { useState } from 'react'
import styles from './MarketingSendModal.module.scss'
import Modal from '../Modal/Modal'
import LimitsIcon from '../../icons/LimitsIcon'
import SendIcon from '../../icons/SendIcon'
import SmallXaut from '../../icons/SmallXaut'
import type { OperationRow } from '../OperationsTable'
import WarningIcon from '../../icons/WarningIcon'

interface MarketingSendModalProps {
	isOpen: boolean
	onClose: () => void
	tokenBalance: string
	onOpenOperationsModal?: (
		data: { [key: string]: OperationRow[] },
		initialToken: string,
		type: 'buy' | 'sell' | 'withdraw' | 'deposit'
	) => void
	onOpenLimitsModal?: (title: string, content: React.ReactNode) => void
}

const MarketingSendModal: React.FC<MarketingSendModalProps> = ({
	isOpen,
	onClose,
	onOpenOperationsModal,
	onOpenLimitsModal,
}) => {
	const [amount, setAmount] = useState('')
	const [address, setAddress] = useState('')
	const [code] = useState('')
	const [history] = useState<{ [key: string]: OperationRow[] }>({
		xaut: [
			{
				id: '1',
				type: 'Вывод',
				amount: '- 0.00000017',
				date: '05.05.2025 02:57:36',
				txId: 'i4...jd',
			},
			{
				id: '2',
				type: 'Вывод',
				amount: '- 0.00000017',
				date: '05.05.2025 02:57:36',
				txId: 'i4...jd',
			},
			{
				id: '3',
				type: 'Вывод',
				amount: '- 0.00000017',
				date: '05.05.2025 02:57:36',
				txId: 'i4...jd',
			},
			{
				id: '4',
				type: 'Вывод',
				amount: '- 0.00000017',
				date: '05.05.2025 02:57:36',
				txId: 'i4...jd',
			},
			{
				id: '5',
				type: 'Вывод',
				amount: '- 0.00000017',
				date: '05.05.2025 02:57:36',
				txId: 'i4...jd',
			},
			{
				id: '6',
				type: 'Вывод',
				amount: '- 0.00000017',
				date: '05.05.2025 02:57:36',
				txId: 'i4...jd',
			},
			{
				id: '7',
				type: 'Вывод',
				amount: '- 0.00000017',
				date: '05.05.2025 02:57:36',
				txId: 'i4...jd',
			},
		],
	})

	// Обработчик открытия OperationsModal
	const handleOpenOperationsModal = () => {
		if (onOpenOperationsModal) {
			onOpenOperationsModal(history, 'xaut', 'withdraw')
		}
		// Закрываем MarketingSendModal при открытии OperationsModal
		onClose()
	}

	// Обработчик открытия LimitsModal
	const handleOpenLimitsModal = () => {
		if (onOpenLimitsModal) {
			const limitsContent = (
				<div>
					<div className={styles.limitsSection}>
						<div className={styles.limitsSectionHeader}>
							<div className={styles.warningIcon}>
								<WarningIcon />
							</div>
							<h4>Лимиты для вывода.</h4>
							<div className={styles.gradientLine}></div>
						</div>
						<div className={styles.limitsTxt}>
							<p>
								Минимальный объём для обмена и снятия составляет: 100 USDT в
								эквиваленте PAX Gold – 0.03245/100 USDT или Tether Gold.
							</p>
							<p>
								Как для инвестиционных активов, так и для активов, полученных по
								маркетинговым и другим программам.
							</p>
						</div>
					</div>
				</div>
			)
			onOpenLimitsModal('Лимиты для вывода', limitsContent)
		}
		// Закрываем MarketingSendModal при открытии LimitsModal
		onClose()
	}

	// Примерные данные, заменить на реальные при интеграции
	const available = '0.00000000'
	const currency = 'XAUT'
	const IconComponent = SmallXaut

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// TODO: логика отправки
		console.log('Отправка', amount, currency, address, code)
		onClose()
	}

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title={``}
		>
			<div className={styles.wrapper}>
				<div className={styles.tabContent}>
					<div className={styles.getHeader}>
						<h2>Отправка криптовалюты {currency}</h2>
						<div className={styles.limitsWrapper}>
							<p>
								Вы отправляете криптовалюту <span>{currency}</span>, убедитесь,
								что отправка идет через сеть <span>Ethereum</span>.
							</p>
							<button
								className={styles.limitsBtn}
								onClick={handleOpenLimitsModal}
								type='button'
							>
								<span>
									<LimitsIcon />
								</span>
								<span>Лимиты</span>
							</button>
						</div>
					</div>

					<form
						className={styles.formCard}
						onSubmit={handleSubmit}
						autoComplete='off'
					>
						{/* <div className={styles.row}>
							<span>Объем в работе</span>
							<span>72ч: 00м: 00с</span>
						</div>
						<div className={styles.inputLike}>
							<span>
								{inWork} <IconComponent />
							</span>
						</div> */}
						<div className={styles.label}>Объем Xaut</div>
						<div className={styles.inputLike}>
							<span>
								{available} <IconComponent />
							</span>
						</div>
						<div className={styles.label}>Введите объем</div>
						<div className={styles.inputRow}>
							<input
								className={styles.input}
								placeholder='Объем'
								name='amount'
								value={amount}
								onChange={e => setAmount(e.target.value)}
							/>
							<button
								type='button'
								className={styles.maxBtn}
								onClick={() => setAmount(available)}
							>
								Max
							</button>
						</div>
						<div className={styles.label}>Введите адрес кошелька</div>
						<input
							className={styles.input}
							placeholder='Адрес'
							name='address'
							value={address}
							onChange={e => setAddress(e.target.value)}
						/>
						{/* <div className={styles.label}>Введите код подтверждения</div>
						<div className={styles.inputRow}>
							<input
								className={styles.input}
								placeholder='Код'
								name='code'
								value={code}
								onChange={e => setCode(e.target.value)}
							/>
							<button type='button' className={styles.codeBtn}>
								Получить
							</button>
						</div> */}
						<button type='submit' className={styles.sendBtn}>
							<span className={styles.sendIcon}>
								<SendIcon />
							</span>{' '}
							Отправить
						</button>
						<div className={styles.historyBtnWrapper}>
							<button
								type='button'
								className={styles.historyBtn}
								onClick={handleOpenOperationsModal}
							>
								<div className={styles.gradientLine}></div>
								<span>История выводов</span>
								<div className={styles.gradientLine}></div>
							</button>
						</div>
					</form>
				</div>
			</div>
			{/* OperationsModal
				isOpen={operationsModalOpen}
				onClose={() => setOperationsModalOpen(false)}
				type={'withdraw'}
				data={history}
				initialToken={'xaut'}
			/> */}
		</Modal>
	)
}

export default MarketingSendModal
