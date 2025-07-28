import React, { useState } from 'react'
import styles from './BuyModal.module.scss'
import Modal from '../../../components/Modal'
import Tabs from '../../../components/Tabs/Tabs'
import { useTabs } from '../../../hooks/useTabs'
import BuyIcon from '../../../icons/BuyIcon'
import LimitsIcon from '../../../icons/LimitsIcon'
import ShareIcon from '../../../icons/ShareIcon'
import CopyIcon from '../../../icons/CopyIcon'
import type { OperationRow } from '../../../components/OperationsTable'
import YellowArrowIcon from '../../../icons/YellowArrowIcon'
import WarningIcon from '../../../icons/WarningIcon'

const NETWORKS = [
	{ key: 'trc20', label: 'Trc20' },
	{ key: 'erc20', label: 'Erc20' },
	{ key: 'ton', label: 'TON' },
]

interface BuyModalProps {
	isOpen: boolean
	onClose: () => void
	tokenName: string
	onOpenOperationsModal?: (
		data: { [key: string]: OperationRow[] },
		initialToken: string,
		type: 'buy' | 'sell' | 'withdraw' | 'deposit'
	) => void
	onOpenLimitsModal?: (title: string, content: React.ReactNode) => void
}

const prices = {
	xaut: 3356.68,
	paxg: 2423.45,
}

