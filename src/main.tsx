import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import './index.css'
import './i18n'

// Функция для установки динамической высоты viewport
const setViewportHeight = () => {
	const vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', `${vh}px`)
}

// Устанавливаем начальное значение
setViewportHeight()

// Обновляем при изменении размера окна и ориентации
window.addEventListener('resize', setViewportHeight)
window.addEventListener('orientationchange', setViewportHeight)

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
			<Router />
	</React.StrictMode>
)
