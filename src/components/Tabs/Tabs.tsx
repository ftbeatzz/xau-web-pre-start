import React from 'react'
import styles from './Tabs.module.scss'

export interface TabItem {
	id: string
	label: string
	shortLabel?: string // Сокращенное название для мобильных устройств
	icon?: React.ReactNode // Необязательная иконка слева от текста
}

interface TabsProps {
	tabs: TabItem[]
	activeTab: string
	onTabChange: (tabId: string) => void
	className?: string
}

const Tabs: React.FC<TabsProps> = ({
	tabs,
	activeTab,
	onTabChange,
	className,
}) => {
	return (
		<div className={`${styles.tabsContainer} ${className || ''}`}>
			{tabs.map(tab => (
				<button
					key={tab.id}
					className={`${styles.tab} ${
						activeTab === tab.id ? styles.active : ''
					}`}
					onClick={() => onTabChange(tab.id)}
				>
					{tab.icon && <span className={styles.icon}>{tab.icon}</span>}
					{tab.shortLabel ? (
						<>
							<span className={styles.fullLabel}>{tab.label}</span>
							<span className={styles.shortLabel}>{tab.shortLabel}</span>
						</>
					) : (
						tab.label
					)}
				</button>
			))}
		</div>
	)
}

export default Tabs
