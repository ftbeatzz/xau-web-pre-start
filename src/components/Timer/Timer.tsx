import React, { useState, useEffect } from 'react'
import styles from './Timer.module.scss'
import { TIMER_TARGET_DATE } from '../../constants/timer'

interface TimerProps {
	targetDate?: Date
	className?: string
}

const Timer: React.FC<TimerProps> = ({ targetDate, className }) => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})

	// Используем переданную дату или константу по умолчанию
	const defaultTargetDate = targetDate || TIMER_TARGET_DATE

	// Логика таймера обратного отсчета от реальной даты
	useEffect(() => {
		const calculateTimeLeft = () => {
			const now = new Date().getTime()
			const target = defaultTargetDate.getTime()
			const difference = target - now

			if (difference > 0) {
				const days = Math.floor(difference / (1000 * 60 * 60 * 24))
				const hours = Math.floor(
					(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				)
				const minutes = Math.floor(
					(difference % (1000 * 60 * 60)) / (1000 * 60)
				)
				const seconds = Math.floor((difference % (1000 * 60)) / 1000)

				setTimeLeft({ days, hours, minutes, seconds })
			} else {
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
			}
		}

		// Вычисляем время сразу при монтировании
		calculateTimeLeft()

		// Обновляем каждую секунду
		const timer = setInterval(calculateTimeLeft, 1000)

		return () => clearInterval(timer)
	}, [defaultTargetDate])

	// Функция форматирования времени
	const formatTime = (time: {
		days: number
		hours: number
		minutes: number
		seconds: number
	}) => {
		const formatNumber = (num: number) => num.toString().padStart(2, '0')
		return `${time.days}d: ${formatNumber(time.hours)}h: ${formatNumber(
			time.seconds
		)}s`
	}

	return (
		<div className={`${styles.timer} ${className || ''}`}>
			<span>{formatTime(timeLeft)}</span>
		</div>
	)
}

export default Timer
