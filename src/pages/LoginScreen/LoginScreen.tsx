import React, { useState } from 'react'
import styles from './LoginScreen.module.scss'
import TgIcon from '../../icons/TgIcon'
import { useNavigate } from 'react-router-dom'
import DesctopIcon from '../../icons/DesctopIcon'
import OpenEyeIcon from '../../icons/OpenEyeIcon'
import CloseEyeIcon from '../../icons/CloseEyeIcon'
import RestorePassword from './RestorePass/RestorePassword'
import RestoreTwoFa from './RestoreTwoFa/RestoreTwoFa'

const LoginScreen: React.FC = () => {
	const [loginMethod, setLoginMethod] = useState<'telegram' | 'web'>('telegram')
	const [currentStep, setCurrentStep] = useState(1)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [twoFa, setTwoFa] = useState('')
	const [showRestorePassword, setShowRestorePassword] = useState(false)
	const [showRestoreTwoFa, setShowRestoreTwoFa] = useState(false)
	const navigate = useNavigate()

	const handleNextStep = () => {
		setCurrentStep(2)
	}

	const handleSubmitWeb = (e: React.FormEvent) => {
		e.preventDefault()
		// TODO: интеграция с API авторизации
		navigate('/')
	}

	const handleTelegramLogin = () => {
		// Логика для входа через Telegram
		console.log('Вход через Telegram')
	}

	// Показывать табы и заголовок только на первом шаге
	const showInitialContent = currentStep === 1

	return (
		<div className={styles.loginMain}>
			<div className={styles.loginWrapper}>
				{!(
					!showInitialContent &&
					loginMethod === 'web' &&
					(showRestorePassword || showRestoreTwoFa)
				) && <h1>Добро пожаловать</h1>}

				{/* Показываем заголовок и табы только на первом шаге */}
				{showInitialContent && (
					<>
						<div className={styles.loginSubtitle}>
							<div className={styles.gradientLine}></div>
							<h2>Выберите способ входа чтобы продолжить</h2>
							<div className={styles.gradientLine}></div>
						</div>

						<div className={styles.loginTabs}>
							<button
								className={`${styles.tabButton} ${
									loginMethod === 'telegram' ? styles.activeTab : ''
								}`}
								onClick={() => setLoginMethod('telegram')}
							>
								Telegram
							</button>
							<button
								className={`${styles.tabButton} ${
									loginMethod === 'web' ? styles.activeTab : ''
								}`}
								onClick={() => setLoginMethod('web')}
							>
								Web
							</button>
						</div>
					</>
				)}

				{/* Контент для первого шага */}
				{showInitialContent && (
					<div className={styles.firstStep}>
						{loginMethod === 'telegram' ? (
							// Кнопка для Telegram
							<button
								onClick={handleTelegramLogin}
								className={styles.telegramButton}
							>
								<span>
									<TgIcon />
								</span>
								<span>Перейти в мини-приложение Xau</span>
							</button>
						) : (
							// Кнопка для Web
							<button onClick={handleNextStep}>
								<span>
									<DesctopIcon />
								</span>
								<span>Войти в аккаунт</span>
							</button>
						)}

						<div className={styles.regStroke}>
							<span>Ещё нет аккаунта?</span>
							<a
								href='#'
								onClick={e => {
									e.preventDefault()
									navigate('/registration')
								}}
							>
								Регистрация
							</a>
						</div>
					</div>
				)}

				{/* Контент для второго шага (Web) */}
				{!showInitialContent &&
					loginMethod === 'web' &&
					!showRestorePassword &&
					!showRestoreTwoFa && (
						<div className={styles.secondStep}>
							<div className={styles.loginSubtitle}>
								<div className={styles.gradientLine}></div>
								<h2>Подтвердите вход</h2>
								<div className={styles.gradientLine}></div>
							</div>
							<form className={styles.webForm} onSubmit={handleSubmitWeb}>
								<div className={styles.formGroup}>
									<label>Введите ваш адрес электронной почты</label>
									<input
										type='email'
										className={styles.formInput}
										value={email}
										onChange={e => setEmail(e.target.value)}
									/>
								</div>
								<div className={styles.formGroup}>
									<label>Введите пароль</label>
									<div className={styles.inputWrapper}>
										<input
											type={showPassword ? 'text' : 'password'}
											className={styles.formInput}
											value={password}
											onChange={e => setPassword(e.target.value)}
										/>
										<button
											type='button'
											className={styles.toggleBtn}
											onClick={() => setShowPassword(prev => !prev)}
											aria-label='toggle password visibility'
										>
											{showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
										</button>
									</div>
								</div>
								<div className={styles.formGroup}>
									<label>Введите код двухфакторной аутентификации</label>
									<input
										type='text'
										className={styles.formInput}
										value={twoFa}
										onChange={e => setTwoFa(e.target.value)}
									/>
								</div>
								<button className={styles.loginBtn} type='submit'>
									Войти в аккаунт
								</button>
							</form>
							<div className={styles.restoreLinks}>
								<div className={styles.restoreRow}>
									<span>Забыли пароль?</span>
									<a
										href='#'
										onClick={e => {
											e.preventDefault()
											setShowRestorePassword(true)
										}}
									>
										Восстановить
									</a>
								</div>
								<div className={styles.restoreRow}>
									<span>Потеряли код 2FA?</span>
									<a
										href='#'
										onClick={e => {
											e.preventDefault()
											setShowRestoreTwoFa(true)
										}}
									>
										Восстановить
									</a>
								</div>
							</div>
						</div>
					)}
				{!showInitialContent &&
					loginMethod === 'web' &&
					showRestorePassword && (
						<RestorePassword onBack={() => setShowRestorePassword(false)} />
					)}
				{!showInitialContent && loginMethod === 'web' && showRestoreTwoFa && (
					<RestoreTwoFa onBack={() => setShowRestoreTwoFa(false)} />
				)}
			</div>
		</div>
	)
}

export default LoginScreen
