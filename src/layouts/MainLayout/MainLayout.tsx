import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import styles from './MainLayout.module.scss'

const MainLayout: React.FC = () => {
	const location = useLocation()

	// Определяем, находимся ли мы на странице FreeScreen
	const isFreeScreen = location.pathname === '/free'

	return (
		<div className={styles.mainLayout}>
			<Header />
			<main
				className={`${styles.mainContent} ${
					isFreeScreen ? styles.freeScreenBg : ''
				}`}
			>
				<Outlet />
			</main>
		</div>
	)
}

export default MainLayout
