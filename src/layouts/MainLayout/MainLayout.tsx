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

	// Скрываем шапку на страницах логина и регистрации
	const hideHeader =
		location.pathname === '/login' || location.pathname === '/registration'

	return (
		<div className={styles.mainLayout}>
			{!hideHeader && <Header />}
			<main
				className={`${styles.mainContent} ${
					isFreeScreen ? styles.freeScreenBg : ''
				} ${isSpecialPage ? styles.noBgMobile : ''} ${
					hideHeader ? styles.noPaddingTop : ''
				}`}
			>
				<Outlet />
			</main>
		</div>
	)
}

export default MainLayout
