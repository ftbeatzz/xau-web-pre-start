import React, { useState } from 'react'
import styles from './CommerceLoan.module.scss'
import Tabs from '../../../components/Tabs/Tabs'
import LoanHistory from '../../../components/LoanHistory'
import type { LoanHistoryData } from '../../../components/LoanHistory'

// Данные для табов криптовалют
const cryptoCurrencyTabs = [
	{ id: 'xaut', label: 'Tether Gold (Xaut)' },
	{ id: 'paxg', label: 'Pax Gold (PaxG)' },
]

// Данные для истории займов PaxG
const loanHistoryData: LoanHistoryData[] = [
	{
		id: '1',
		time: '2025-05-28 22:45:02',
		nickname: 'Alexander2024Toppushka',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '2',
		time: '2025-05-28 22:45:18',
		nickname: 'VeryLongNicknameThatWillBeTruncated',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '3',
		time: '2025-05-28 22:46:09',
		nickname: 'CryptoTrader2024',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '4',
		time: '2025-05-28 22:47:02',
		nickname: 'SuperLongNicknameForTestingTruncation',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '5',
		time: '2025-05-28 22:47:45',
		nickname: 'Alexander2024Toppushka',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '6',
		time: '2025-05-28 22:48:42',
		nickname: 'AnotherVeryLongNicknameHere',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '7',
		time: '2025-05-28 22:49:30',
		nickname: 'CryptoTrader2024',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '8',
		time: '2025-05-28 22:50:15',
		nickname: 'ExtremelyLongNicknameForDemonstration',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '9',
		time: '2025-05-28 22:51:02',
		nickname: 'Alexander2024Toppushka',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '10',
		time: '2025-05-28 22:52:18',
		nickname: 'VeryLongNicknameThatWillBeTruncated',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '11',
		time: '2025-05-28 22:53:05',
		nickname: 'CryptoTrader2024',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '12',
		time: '2025-05-28 22:54:12',
		nickname: 'SuperLongNicknameForTestingTruncation',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '13',
		time: '2025-05-28 22:55:30',
		nickname: 'Alexander2024Toppushka',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '14',
		time: '2025-05-28 22:56:45',
		nickname: 'AnotherVeryLongNicknameHere',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '15',
		time: '2025-05-28 22:57:18',
		nickname: 'CryptoTrader2024',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '16',
		time: '2025-05-28 22:58:33',
		nickname: 'ExtremelyLongNicknameForDemonstration',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '17',
		time: '2025-05-28 22:59:07',
		nickname: 'Alexander2024Toppushka',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '18',
		time: '2025-05-28 23:00:15',
		nickname: 'VeryLongNicknameThatWillBeTruncated',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '19',
		time: '2025-05-28 23:01:22',
		nickname: 'CryptoTrader2024',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '20',
		time: '2025-05-28 23:02:45',
		nickname: 'SuperLongNicknameForTestingTruncation',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '21',
		time: '2025-05-28 23:03:18',
		nickname: 'Alexander2024Toppushka',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '22',
		time: '2025-05-28 23:04:33',
		nickname: 'AnotherVeryLongNicknameHere',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '23',
		time: '2025-05-28 23:05:07',
		nickname: 'CryptoTrader2024',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '24',
		time: '2025-05-28 23:06:15',
		nickname: 'ExtremelyLongNicknameForDemonstration',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '25',
		time: '2025-05-28 23:07:22',
		nickname: 'Alexander2024Toppushka',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '26',
		time: '2025-05-28 23:08:45',
		nickname: 'VeryLongNicknameThatWillBeTruncated',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '27',
		time: '2025-05-28 23:09:18',
		nickname: 'CryptoTrader2024',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '28',
		time: '2025-05-28 23:10:33',
		nickname: 'SuperLongNicknameForTestingTruncation',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '29',
		time: '2025-05-28 23:11:07',
		nickname: 'Alexander2024Toppushka',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '30',
		time: '2025-05-28 23:12:15',
		nickname: 'AnotherVeryLongNicknameHere',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '31',
		time: '2025-05-28 23:13:22',
		nickname: 'CryptoTrader2024',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '32',
		time: '2025-05-28 23:14:45',
		nickname: 'ExtremelyLongNicknameForDemonstration',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '33',
		time: '2025-05-28 23:15:18',
		nickname: 'Alexander2024Toppushka',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '34',
		time: '2025-05-28 23:16:33',
		nickname: 'VeryLongNicknameThatWillBeTruncated',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '35',
		time: '2025-05-28 23:17:07',
		nickname: 'CryptoTrader2024',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '36',
		time: '2025-05-28 23:18:15',
		nickname: 'SuperLongNicknameForTestingTruncation',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '37',
		time: '2025-05-28 23:19:22',
		nickname: 'Alexander2024Toppushka',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '38',
		time: '2025-05-28 23:20:45',
		nickname: 'AnotherVeryLongNicknameHere',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '39',
		time: '2025-05-28 23:21:18',
		nickname: 'CryptoTrader2024',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
	{
		id: '40',
		time: '2025-05-28 23:22:33',
		nickname: 'ExtremelyLongNicknameForDemonstration',
		tradeDeal: 'ID: 46...56',
		volume: '1.00005638',
		profit: '0.00594618',
		hold: '0.00297309',
		walletCredit: '1.00302947 PaxG',
	},
]

const CommerceLoan: React.FC = () => {
	const [activeCrypto, setActiveCrypto] = useState('xaut')

	return (
		<div className={styles.container}>
			{/* Верхний таб с криптовалютами */}
			<div className={styles.tabsWrapper}>
				<div className={styles.cryptoSection}>
					<h3 className={styles.sectionTitle}>Выбор криптовалюты</h3>
					<Tabs
						tabs={cryptoCurrencyTabs}
						activeTab={activeCrypto}
						onTabChange={setActiveCrypto}
						className={styles.cryptoTabs}
					/>
				</div>
			</div>

			{/* Секция истории займов */}
			<div className={styles.loanHistorySection}>
				<div>
					<h3 className={styles.loanHistoryTitle}>
						История займов XAU Commerce
					</h3>
					<div className={styles.gradientLine}></div>
				</div>
				<div className={styles.loanHistoryWrapper}>
					<LoanHistory
						data={activeCrypto === 'paxg' ? loanHistoryData : []}
						isEmpty={activeCrypto === 'xaut'}
					/>
				</div>
			</div>
		</div>
	)
}

export default CommerceLoan
