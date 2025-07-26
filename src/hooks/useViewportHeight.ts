import { useEffect } from 'react'

export const useViewportHeight = () => {
	useEffect(() => {
		const setVH = () => {
			// Получаем реальную высоту viewport
			const vh = window.innerHeight * 0.01
			// Устанавливаем CSS переменную --vh
			document.documentElement.style.setProperty('--vh', `${vh}px`)
		}

		// Устанавливаем начальное значение
		setVH()

		// Обновляем при изменении размера окна
		window.addEventListener('resize', setVH)
		window.addEventListener('orientationchange', setVH)

		// Очистка при размонтировании
		return () => {
			window.removeEventListener('resize', setVH)
			window.removeEventListener('orientationchange', setVH)
		}
	}, [])
}
