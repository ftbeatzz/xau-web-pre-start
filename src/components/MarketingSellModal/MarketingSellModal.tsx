import React, { useState } from 'react'
import styles from './MarketingSellModal.module.scss'
import Modal from '../Modal/Modal'
import LimitsIcon from '../../icons/LimitsIcon'
import SellIcon from '../../icons/SellIcon'
import SmallXaut from '../../icons/SmallXaut'

const NETWORKS = [
	{ key: 'trc20', label: 'Trc20' },
	{ key: 'erc20', label: 'Erc20' },
]

interface MarketingSellModalProps {
	isOpen: boolean
	onClose: () => void
	tokenBalance: string
}

const MarketingSellModal: React.FC<MarketingSellModalProps> = ({
	isOpen,
	onClose,
}) => {
	const [step, setStep] = useState(1)
	const [cryptoAmount, setCryptoAmount] = useState('')
	const [usdtAmount, setUsdtAmount] = useState('')
	const [selectedNetwork, setSelectedNetwork] = useState('trc20')
	const [walletAddress, setWalletAddress] = useState('')

	// Пример курса
	const price = 3356.68
	const currency = 'Xaut'
	const IconComponent = SmallXaut
	const inWork = '1,857,757.0035'
	// const available = '0.00000000'

	const handleCryptoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.replace(/[^0-9.]/g, '')
		setCryptoAmount(value)
		setUsdtAmount(value ? (parseFloat(value) * price).toFixed(2) : '')
	}

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title={`Продажа криптовалюты Xaut`}
		>
			<div className={styles.gradientLineTop}></div>
			<div className={styles.wrapper}>
				<div className={styles.tabContent}>
					<div className={styles.getHeader}>
						<div className={styles.limitsWrapper}>
							<p>
								После продажи криптовалюты <span>{currency}</span>, USDT будет
								отправлено на ваш адрес в течение нескольких минут.
							</p>
							<button className={styles.limitsBtn}>
								<span>
									<LimitsIcon />
								</span>
								<span>Лимиты</span>
							</button>
						</div>
					</div>

					{step === 1 ? (
						<form
							className={styles.formCard}
							onSubmit={e => {
								e.preventDefault()
								setStep(2)
							}}
						>
							<div className={styles.priceWrapper}>
								<p className={styles.priceLabel}>Курс</p>
								<div className={styles.price}>
									<span>1 {currency} </span>
									<span>{price} USDT</span>
								</div>
							</div>
							<div className={styles.row}>
								<span>Объем в работе</span>
							</div>
							<div className={styles.inputLike}>
								<span>
									{inWork} <IconComponent />
								</span>
							</div>
							<div className={styles.label}>Введите объем</div>
							<div className={styles.inputRow}>
								<input
									className={styles.input}
									placeholder='Объем'
									value={cryptoAmount}
									onChange={handleCryptoChange}
									name='amount'
								/>
								<button
									type='button'
									className={styles.maxBtn}
									onClick={() => setCryptoAmount(inWork.replace(/,/g, ''))}
								>
									Max
								</button>
							</div>
							<div className={styles.label}>Объем к получению</div>
							<input
								className={styles.input}
								placeholder='USDT'
								value={usdtAmount}
								readOnly
								name='usdt'
							/>
							<button type='submit' className={styles.sellBtn}>
								<SellIcon /> Продать
							</button>
							<div className={styles.historyBtnWrapper}>
								<button
									className={styles.historyBtn}
									onClick={() => {
										// Логика истории
										console.log('История продаж')
									}}
								>
									<div className={styles.gradientLine}></div>
									<span>История продаж</span>
									<div className={styles.gradientLine}></div>
								</button>
							</div>
						</form>
					) : (
						<div className={styles.confirmCard}>
							<div className={styles.valuesWrapper}>
								<div className={styles.value}>
									<span>Объем продажи</span>
									<span>
										{cryptoAmount} {currency}
									</span>
								</div>
								<div className={styles.value}>
									<span>К получению</span>
									<span>{usdtAmount} USDT</span>
								</div>
							</div>
							<div className={styles.label}>Выберите сеть</div>
							<div className={styles.networks}>
								{NETWORKS.map(net => (
									<button
										key={net.key}
										className={
											selectedNetwork === net.key ? styles.activeNetwork : ''
										}
										onClick={() => setSelectedNetwork(net.key)}
										type='button'
									>
										{net.label}
									</button>
								))}
							</div>
							<div className={styles.label}>
								Введите адрес кошелька{' '}
								{NETWORKS.find(n => n.key === selectedNetwork)?.label}
							</div>
							<input
								className={styles.input}
								placeholder='Адрес'
								value={walletAddress}
								onChange={e => setWalletAddress(e.target.value)}
								name='walletAddress'
							/>
							<button className={styles.sendBtn}>
								<span className={styles.sendIcon}>↑</span> Отправить
							</button>
							<div className={styles.historyBtnWrapper}>
								<button
									className={styles.historyBtn}
									onClick={() => {
										// Логика истории
										console.log('История продаж')
									}}
								>
									<div className={styles.gradientLine}></div>
									<span>История продаж</span>
									<div className={styles.gradientLine}></div>
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</Modal>
	)
}

export default MarketingSellModal
