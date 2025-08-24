import React from 'react'
import styles from './RecoverTwoFa.module.scss'
import CopyIcon from '../../icons/CopyIcon'

const TOTAL_STEPS = 7

const RecoverTwoFa: React.FC = () => {
	const [step, setStep] = React.useState(1)
	const [email, setEmail] = React.useState('')
	const [code, setCode] = React.useState('')
	const [secretKey] = React.useState('PTSX2LX7A6A420Z7U')

	const handleNext = (e?: React.FormEvent) => {
		if (e) e.preventDefault()
		setStep(prev => (prev < TOTAL_STEPS ? prev + 1 : prev))
	}
	const handleBack = () => setStep(prev => (prev > 1 ? prev - 1 : prev))
	const handleCopy = () => navigator.clipboard.writeText(secretKey)

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				{step === 1 ? (
					<>
						<div className={styles.headerBlock}>
							<h1 className={styles.headerTitle}>Защита 2FA</h1>
							<div className={styles.headerSubtitle}>
								<div className={styles.gradientLine}></div>
								<p>Двухфакторная аутентификация (2FA) включена</p>
								<div className={styles.gradientLine}></div>
							</div>
						</div>
						<div className={styles.controls}>
							<button className={styles.submit} onClick={handleNext}>
								Отключить 2FA
							</button>
						</div>
						<button
							type='button'
							className={styles.backLink}
							onClick={() => (window.location.href = '/')}
						>
							Вернуться в кабинет
						</button>
					</>
				) : step === 2 ? (
					<>
						<div className={styles.headerBlock}>
							<h1 className={styles.headerTitle}>
								Сброс двухфакторной аутентификации
							</h1>
							<div className={styles.headerSubtitle}>
								<div className={styles.gradientLine}></div>
								<p>
									Введите email, который вы указывали при регистрации аккаунта
								</p>
								<div className={styles.gradientLine}></div>
							</div>
						</div>

						<form
							className={styles.form}
							onSubmit={handleNext}
							autoComplete='off'
						>
							<label className={styles.label}>
								Введите ваш адрес электронной почты
							</label>
							<input
								className={styles.input}
								type='email'
								placeholder='email@example.com'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
							<button className={styles.submit} type='submit'>
								Продолжить
							</button>
						</form>

						<button
							type='button'
							className={styles.backLink}
							onClick={handleBack}
						>
							Назад
						</button>
					</>
				) : step === 3 ? (
					<>
						<div className={styles.headerBlock}>
							<h1 className={styles.headerTitle}>
								Сброс двухфакторной аутентификации
							</h1>
							<div className={styles.headerSubtitle}>
								<span>
									Мы отправили код подтверждения на вашу электронную почту.
									Пожалуйста, введите этот код ниже, чтобы продолжить процесс
									восстановления 2fa.
								</span>
							</div>
						</div>

						<form
							className={styles.form}
							onSubmit={handleNext}
							autoComplete='off'
						>
							<label className={styles.label}>Введите код подтверждения</label>
							<input
								className={styles.input}
								type='text'
								placeholder='Код из письма'
								value={code}
								onChange={e => setCode(e.target.value)}
							/>
							<button className={styles.submit} type='submit'>
								Продолжить
							</button>
						</form>

						<div className={styles.resendRow}>
							<span>Не получили письмо с кодом?</span>
							<button type='button' className={styles.linkBtn}>
								Запросить новый код
							</button>
						</div>

						<button
							type='button'
							className={styles.backLink}
							onClick={handleBack}
						>
							Назад
						</button>
					</>
				) : step === 4 ? (
					<>
						<div className={styles.headerBlock}>
							<h1 className={styles.headerTitle}>
								Защита 2FA была успешно сброшена
							</h1>
							<div className={styles.headerSubtitle}>
								<p>Подключите двухфакторную аутентификацию повторно</p>
							</div>
						</div>

						<div className={styles.content}>
							<p>
								Загрузите и установите приложение Google Authenticator на свой
								мобильный телефон. Это приложение доступно в Google Play Store
								для Android и в App Store для iOS.
							</p>
							<p>
								Откройте приложение на своем телефоне, нажмите кнопку добавления
								нового аккаунта и направьте камеру на QR-код.
							</p>
							<p>
								Если вы не можете отсканировать QR-код введите этот код вручную
								в приложении.
							</p>
						</div>

						<label className={styles.label}>
							Код установки двухфакторной аутентификации
						</label>
						<div className={styles.keyRow}>
							<input className={styles.input} value={secretKey} readOnly />
							<button
								type='button'
								className={styles.copyBtn}
								onClick={handleCopy}
								aria-label='copy secret key'
							>
								<CopyIcon />
							</button>
						</div>

						<div className={styles.qrBox}>
							<img src='/img/qr.png' alt='QR' />
						</div>

						<div className={styles.controls}>
							<button className={styles.submit} onClick={handleNext}>
								Продолжить
							</button>
						</div>
					</>
				) : step === 5 ? (
					<>
						<div className={styles.headerBlock}>
							<h1 className={styles.headerTitle}>
								Защита 2FA была успешно сброшена
							</h1>
							<div className={styles.headerSubtitle}>
								<p>Подключите двухфакторную аутентификацию повторно</p>
							</div>
						</div>
						<div className={styles.content2}>
							<p>
								После сканирования QR-кода в вашем приложении Google
								Authenticator появится новый аккаунт с шестизначным кодом,
								который обновляется каждые несколько секунд.
							</p>
							<p>Введите этот код в поле ниже для завершения настройки.</p>
						</div>
						<form
							className={styles.form}
							onSubmit={handleNext}
							autoComplete='off'
						>
							<label className={styles.label}>Введите код подтверждения</label>
							<input
								className={styles.input}
								type='text'
								placeholder='Код из приложения'
								value={code}
								onChange={e => setCode(e.target.value)}
							/>
							<button className={styles.submit} type='submit'>
								Подключить 2FA
							</button>
						</form>
						<button
							type='button'
							className={styles.backLink}
							onClick={handleBack}
						>
							Назад
						</button>
					</>
				) : (
					<>
						<h2 className={styles.headerTitle}>
							Защита 2FA была успешно установлена!
						</h2>
						<div className={styles.controls}>
							<button
								className={styles.submit}
								onClick={() => (window.location.href = '/')}
							>
								Вернуться в кабинет
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default RecoverTwoFa
