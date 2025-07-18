import React, { useState } from 'react'
import styles from './SendModal.module.scss'
import Modal from '../../../components/Modal'
import Tabs from '../../../components/Tabs/Tabs'
import { useTabs } from '../../../hooks/useTabs'
import LimitsIcon from '../../../icons/LimitsIcon'
import SendIcon from '../../../icons/SendIcon'
import SmallXaut from '../../../icons/SmallXaut'
import SmallPaxg from '../../../icons/SmallPaxg'

interface SendModalProps {
	isOpen: boolean
	onClose: () => void
	tokenName: string
	tokenBalance: string
}

const SendModal: React.FC<SendModalProps> = ({
	isOpen,
	onClose,
	tokenName,
}) => {
	const tabItems = [
		{ id: 'xaut', label: 'Xaut' },
		{ id: 'paxg', label: 'PaxG' },
	]
	const { tabs, activeTab, handleTabChange } = useTabs(
		tabItems,
		tokenName.toLowerCase()
	)

	const [amount, setAmount] = useState('')
	const [address, setAddress] = useState('')
	const [code, setCode] = useState('')

	// Примерные данные, заменить на реальные при интеграции
	const inWork = activeTab === 'xaut' ? '1,857,757.0035' : '2,157,757.0035'
	const available = activeTab === 'xaut' ? '0.00000000' : '0.00000000'
	const currency = activeTab === 'xaut' ? 'XAUT' : 'PaxG'
	const IconComponent = activeTab === 'xaut' ? SmallXaut : SmallPaxg

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// TODO: логика отправки
		console.log('Отправка', amount, currency, address, code)
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
						<h2>Отправка криптовалюты {currency}</h2>
						<div className={styles.limitsWrapper}>
							<p>
								Вы отправляете криптовалюту <span>{currency}</span>, убедитесь,
								что отправка идет через сеть <span>Ethereum</span>.
							</p>
							<button className={styles.limitsBtn}>
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
						<div className={styles.row}>
							<span>Объем в работе</span>
							<span>72ч: 00м: 00с</span>
						</div>
						<div className={styles.inputLike}>
							<span>
								{inWork} <IconComponent />
							</span>
						</div>
						<div className={styles.label}>Доступный объем</div>
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
								onClick={() => setAmount(inWork.replace(/,/g, ''))}
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
						<div className={styles.label}>Введите код подтверждения</div>
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
						</div>
						<button type='submit' className={styles.sendBtn}>
							<span className={styles.sendIcon}>
								<SendIcon />
							</span>{' '}
							Отправить
						</button>
						<div className={styles.historyBtnWrapper}>
							<button
								className={styles.historyBtn}
								onClick={() => {
									// Логика истории
									console.log('История выводов')
								}}
							>
								<div className={styles.gradientLine}></div>
								<span>История выводов</span>
								<div className={styles.gradientLine}></div>
							</button>
						</div>
					</form>
				</div>
			</div>
		</Modal>
	)
}

export default SendModal
