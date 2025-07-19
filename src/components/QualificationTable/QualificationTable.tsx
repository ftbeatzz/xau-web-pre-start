import React from 'react'
import styles from './QualificationTable.module.scss'
import Modal from '../Modal/Modal'

interface QualificationTableProps {
	isOpen: boolean
	onClose: () => void
}

const levels = [
	{
		title: { left: 'Уровень', right: 'Standard' },
		rows: [
			{ label: 'Лично-приглашенных партнеров', value: '3' },
			{ label: 'Объем личного партнера', value: 'от 0.25 Xaut/PaxG' },
			{ label: 'Рабочий объем', value: '0.5 XAUT/PaxG' },
			{ label: 'Покрытие', value: 'от 1 до 1000 партнеров' },
		],
	},
	{
		title: { left: 'Уровень', right: 'Standard +' },
		rows: [
			{ label: 'Лично-приглашенных партнеров', value: '4' },
			{ label: 'Объем личного партнера', value: 'от 0.25 Xaut/PaxG' },
			{ label: 'Рабочий объем', value: '1 XAUT/PaxG' },
			{ label: 'Покрытие', value: 'от 1 до 2 500 партнеров' },
		],
	},
	{
		title: { left: 'Уровень', right: 'Business' },
		rows: [
			{ label: 'Лично-приглашенных партнеров', value: '5' },
			{ label: 'Объем личного партнера', value: 'от 0.25 Xaut/PaxG' },
			{ label: 'Рабочий объем', value: '2.5 XAUT/PaxG' },
			{ label: 'Покрытие', value: 'от 1 до 5 000 партнеров' },
		],
	},
	{
		title: { left: 'Уровень', right: 'Business +' },
		rows: [
			{ label: 'Лично-приглашенных партнеров', value: '6' },
			{ label: 'Объем личного партнера', value: 'от 0.25 Xaut/PaxG' },
			{ label: 'Рабочий объем', value: '5 XAUT/PaxG' },
			{ label: 'Покрытие', value: 'от 1 до 10 000 партнеров' },
		],
	},
	{
		title: { left: 'Уровень', right: 'Premium' },
		rows: [
			{ label: 'Лично-приглашенных партнеров', value: '7' },
			{ label: 'Объем личного партнера', value: 'от 0.25 Xaut/PaxG' },
			{ label: 'Рабочий объем', value: '10 XAUT/PaxG' },
			{ label: 'Покрытие', value: 'от 1 до 25 000 партнеров' },
		],
	},
	{
		title: { left: 'Уровень', right: 'Premium +' },
		rows: [
			{ label: 'Лично-приглашенных партнеров', value: '8' },
			{ label: 'Объем личного партнера', value: 'от 20 Xaut/PaxG' },
			{ label: 'Рабочий объем', value: '20 XAUT/PaxG' },
			{ label: 'Покрытие', value: 'от 1 до 50 000 партнеров' },
		],
	},
	{
		title: { left: 'Уровень', right: 'Elite' },
		rows: [
			{ label: 'Лично-приглашенных партнеров', value: '9' },
			{ label: 'Объем личного партнера', value: 'от 0.25 Xaut/PaxG' },
			{ label: 'Рабочий объем', value: '40 XAUT/PaxG' },
			{ label: 'Покрытие', value: 'от 1 до 100 000 партнеров' },
		],
	},
	{
		title: { left: 'Уровень', right: 'Elite +' },
		rows: [
			{ label: 'Лично-приглашенных партнеров', value: '10' },
			{ label: 'Объем личного партнера', value: 'от 0.25 Xaut/PaxG' },
			{ label: 'Рабочий объем', value: '60 XAUT/PaxG' },
			{ label: 'Покрытие', value: 'от 1 до 250 000 партнеров' },
		],
	},
]

const QualificationTable: React.FC<QualificationTableProps> = ({
	isOpen,
	onClose,
}) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} title='Таблица активации'>
			<div className={styles.wrapper}>
				<div className={styles.levelTitle}>Текущий уровень</div>
				<div className={styles.levelBlockWrapper}>
					<div className={styles.levelBlock}>
						<div className={styles.levelInfoRow}>
							<span>Уровень</span>
							<span className={styles.levelUndefined}>Не определен</span>
						</div>
						<div className={styles.levelInfoRow}>
							<span>Лично-приглашенных партнеров</span>
							<span className={styles.value}>0</span>
						</div>
						<div className={styles.levelInfoRow}>
							<span>Объем Xaut</span>
							<span className={styles.value}>0.00000000</span>
						</div>
						<div className={styles.levelInfoRow}>
							<span>Объем PaxG</span>
							<span className={styles.value}>0.00000000</span>
						</div>
					</div>
				</div>
				<div className={styles.tableBlock}>
					<div className={styles.tableTitle}>Таблица активации</div>
					{levels.map(level => (
						<div className={styles.levelCard} key={level.title.right}>
							<div className={styles.levelCardTitleRow}>
								<span>{level.title.left}</span>
								<span>{level.title.right}</span>
							</div>
							<div className={styles.gradientLine}></div>
							{level.rows.map((row, idx) => (
								<div className={styles.levelCardRow} key={idx}>
									<span>{row.label}</span>
									<span className={styles.value}>{row.value}</span>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</Modal>
	)
}

export default QualificationTable
