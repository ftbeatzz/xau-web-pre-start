import React, { useState } from 'react'
import styles from './RestorePassword.module.scss'
import CloseEyeIcon from '../../../icons/CloseEyeIcon'
import OpenEyeIcon from '../../../icons/OpenEyeIcon'
import { useNavigate } from 'react-router-dom'

type RestorePasswordProps = {
	onBack: () => void
}

const RestorePassword: React.FC<RestorePasswordProps> = ({ onBack }) => {
	const [email, setEmail] = useState('')
	const [step, setStep] = useState<number>(1)
	const [code, setCode] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [showNewPassword, setShowNewPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const navigate = useNavigate()

	const handleBack = () => {
		if (step > 1) setStep(prev => prev - 1)
		else onBack()
	}

	const handleSubmitStep1 = (e: React.FormEvent) => {
		e.preventDefault()
		setStep(2)
	}

	const handleSubmitStep2 = (e: React.FormEvent) => {
		e.preventDefault()
		setStep(3)
	}

	const handleResendCode = () => {
		// TODO: запросить новый код
	}

	const handleSubmitStep3 = (e: React.FormEvent) => {
		e.preventDefault()
		setStep(4)
	}

	return (
		<div className={styles.secondStep}>
			{step === 1 && (
				<>
					<h5>Восстановите пароль</h5>
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
					<h5>Восстановите пароль</h5>
					<div className={styles.loginSubtitle}>
						<h3>Подтвердите, что вы являетесь Владельцем аккаунта</h3>
					</div>
					<div className={styles.stepNote}>
						<p>
							Мы отправили код подтверждения на вашу электронную почту.
							Пожалуйста, введите этот код ниже, чтобы продолжить процесс
							восстановления пароля.
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
					<h5>Восстановите пароль</h5>
					<div className={styles.loginSubtitle}>
						<div className={styles.gradientLine}></div>
						<h3>Установите пароль</h3>
						<div className={styles.gradientLine}></div>
					</div>
					<div className={styles.stepNote}>
						<p>
							Введите новый пароль для вашего аккаунта, затем повторите пароль
							для подтверждения.
						</p>
					</div>
					<form className={styles.webForm} onSubmit={handleSubmitStep3}>
						<div className={styles.formGroup}>
							<label>Придумайте новый пароль</label>
							<div className={styles.inputWrapper}>
								<input
									type={showNewPassword ? 'text' : 'password'}
									className={styles.formInput}
									value={newPassword}
									onChange={e => setNewPassword(e.target.value)}
								/>
								<button
									type='button'
									className={styles.toggleBtn}
									onClick={() => setShowNewPassword(prev => !prev)}
									aria-label='toggle password visibility'
								>
									{showNewPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
								</button>
							</div>
						</div>
						<div className={styles.formGroup}>
							<label>Подтвердите ваш новый пароль</label>
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
									aria-label='toggle password visibility'
								>
									{showConfirmPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
								</button>
							</div>
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
			{step === 4 && (
				<>
					<h5 className={styles.successTitle}>
						Ваш пароль был успешно восстановлен!
					</h5>
					<p className={styles.successSubtitle}>
						Теперь вы можете войти в свой аккаунт с новым паролем.
					</p>
					<button
						className={styles.loginBtn}
						onClick={() => navigate('/login')}
					>
						Войти в аккаунт
					</button>
				</>
			)}
		</div>
	)
}

export default RestorePassword
