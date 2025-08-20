import React, { useState } from 'react'
import styles from './WebRegistration.module.scss'
import CloseEyeIcon from '../../../icons/CloseEyeIcon'
import OpenEyeIcon from '../../../icons/OpenEyeIcon'
import CopyIcon from '../../../icons/CopyIcon'

type WebRegistrationProps = {
	onBackToStart: () => void
	onGoToLogin: () => void
}

const WebRegistration: React.FC<WebRegistrationProps> = ({
	onBackToStart,
	onGoToLogin,
}) => {
	const [step, setStep] = useState<1 | 2 | 3 | 4>(1)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const [twoFaKey] = useState('PTSX2LX7A642OZ7U')

	const handleCopyTwoFaKey = () => {
		navigator.clipboard?.writeText(twoFaKey).catch(() => {})
	}

	return (
		<>
			{step === 1 && (
				<div className={styles.firstStep}>
					<h1>Создайте аккаунт</h1>
					<div className={styles.regSubtitle}>
						<div className={styles.gradientLine}></div>
						<h3>Заполните данные</h3>
						<div className={styles.gradientLine}></div>
					</div>

					<form>
						<div className={styles.formGroup}>
							<label>Введите ваш адрес электронной почты</label>
							<input
								type='email'
								className={styles.formInput}
								value={email}
								onChange={e => setEmail(e.target.value)}
								placeholder=''
							/>
						</div>

						<div className={styles.formGroup}>
							<label>Придумайте пароль</label>
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
							<label>Подтвердите ваш пароль</label>
							<div className={styles.inputWrapper}>
								<input
									type={showConfirmPassword ? 'text' : 'password'}
									className={styles.formInput}
									value={confirmPassword}
									onChange={e => setConfirmPassword(e.target.value)}
								/>
								<button
									type='button'
									className={styles.toggleBtn}
									onClick={() => setShowConfirmPassword(prev => !prev)}
									aria-label='toggle confirm password visibility'
								>
									{showConfirmPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
								</button>
							</div>
						</div>

						<button className={styles.continueBtn} onClick={() => setStep(2)}>
							Продолжить
						</button>
					</form>
					<div className={styles.backLink}>
						<a
							href='#'
							onClick={e => {
								e.preventDefault()
								onBackToStart()
							}}
						>
							Назад
						</a>
					</div>
				</div>
			)}
			{step === 2 && (
				<div className={styles.secondStep}>
					<h1>Создайте аккаунт</h1>
					<div className={styles.regSubtitle}>
						<div className={styles.gradientLine}></div>
						<h3>Подключите двухфакторную аутентификацию</h3>
						<div className={styles.gradientLine}></div>
					</div>

					<div className={styles.twoFaInfo}>
						<p>
							Загрузите и установите приложение Google Authenticator на свой
							мобильный телефон. Это приложение доступно в Google Play Store для
							Android и в App Store для iOS.
						</p>
						<p>
							Откройте приложение на своем телефоне, нажмите кнопку добавления
							нового аккаунта и направьте камеру на QR-код.
						</p>
						<p>
							Если вы не можете отсканировать QR-код, введите этот код вручную в
							приложении.
						</p>
					</div>

					<div className={styles.authKeyGroup}>
						<label>Код установки двухфакторной аутентификации</label>
						<div className={styles.authKeyWrap}>
							<input
								className={styles.authKeyInput}
								type='text'
								value={twoFaKey}
								readOnly
							/>
							<button
								type='button'
								className={styles.copyBtn}
								onClick={handleCopyTwoFaKey}
								aria-label='copy 2FA key'
							>
								<CopyIcon />
							</button>
						</div>
					</div>

					<div className={styles.qrWrapper}>
						<div className={styles.qrBox} />
					</div>

					<button className={styles.continueBtn} onClick={() => setStep(3)}>
						Продолжить
					</button>
					<div className={styles.backLink}>
						<a
							href='#'
							onClick={e => {
								e.preventDefault()
								setStep(1)
							}}
						>
							Назад
						</a>
					</div>
				</div>
			)}
			{step === 3 && (
				<div className={styles.thirdStep}>
					<h1>Создайте аккаунт</h1>
					<div className={styles.regSubtitle}>
						<div className={styles.gradientLine}></div>
						<h3>Подключите двухфакторную аутентификацию</h3>
						<div className={styles.gradientLine}></div>
					</div>

					<div className={styles.twoFaInfo}>
						<p>
							После сканирования QR-кода в вашем приложении Google Authenticator
							появится новый аккаунт с шестизначным кодом, который обновляется
							каждые несколько секунд.
						</p>
						<p>Введите этот код в поле ниже для завершения настроек.</p>
					</div>

					<form>
						<div className={styles.formGroup}>
							<label>Введите код подтверждения</label>
							<input
								type='text'
								className={styles.formInput}
								inputMode='numeric'
								maxLength={6}
							/>
						</div>
						<button className={styles.continueBtn} onClick={() => setStep(4)}>
							Создать аккаунт
						</button>
					</form>

					<div className={styles.backLink}>
						<a
							href='#'
							onClick={e => {
								e.preventDefault()
								setStep(2)
							}}
						>
							Назад
						</a>
					</div>
				</div>
			)}
			{step === 4 && (
				<div className={styles.fourthStep}>
					<h1>Ваш аккаунт был успешно создан!</h1>
					<p className={styles.successSubtitle}>
						Теперь вы можете войти в свой аккаунт и начать пользоваться всеми
						доступными функциями
					</p>
					<button className={styles.continueBtn} onClick={onGoToLogin}>
						Войти в аккаунт
					</button>
				</div>
			)}
		</>
	)
}

export default WebRegistration
