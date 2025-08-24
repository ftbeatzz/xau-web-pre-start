import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './RecoverPassword.module.scss'
import OpenEyeIcon from '../../icons/OpenEyeIcon'
import CloseEyeIcon from '../../icons/CloseEyeIcon'

const TOTAL_STEPS = 4

const RecoverPassword: React.FC = () => {
	const [step, setStep] = React.useState(1)
	const [email, setEmail] = React.useState('')
	const [code, setCode] = React.useState('')
	const [newPassword, setNewPassword] = React.useState('')
	const [confirmPassword, setConfirmPassword] = React.useState('')
	const [showNew, setShowNew] = React.useState(false)
	const [showConfirm, setShowConfirm] = React.useState(false)
	const navigate = useNavigate()

	const handleNext = (e?: React.FormEvent) => {
		if (e) e.preventDefault()
		if (step === 1 && !email.trim()) return
		if (step === 2 && !code.trim()) return
		if (step === 3 && (!newPassword || newPassword !== confirmPassword)) return
		setStep(prev => (prev < TOTAL_STEPS ? prev + 1 : prev))
	}

	const handleBack = () => setStep(prev => (prev > 1 ? prev - 1 : prev))

	return (
		<div className={styles.container}>
			{step === 1 ? (
				<div className={styles.card}>
					<div className={styles.headerBlock}>
						<h1 className={styles.headerTitle}>
							Обновить пароль для учетной записи
						</h1>
						<div className={styles.headerSubtitle}>
							<div className={styles.gradientLine}></div>
							<p className={styles.subtitle}>
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
						<button
							className={styles.submit}
							type='submit'
							disabled={!email.trim()}
						>
							Продолжить
						</button>
					</form>

					<button
						type='button'
						className={styles.backLink}
						onClick={() => navigate('/')}
					>
						Вернуться в кабинет
					</button>
				</div>
			) : step === 2 ? (
				<div className={styles.card}>
					<div className={styles.headerBlock}>
						<h1 className={styles.headerTitle}>
							Обновить пароль для учетной записи
						</h1>
						<div className={styles.headerSubtitle}>
							<span className={styles.subtitle}>
								Мы отправили код подтверждения на вашу электронную почту.
								Пожалуйста, введите этот код ниже, чтобы продолжить процесс
								восстановления пароля.
							</span>
						</div>
					</div>

					<form
						className={styles.form}
						onSubmit={handleNext}
						autoComplete='off'
						noValidate
					>
						<label className={styles.label}>Введите код подтверждения</label>
						<input
							className={styles.input}
							type='text'
							placeholder='Код из письма'
							value={code}
							onChange={e => setCode(e.target.value)}
						/>
						<button
							className={styles.submit}
							type='submit'
							disabled={!code.trim()}
						>
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
						onClick={() => setStep(1)}
					>
						Назад
					</button>
				</div>
			) : step === 3 ? (
				<div className={styles.card}>
					<div className={styles.headerBlock}>
						<h1 className={styles.headerTitle}>
							Обновить пароль для учетной записи
						</h1>
						<div className={styles.headerSubtitle}>
							<div className={styles.gradientLine}></div>
							<h3 className={styles.centerSubtitle}>Установите пароль</h3>
							<div className={styles.gradientLine}></div>
						</div>
						<div className={styles.headerSubtitle}>
							<span className={styles.subtitle}>
								Введите новый пароль для вашего аккаунта, затем повторите пароль
								для подтверждения.
							</span>
						</div>
					</div>

					<form
						className={styles.form}
						onSubmit={handleNext}
						autoComplete='off'
					>
						<label className={styles.label}>Придумайте новый пароль</label>
						<div className={styles.inputWrapper}>
							<input
								className={styles.input}
								type={showNew ? 'text' : 'password'}
								placeholder='Введите новый пароль'
								value={newPassword}
								onChange={e => setNewPassword(e.target.value)}
							/>
							<button
								type='button'
								className={styles.toggleBtn}
								onClick={() => setShowNew(prev => !prev)}
								aria-label='toggle password visibility'
							>
								{showNew ? <OpenEyeIcon /> : <CloseEyeIcon />}
							</button>
						</div>

						<label className={styles.label}>Подтвердите ваш новый пароль</label>
						<div className={styles.inputWrapper}>
							<input
								className={styles.input}
								type={showConfirm ? 'text' : 'password'}
								placeholder='Повторите пароль'
								value={confirmPassword}
								onChange={e => setConfirmPassword(e.target.value)}
							/>
							<button
								type='button'
								className={styles.toggleBtn}
								onClick={() => setShowConfirm(prev => !prev)}
								aria-label='toggle password visibility'
							>
								{showConfirm ? <OpenEyeIcon /> : <CloseEyeIcon />}
							</button>
						</div>

						<button
							className={styles.submit}
							type='submit'
							disabled={!newPassword || newPassword !== confirmPassword}
						>
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
				</div>
			) : (
				<div className={styles.card}>
					<div className={styles.headerBlock}>
						<h1 className={styles.headerTitle}>Ваш пароль успешно обновлен!</h1>
					</div>
					<div className={styles.controls}>
						<button
							type='button'
							className={styles.submit}
							onClick={() => navigate('/')}
						>
							Вернуться в кабинет
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default RecoverPassword
