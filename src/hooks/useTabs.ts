import { useState } from 'react'
import type { TabItem } from '../components/Tabs/Tabs'

export const useTabs = (initialTabs: TabItem[], defaultActiveTab?: string) => {
	const [tabs] = useState<TabItem[]>(initialTabs)
	const [activeTab, setActiveTab] = useState<string>(
		defaultActiveTab || initialTabs[0]?.id || ''
	)

	const handleTabChange = (tabId: string) => {
		setActiveTab(tabId)
	}

	return {
		tabs,
		activeTab,
		handleTabChange,
	}
}
 