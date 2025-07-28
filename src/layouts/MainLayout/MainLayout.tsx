import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import styles from './MainLayout.module.scss'

const MainLayout: React.FC = () => {
	const location = useLocation()

	// Определяем, находимся ли мы на странице FreeScreen
	const isFreeScreen = location.pathname === '/free'

	// Определяем, находимся ли мы на страницах ProceduralModel или HFTTrading
	const isProceduralModel = location.pathname === '/commerce/model'
	const isHFTTrading = location.pathname === '/trade/hft'
	const isSpecialPage = isProceduralModel || isHFTTrading

	return (
		<div className={styles.mainLayout}>
			<Header />
			<main
				className={`${styles.mainContent} ${
					isFreeScreen ? styles.freeScreenBg : ''
				} ${isSpecialPage ? styles.noBgMobile : ''}`}
			>
				<Outlet />
			</main>
		</div>
	)
}

export default MainLayout