const BuyModal: React.FC<BuyModalProps> = ({
	isOpen,
	onClose,
	tokenName,
	onOpenOperationsModal,
	onOpenLimitsModal,
}) => {
	const tabItems = [
		{ id: 'xaut', label: 'Xaut' },
		{ id: 'paxg', label: 'PaxG' },
	]
	const { tabs, activeTab, handleTabChange } = useTabs(
		tabItems,
		tokenName.toLowerCase()
	)

	const [step, setStep] = useState(1)
	const [usdtAmount, setUsdtAmount] = useState('')
	const [cryptoAmount, setCryptoAmount] = useState('')
	const [selectedNetwork, setSelectedNetwork] = useState('erc20')
	const [isSwapped, setIsSwapped] = useState(false)
	// Пример истории для каждой валюты
	const [history] = useState<{ [key: string]: OperationRow[] }>({
		xaut: [],
		paxg: [
			{
				id: '1',
				type: 'Покупка',
				amount: '+ 0.00000017',
				date: '05.05.2025 02:57:36',
				txId: 'i4...jd',
			},
			{
				id: '2',
				type: 'Покупка',
				amount: '+ 0.00000017',
				date: '05.05.2025 02:57:36',
				txId: 'i4...jd',
			},
		],
	})

	// Обработчик открытия OperationsModal
	const handleOpenOperationsModal = () => {
		if (onOpenOperationsModal) {
			onOpenOperationsModal(history, activeTab, 'buy')
		}
		// Закрываем BuyModal при открытии OperationsModal
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
							<h4>Лимиты для активации коммерции XAU.</h4>
							<div className={styles.gradientLine}></div>
						</div>
						<div className={styles.limitsTxt}>
							<p>
								Для активации коммерческого периода с компанией XAU и получения
								прибыли в активах PAX Gold и Tether Gold, вам необходимо иметь
								на балансе объём не менее 100 USDT в эквиваленте PAX Gold –
								0.03245/100 USDT или Tether Gold.
							</p>
							<p>
								Пополните ваш кошелек необходимым объёмом или купите золотой
								стандарт на нашей платформе, с помощью USDT, активируйте
								коммерческий период и получайте финансовую выгоду.
							</p>
							<p>
								Исключением являются подарочные токены, если вы получили
								подарочные токены в эквиваленте 25 USDT, то эти активы поступают
								в коммерцию и начинают работу автоматически.
							</p>
						</div>
					</div>
				</div>
			)
			onOpenLimitsModal(`Лимиты покупки ${currency}`, limitsContent)
		}
		// Закрываем BuyModal при открытии LimitsModal
		onClose()
	}

	// Пример курса
	const price = prices[activeTab as keyof typeof prices]
	const isXaut = activeTab === 'xaut'
	const currency = isXaut ? 'Xaut' : 'PaxG'

	// Пример адресов для каждой сети
	const addresses: Record<string, string> = {
		trc20: isXaut
			? 'TQ1xXyZ2a3b4c5d6e7f8g9h0j1k2l3m4n5o6p7q8r9' // Xaut TRC20
			: 'TP2yYzA3b4c5d6e7f8g9h0j1k2l3m4n5o6p7q8r9s0', // PaxG TRC20
		erc20: isXaut
			? '0x8e12aB3C4d5E6F7890aBcD1234567890eF123456' // Xaut ERC20
			: '0x7f12bC3D4e5F6A7890bCdE2345678901fE234567', // PaxG ERC20
		ton: isXaut
			? '0x8e12aB3C4d5E6F7890aBcD1234567142324324324123' // Xaut TON
			: '0x7f12bC3D4e5F6A7890bCdE2345678901fE212312331243', // PaxG TON
	}
	const address = addresses[selectedNetwork]
	const qrCode = '/img/qr.png' // Можно сделать разным для каждой валюты

	const handleInput1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.replace(/[^0-9.]/g, '')
		if (isSwapped) {
			setCryptoAmount(value)
			setUsdtAmount(value ? (parseFloat(value) * price).toFixed(2) : '')
		} else {
			setUsdtAmount(value)
			setCryptoAmount(value ? (parseFloat(value) / price).toFixed(4) : '')
		}
	}
	const handleInput2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.replace(/[^0-9.]/g, '')
		if (isSwapped) {
			setUsdtAmount(value)
			setCryptoAmount(value ? (parseFloat(value) / price).toFixed(4) : '')
		} else {
			setCryptoAmount(value)
			setUsdtAmount(value ? (parseFloat(value) * price).toFixed(2) : '')
		}
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
						<h2>Покупка криптовалюты {currency}</h2>
						<div className={styles.limitsWrapper}>
							<p>
								После покупки криптовалюты <span>{currency}</span>, на ваш
								кошелек будет зачислен объем.
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
							{!isSwapped ? (
								<>
									<div className={styles.label}>Введите объем USDT</div>
									<input
										className={styles.input}
										placeholder='USDT'
										value={usdtAmount}
										onChange={handleInput1Change}
										name='usdt'
									/>
								</>
							) : (
								<>
									<div className={styles.label}>Введите объем {currency}</div>
									<input
										className={styles.input}
										placeholder={currency}
										value={cryptoAmount}
										onChange={handleInput1Change}
										name='crypto'
									/>
								</>
							)}
							<div
								className={styles.switchBtn}
								onClick={() => setIsSwapped(s => !s)}
								style={{ cursor: 'pointer' }}
							>
								<div>
									<span>
										<YellowArrowIcon />
									</span>
									<span>
										<YellowArrowIcon />
									</span>
								</div>
							</div>
							{!isSwapped ? (
								<>
									<div className={styles.label}>Объем {currency}</div>
									<input
										className={styles.input}
										placeholder={currency}
										value={cryptoAmount}
										onChange={handleInput2Change}
										name='crypto'
									/>
								</>
							) : (
								<>
									<div className={styles.label}>Объем USDT</div>
									<input
										className={styles.input}
										placeholder='USDT'
										value={usdtAmount}
										onChange={handleInput2Change}
										name='usdt'
									/>
								</>
							)}
							<button type='submit' className={styles.buyBtn}>
								<BuyIcon /> Купить
							</button>
							<div className={styles.historyBtnWrapper}>
								<button
									type='button'
									className={styles.historyBtn}
									onClick={handleOpenOperationsModal}
								>
									<div className={styles.gradientLine}></div>
									<span>История покупки</span>
									<div className={styles.gradientLine}></div>
								</button>
							</div>
						</form>
					) : (
						<div className={styles.confirmCard}>
							<div className={styles.valuesWrapper}>
								<div className={styles.row}>
									<span>Объем покупки</span>
									<span>
										{cryptoAmount} {currency}
									</span>
								</div>
								<div className={styles.row}>
									<span>К оплате</span>
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
							<div className={styles.qrWrapper}>
								<img src={qrCode} alt='QR' />
							</div>
							<div className={styles.address}>{address}</div>
							<div className={styles.controls}>
								<button className={styles.shareBtn}>
									<span>
										<ShareIcon />
									</span>
									<span>Поделиться</span>
								</button>
								<button className={styles.copyBtn}>
									<span>
										<CopyIcon />
									</span>
									<span>Скопировать</span>
								</button>
							</div>
							<div className={styles.historyBtnWrapper}>
								<button
									className={styles.historyBtn}
									onClick={handleOpenOperationsModal}
								>
									<div className={styles.gradientLine}></div>
									<span>История покупки</span>
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

export default BuyModal
