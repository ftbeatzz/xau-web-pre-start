import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import './index.css'
import './i18n'

// Функция для установки корректной высоты на мобильных устройствах
const setVH = () => {
	const vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', `${vh}px`)
}

// Инициализируем высоту при загрузке
setVH()

// Обновляем высоту при изменении размера окна
window.addEventListener('resize', setVH)
window.addEventListener('orientationchange', setVH)

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
)
