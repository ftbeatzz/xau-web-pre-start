import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Header.module.scss'
import LogoHeader from '../../icons/LogoHeader'
import CloseIcon from '../../icons/CloseIcon'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import ProfileIcon from '../../icons/ProfileIcon'
import { ProfileModal } from '../../components/ProfileModal/ProfileModal'

const Header: React.FC = () => {
	const { t } = useTranslation()
	const [scrolled, setScrolled] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)
	const [menuVisible, setMenuVisible] = useState(false)
	const [menuAnim, setMenuAnim] = useState<'open' | 'close' | null>(null)
	const [profileModalOpen, setProfileModalOpen] = useState(false)
	const [profileIconAnim, setProfileIconAnim] = useState<
		'profile' | 'close' | null
	>(null)

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 10)
		}
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	// Закрытие меню при изменении ширины окна
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 1024 && menuOpen) setMenuOpen(false)
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [menuOpen])

	// Управление анимацией меню
	useEffect(() => {
		if (menuOpen) {
			setMenuVisible(true)
			setTimeout(() => setMenuAnim('open'), 10)
		} else if (menuVisible) {
			setMenuAnim('close')
			const timeout = setTimeout(() => setMenuVisible(false), 350)
			return () => clearTimeout(timeout)
		}
	}, [menuOpen, menuVisible])

	// Блокировка скролла при открытом меню
	useEffect(() => {
		if (menuVisible) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		return () => {
			document.body.style.overflow = ''
		}
	}, [menuVisible])

	// Закрытие модалки профиля при клике вне
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Element
			if (!target.closest(`.${styles.profileBtn}`)) {
				setProfileModalOpen(false)
				setTimeout(() => setProfileIconAnim('profile'), 300)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const toggleProfileModal = () => {
		if (profileModalOpen) {
			setProfileIconAnim('profile')
			setTimeout(() => setProfileModalOpen(false), 300)
		} else {
			setProfileModalOpen(true)
			setTimeout(() => setProfileIconAnim('close'), 10)
		}
	}

	const closeProfileModal = () => {
		setProfileIconAnim('profile')
		setProfileModalOpen(false)
	}

	return (
		<header
			className={
				scrolled ? `${styles.header} ${styles.scrolled}` : styles.header
			}
		>
			<div className={styles.container}>
				<div className={styles.logo}>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive ? styles.logoLink : styles.activeLogo
						}
					>
						<LogoHeader />
						<span>Xau</span>
					</NavLink>
				</div>

				{/* Контейнер для бургер-меню и кнопки переключения языка */}

				<nav className={styles.navWrapper}>
					<div className={styles.nav}>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? styles.active : styles.navLink
							}
						>
							{t('Предстарт')}
						</NavLink>

						<div className={styles.tradeCommerceWrapper}>
							<NavLink
								to='/trade/hft'
								className={({ isActive }) =>
									isActive ? styles.active : styles.navLink
								}
							>
								{t('trade')}
							</NavLink>
							<NavLink
								to='/commerce/model'
								className={({ isActive }) =>
									isActive ? styles.active : styles.navLink
								}
							>
								{t('commerce')}
							</NavLink>
							<NavLink
								to='/arb/model'
								className={({ isActive }) =>
									isActive ? styles.active : styles.navLink
								}
							>
								XAU ARB
							</NavLink>
						</div>
						<NavLink
							to='/roadmap'
							className={({ isActive }) =>
								isActive ? styles.active : styles.navLink
							}
						>
							{t('Дорожная карта')}
						</NavLink>
						<NavLink
							to='/about-us'
							className={({ isActive }) =>
								isActive ? styles.active : styles.navLink
							}
						>
							{t('О нас')}
						</NavLink>
					</div>
				</nav>
				<div className={styles.controlsWrapper}>
					<div className={styles.langSwitchBtn}>
						<LanguageSwitcher />
					</div>
					<div className={styles.profileBtn}>
						<button
							onClick={toggleProfileModal}
							className={styles.profileButton}
						>
							<div
								className={`${styles.profileIconContainer} ${
									profileIconAnim === 'close' ? styles.profileIconClose : ''
								}`}
							>
								<span className={styles.profileIcon}>
									<ProfileIcon />
								</span>
								<span className={styles.closeIcon}>
									<CloseIcon />
								</span>
							</div>
						</button>
						<ProfileModal
							isOpen={profileModalOpen}
							onClose={closeProfileModal}
						/>
					</div>

					<div className={styles.logoMobile}>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? styles.logoLink : styles.activeLogo
							}
						>
							<LogoHeader />
							<span>Xau</span>
						</NavLink>
					</div>

					<div className={styles.burgerLangContainer}>
						<div
							className={
								styles.burgerAnimContainer +
								' ' +
								(menuOpen
									? styles.burgerAnimOpen
									: menuAnim === 'close'
									? styles.burgerAnimClose
									: '')
							}
							onClick={() => setMenuOpen(!menuOpen)}
						>
							<span className={styles.burgerIcon}>
								<svg
									width='32'
									height='32'
									viewBox='0 0 32 32'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<rect y='7' width='32' height='3' rx='1.5' fill='#fff' />
									<rect y='15' width='32' height='3' rx='1.5' fill='#fff' />
									<rect y='23' width='32' height='3' rx='1.5' fill='#fff' />
								</svg>
							</span>
							<span className={styles.closeIcon}>
								<CloseIcon />
							</span>
						</div>
					</div>
				</div>

				{/* Мобильное меню с анимацией */}
				{menuVisible && (
					<div
						className={
							`${styles.mobileMenu} ` +
							(menuAnim === 'open'
								? styles.mobileMenuOpen
								: menuAnim === 'close'
								? styles.mobileMenuClose
								: '')
						}
					>
						<nav>
							<NavLink
								to='/'
								onClick={() => setMenuOpen(false)}
								className={({ isActive }) =>
									isActive ? styles.active : styles.navLink
								}
							>
								{t('wallet')}
							</NavLink>

							<NavLink
								to='/trade/hft'
								onClick={() => setMenuOpen(false)}
								className={({ isActive }) =>
									isActive ? styles.active : styles.navLink
								}
							>
								{t('trade')}
							</NavLink>

							<NavLink
								to='/commerce/model'
								onClick={() => setMenuOpen(false)}
								className={({ isActive }) =>
									isActive ? styles.active : styles.navLink
								}
							>
								{t('commerce')}
							</NavLink>

							<NavLink
								to='/arb/model'
								onClick={() => setMenuOpen(false)}
								className={({ isActive }) =>
									isActive ? styles.active : styles.navLink
								}
							>
								XAU ARB
							</NavLink>

							<NavLink
								to='/roadmap'
								onClick={() => setMenuOpen(false)}
								className={({ isActive }) =>
									isActive ? styles.active : styles.navLink
								}
							>
								{t('Дорожная карта')}
							</NavLink>

							<NavLink
								to='/about-us'
								onClick={() => setMenuOpen(false)}
								className={({ isActive }) =>
									isActive ? styles.active : styles.navLink
								}
							>
								{t('О нас')}
							</NavLink>

							{/* Language Switcher в мобильном меню */}
							<div className={styles.mobileLangSwitcher}>
								<LanguageSwitcher />
							</div>
						</nav>
					</div>
				)}
			</div>
		</header>
	)
}

export default Header
