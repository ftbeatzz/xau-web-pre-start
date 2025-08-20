import React, { useState } from 'react'
import styles from './RegScreen.module.scss'
import { useNavigate } from 'react-router-dom'
import TgIcon from '../../icons/TgIcon'
import DesctopIcon from '../../icons/DesctopIcon'
import WeChatIcon from '../../icons/WeChatIcon'
import WebRegistration from './Web/WebRegistration'
import WeChatRegistration from './WeChat/WeChatRegistration'

const RegScreen: React.FC = () => {
	const [registrationMethod, setRegistrationMethod] = useState<
		'telegram' | 'web' | 'wechat'
	>('telegram')
	const [showWebRegistration, setShowWebRegistration] = useState(false)
	const [showWeChatRegistration, setShowWeChatRegistration] = useState(false)
	const navigate = useNavigate()

	const isSubViewActive =
		(registrationMethod === 'web' && showWebRegistration) ||
		(registrationMethod === 'wechat' && showWeChatRegistration)

	return (
		<div className={styles.regMain}>
			<div className={styles.regWrapper}>
				{!isSubViewActive && (
					<h1>
						{registrationMethod === 'wechat' ? '歡迎' : 'Добро пожаловать'}
					</h1>
				)}

				{!isSubViewActive && (
					<div className={styles.regSubtitle}>
						<div className={styles.gradientLine}></div>
						<h2>
							{registrationMethod === 'wechat'
								? '選擇註冊方式'
								: 'Выберите способ регистрации'}
						</h2>
						<div className={styles.gradientLine}></div>
					</div>
				)}

				{!isSubViewActive && (
					<div className={styles.regTabs}>
						<button
							className={`${styles.tabButton} ${
								registrationMethod === 'telegram' ? styles.activeTab : ''
							}`}
							onClick={() => {
								setRegistrationMethod('telegram')
								setShowWebRegistration(false)
								setShowWeChatRegistration(false)
							}}
						>
							Telegram
						</button>
						<button
							className={`${styles.tabButton} ${
								registrationMethod === 'web' ? styles.activeTab : ''
							}`}
							onClick={() => {
								setRegistrationMethod('web')
								setShowWebRegistration(false)
								setShowWeChatRegistration(false)
							}}
						>
							Web
						</button>
						<button
							className={`${styles.tabButton} ${
								registrationMethod === 'wechat' ? styles.activeTab : ''
							}`}
							onClick={() => {
								setRegistrationMethod('wechat')
								setShowWebRegistration(false)
								setShowWeChatRegistration(false)
							}}
						>
							WeChat
						</button>
					</div>
				)}

				{registrationMethod === 'telegram' && (
					<div className={styles.telegramContent}>
						<h4>
							Мы рады приветствовать вас в мини-приложении XAU в Telegram!
						</h4>
						<p>
							Мини-приложение сайта XAU, Web App в Telegram предоставляет
							удобство и дополнительную безопасность, такие как, облачные пароли
							от Telegram и авто-регистрация с авторизацией в одном действии,
							без верификации.
						</p>
						<p>Приложение разработано в двух версиях:</p>
						<p>XAU.BOT международный и используется в масштабах всего мира.</p>
						<p>
							XAU.WTF предназначен для русскоязычного сегмента пользователей.
						</p>
						<button className={styles.telegramButton}>
							<span>
								<TgIcon />
							</span>
							<span>Перейти в мини-приложение Xau</span>
						</button>
					</div>
				)}

				{registrationMethod === 'web' &&
					(showWebRegistration ? (
						<WebRegistration
							onBackToStart={() => setShowWebRegistration(false)}
							onGoToLogin={() => navigate('/login')}
						/>
					) : (
						<div className={styles.webContent}>
							<h4>Мы рады приветствовать вас в веб-версии сайта XAU!</h4>
							<p>
								Веб-версия XAU предоставляет быстрый доступ к сайту через любой
								браузер, такой как Google Chrome, Mozilla, Firefox, Safari и
								другие, на различных устройствах, включая компьютеры, планшеты и
								смартфоны.
							</p>
							<p>
								Обеспечивает анонимное использование услуг XAU, с простой
								авторизацией и без верификации.
							</p>
							<button
								className={styles.webButton}
								onClick={() => setShowWebRegistration(true)}
							>
								<span>
									<DesctopIcon />
								</span>
								<span>Регистрация</span>
							</button>
						</div>
					))}

				{registrationMethod === 'wechat' &&
					(showWeChatRegistration ? (
						<WeChatRegistration
							onBackToStart={() => setShowWeChatRegistration(false)}
						/>
					) : (
						<div className={styles.wechatContent}>
							<h4>我們很高興在 WeChat 的 XAU 小程序中歡迎您！</h4>
							<p>
								XAU 網站的小程序 (Web App in WeChat) 擴展了 XAU
								服務的整合，適用於多功能的中國基礎設施。
							</p>
							<p>
								它為中國市場提供便利與高度安全，包括身分驗證、QR
								碼掃描、生物鑰匙等功能。
							</p>
							<button
								className={styles.wechatButton}
								onClick={() => setShowWeChatRegistration(true)}
							>
								<span>
									<WeChatIcon />
								</span>
								<span>通過用戶驗證</span>
							</button>
						</div>
					))}

				{!isSubViewActive && (
					<>
						{registrationMethod !== 'wechat' && (
							<div className={styles.regStroke}>
								<span>Уже есть аккаунт?</span>
								<a
									href='#'
									onClick={e => {
										e.preventDefault()
										navigate('/login')
									}}
								>
									Войти
								</a>
							</div>
						)}
						<div className={styles.conditionsSTroke}>
							<span>
								{registrationMethod === 'wechat'
									? '建立帳戶即表示您同意我們的 '
									: 'Создавая аккаунт, вы соглашаетесь с нашими '}
							</span>
							<a
								href='#'
								onClick={e => {
									e.preventDefault()
									navigate('/user-agreement')
								}}
							>
								{registrationMethod === 'wechat'
									? '服務條款。'
									: 'Условиями обслуживания.'}
							</a>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default RegScreen
