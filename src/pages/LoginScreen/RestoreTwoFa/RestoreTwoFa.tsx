import React, { useState } from 'react'
import styles from './RestoreTwoFa.module.scss'
import CopyIcon from '../../../icons/CopyIcon'
import { useNavigate } from 'react-router-dom'

type RestoreTwoFaProps = {
	onBack: () => void
}

const RestoreTwoFa: React.FC<RestoreTwoFaProps> = ({ onBack }) => {
	const [email, setEmail] = useState<string>('')
	const [step, setStep] = useState<number>(1)
	const [code, setCode] = useState<string>('')
	const [twoFaKey] = useState<string>('PTS2XLX7A642OZ7U')
	const [appCode, setAppCode] = useState<string>('')
	const navigate = useNavigate()

	const handleSubmitStep1 = (e: React.FormEvent) => {
		e.preventDefault()
		setStep(2)
	}

	const handleSubmitStep2 = (e: React.FormEvent) => {
		e.preventDefault()
		setStep(3)
	}

	const handleBack = () => {
		if (step > 1) setStep(prev => prev - 1)
		else onBack()
	}

	const handleResendCode = () => {
		// TODO: запросить новый код
	}

	const handleCopyTwoFaKey = async (): Promise<void> => {
		try {
			await navigator.clipboard.writeText(twoFaKey)
		} catch {
			// ignore clipboard errors (e.g., not secure context)
		}
	}

	return (
		<div className={styles.secondStep}>
			{step === 1 && (
				<>
					<h5>Восстановите 2FA</h5>
					<div className={styles.loginSubtitle}>
						<h3>Подтвердите, что вы являетесь Владельцем аккаунта</h3>
					</div>
					<form className={styles.webForm} onSubmit={handleSubmitStep1}>
						<div className={styles.formGroup}>
							<label>Введите ваш адрес электронной почты</label>
							<input
								type='email'
								className={styles.formInput}
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<button className={styles.loginBtn} type='submit'>
							Продолжить
						</button>
					</form>
					<div className={styles.restoreLinks}>
						<div className={styles.restoreRow}>
							<a
								href='#'
								onClick={e => {
									e.preventDefault()
									handleBack()
								}}
							>
								Назад
							</a>
						</div>
					</div>
				</>
			)}

			{step === 2 && (
				<>
					<h5>Восстановите 2FA</h5>
					<div className={styles.loginSubtitle}>
						<h3>Подтвердите, что вы являетесь Владельцем аккаунта</h3>
					</div>
					<div className={styles.stepNote}>
						<p>
							Мы отправили код подтверждения на вашу электронную почту.
							Пожалуйста, введите этот код ниже, чтобы продолжить процесс
							восстановления 2FA.
						</p>
					</div>
					<form className={styles.webForm} onSubmit={handleSubmitStep2}>
						<div className={styles.formGroup}>
							<label>Введите код подтверждения</label>
							<input
								type='text'
								className={styles.formInput}
								value={code}
								onChange={e => setCode(e.target.value)}
							/>
						</div>
						<button className={styles.loginBtn} type='submit'>
							Продолжить
						</button>
					</form>
					<div className={styles.resendStroke}>
						<span>Не получили письмо с кодом?</span>
						<a
							href='#'
							onClick={e => {
								e.preventDefault()
								handleResendCode()
							}}
						>
							Запросить новый код
						</a>
					</div>
					<div className={styles.restoreLinks}>
						<div className={styles.restoreRow}>
							<a
								href='#'
								onClick={e => {
									e.preventDefault()
									handleBack()
								}}
							>
								Назад
							</a>
						</div>
					</div>
				</>
			)}

			{step === 3 && (
				<>
					<h5>Восстановите 2FA</h5>
					<div className={styles.loginSubtitle}>
						<h3>Подключите двухфакторную аутентификацию повторно</h3>
					</div>
					<div className={styles.twoFaInfo}>
						<p>
							Загрузите и установите приложение Google Authenticator на свой
							мобильный телефон. Это приложение доступно в Google Play Store для
							Android и в App Store для iOS.
						</p>
						<p>
							Откройте приложение на своём телефоне, нажмите кнопку добавления
							нового аккаунта и направьте камеру на QR‑код.
						</p>
						<p>
							Если вы не можете отсканировать QR‑код, введите этот код вручную в
							приложении.
						</p>
					</div>
					<div className={styles.authKeyGroup}>
						<label>Код установки двухфакторной аутентификации</label>
						<div className={styles.authKeyWrap}>
							<input
								className={styles.authKeyInput}
								value={twoFaKey}
								readOnly
							/>
							<button
								type='button'
								className={styles.copyBtn}
								onClick={handleCopyTwoFaKey}
								aria-label='copy 2fa key'
							>
								<CopyIcon />
							</button>
						</div>
					</div>
					<div className={styles.qrWrapper}>
						<div className={styles.qrBox}></div>
					</div>
					<button
						className={styles.loginBtn}
						type='button'
						onClick={() => setStep(4)}
					>
						Продолжить
					</button>
					<div className={styles.restoreLinks}>
						<div className={styles.restoreRow}>
							<a
								href='#'
								onClick={e => {
									e.preventDefault()
									handleBack()
								}}
							>
								Назад
							</a>
						</div>
					</div>
				</>
			)}

			{step === 4 && (
				<>
					<h5>Восстановите 2FA</h5>
					<div className={styles.loginSubtitle}>
						<h3>Подключите двухфакторную аутентификацию повторно</h3>
					</div>
					<div className={styles.stepNote}>
						<p>
							После сканирования QR-кода в вашем приложении Google Authenticator
							появится новый аккаунт с шестизначным кодом, который обновляется
							каждые несколько секунд.
						</p>
						<p>Введите этот код в поле ниже для завершения настройки.</p>
					</div>
					<form
						className={styles.webForm}
						onSubmit={e => {
							e.preventDefault()
							setStep(5)
						}}
					>
						<div className={styles.formGroup}>
							<label>Введите код подтверждения</label>
							<input
								type='text'
								className={styles.formInput}
								value={appCode}
								onChange={e => setAppCode(e.target.value)}
							/>
						</div>
						<button className={styles.loginBtn} type='submit'>
							Восстановить 2FA
						</button>
					</form>
					<div className={styles.restoreLinks}>
						<div className={styles.restoreRow}>
							<a
								href='#'
								onClick={e => {
									e.preventDefault()
									handleBack()
								}}
							>
								Назад
							</a>
						</div>
					</div>
				</>
			)}

			{step === 5 && (
				<>
					<h5 className={styles.successTitle}>
						Защита 2FA была успешно установлена!
					</h5>
					<p className={styles.successSubtitle}>
						Теперь вы можете войти в свой аккаунт и продолжить пользоваться
						всеми доступными функциями
					</p>
					<button
						className={styles.loginBtn}
						type='button'
						onClick={() => navigate('/login')}
					>
						Войти в аккаунт
					</button>
				</>
			)}
		</div>
	)
}

export default RestoreTwoFa
