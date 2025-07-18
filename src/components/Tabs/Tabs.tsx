import React from 'react'
import styles from './Tabs.module.scss'

export interface TabItem {
	id: string
	label: string
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
					{tab.label}
				</button>
			))}
		</div>
	)
}

export default Tabs
