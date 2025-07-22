import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Header.module.scss'
import LogoHeader from '../../icons/LogoHeader'
import CloseIcon from '../../icons/CloseIcon'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import DropDownArrow from '../../icons/DropDownArrow'
import ProfileIcon from '../../icons/ProfileIcon'
import { ProfileModal } from '../../components/ProfileModal/ProfileModal'

const Header: React.FC = () => {
	const { t } = useTranslation()
	const location = useLocation()
	const [scrolled, setScrolled] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)
	const [menuVisible, setMenuVisible] = useState(false)
	const [menuAnim, setMenuAnim] = useState<'open' | 'close' | null>(null)
	const [tradeDropdownOpen, setTradeDropdownOpen] = useState(false)
	const [commerceDropdownOpen, setCommerceDropdownOpen] = useState(false)
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

	// Закрытие dropdown при клике вне их
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Element
			if (!target.closest(`.${styles.dropdown}`)) {
				setTradeDropdownOpen(false)
				setCommerceDropdownOpen(false)
			}
			if (!target.closest(`.${styles.profileBtn}`)) {
				setProfileModalOpen(false)
				setTimeout(() => setProfileIconAnim('profile'), 300)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const toggleTradeDropdown = (e: React.MouseEvent) => {
		e.preventDefault()
		setTradeDropdownOpen(!tradeDropdownOpen)
		setCommerceDropdownOpen(false)
	}

	const toggleCommerceDropdown = (e: React.MouseEvent) => {
		e.preventDefault()
		setCommerceDropdownOpen(!commerceDropdownOpen)
		setTradeDropdownOpen(false)
	}

	const toggleProfileModal = () => {
		if (profileModalOpen) {
			setProfileIconAnim('profile')
			setTimeout(() => setProfileModalOpen(false), 300)
		} else {
			setProfileModalOpen(true)
			setTimeout(() => setProfileIconAnim('close'), 10)
		}
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
				<div className={styles.burgerLangContainer}>
					<LanguageSwitcher />
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

				<nav className={styles.navWrapper}>
					<div className={styles.nav}>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? styles.active : styles.navLink
							}
						>
							{t('wallet')}
						</NavLink>

						<div className={styles.tradeCommerceWrapper}>
							{/* Trade Dropdown */}
							<div
								className={`${styles.dropdown} ${
									tradeDropdownOpen ? styles.dropdownOpen : ''
								}`}
							>
								<button
									className={
										`${styles.dropdownButton} ` +
										(location.pathname.startsWith('/trade')
											? styles.active
											: '')
									}
									onClick={toggleTradeDropdown}
								>
									{t('trade')}
									<span
										className={`${styles.dropdownArrow} ${
											tradeDropdownOpen ? styles.dropdownArrowUp : ''
										}`}
									>
										<DropDownArrow />
									</span>
								</button>
								{tradeDropdownOpen && (
									<div className={styles.dropdownMenu}>
										<NavLink
											to='/trade/statistics'
											className={styles.dropdownItem}
											onClick={() => {
												setTimeout(() => setTradeDropdownOpen(false), 0)
											}}
										>
											{t('companyStatistics')}
										</NavLink>
										<NavLink
											to='/trade/loan'
											className={styles.dropdownItem}
											onClick={() => {
												setTimeout(() => setTradeDropdownOpen(false), 0)
											}}
										>
											{t('tradeLoan')}
										</NavLink>
										<NavLink
											to='/trade/hft'
											className={styles.dropdownItem}
											onClick={() => {
												setTimeout(() => setTradeDropdownOpen(false), 0)
											}}
										>
											{t('hftTrading')}
										</NavLink>
									</div>
								)}
							</div>

							{/* Commerce Dropdown */}
							<div
								className={`${styles.dropdown} ${
									commerceDropdownOpen ? styles.dropdownOpen : ''
								}`}
							>
								<button
									className={
										`${styles.dropdownButton} ` +
										(location.pathname.startsWith('/commerce')
											? styles.active
											: '')
									}
									onClick={toggleCommerceDropdown}
								>
									{t('commerce')}
									<span
										className={`${styles.dropdownArrow} ${
											commerceDropdownOpen ? styles.dropdownArrowUp : ''
										}`}
									>
										<DropDownArrow />
									</span>
								</button>
								{commerceDropdownOpen && (
									<div className={styles.dropdownMenu}>
										<NavLink
											to='/commerce/statistics'
											className={styles.dropdownItem}
											onClick={() => {
												setTimeout(() => setCommerceDropdownOpen(false), 0)
											}}
										>
											{t('companyStatistics')}
										</NavLink>
										<NavLink
											to='/commerce/loan'
											className={styles.dropdownItem}
											onClick={() => {
												setTimeout(() => setCommerceDropdownOpen(false), 0)
											}}
										>
											{t('commerceLoan')}
										</NavLink>
										<NavLink
											to='/commerce/model'
											className={styles.dropdownItem}
											onClick={() => {
												setTimeout(() => setCommerceDropdownOpen(false), 0)
											}}
										>
											{t('proceduralModel')}
										</NavLink>
									</div>
								)}
							</div>
						</div>

						<NavLink
							to='/marketing'
							className={({ isActive }) =>
								isActive ? styles.active : styles.navLink
							}
						>
							{t('marketing')}
						</NavLink>
						<NavLink
							to='/free'
							className={({ isActive }) =>
								isActive ? styles.active : styles.navLink
							}
						>
							{t('free')}
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
						<ProfileModal isOpen={profileModalOpen} />
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
								to='/trade'
								onClick={() => setMenuOpen(false)}
								className={({ isActive }) =>
									isActive ? styles.active : styles.navLink
								}
							>
								{t('trade')}
							</NavLink>
							<NavLink
								to='/commerce'
								onClick={() => setMenuOpen(false)}
								className={({ isActive }) =>
									isActive ? styles.active : styles.navLink
								}
							>
								{t('commerce')}
							</NavLink>
							<NavLink
								to='/marketing'
								onClick={() => setMenuOpen(false)}
								className={({ isActive }) =>
									isActive ? styles.active : styles.navLink
								}
							>
								{t('marketing')}
							</NavLink>
							<NavLink
								to='/free'
								onClick={() => setMenuOpen(false)}
								className={({ isActive }) =>
									isActive ? styles.active : styles.navLink
								}
							>
								{t('free')}
							</NavLink>
						</nav>
					</div>
				)}
			</div>
		</header>
	)
}

export default Header
