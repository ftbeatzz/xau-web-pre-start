import React from 'react'
import styles from './ProfileModal.module.scss'
import ExitIcon from '../../icons/ExitIcon'
import { useNavigate } from 'react-router-dom'
import DropDownArrow from '../../icons/DropDownArrow'

interface ProfileModalProps {
	isOpen: boolean
	onClose?: () => void
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
	isOpen,
	onClose,
}) => {
	const navigate = useNavigate()
	if (!isOpen) return null

	const handleFaqClick = () => {
		navigate('/faq')
		if (onClose) {
			onClose()
		}
	}

	const handleFreeClick = () => {
		navigate('/free')
		if (onClose) {
			onClose()
		}
	}

	return (
		<div className={styles.dropdown}>
			<div className={styles.dropdownContent}>
				{/* Account ID Section */}
				<div className={styles.accountSection}>
					<div className={styles.accountId}>
						<div className={styles.accountIcon}>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z'
									fill='#FFE34B'
								/>
							</svg>
						</div>
						<span className={styles.accountLabel}>ID аккаунта</span>
						<span className={styles.accountValue}>478...578</span>
					</div>
				</div>

				<div className={styles.gradientLine}></div>

				{/* Information Section */}
				<div className={styles.section}>
					<h3 className={styles.sectionTitle}>Информация</h3>
					<div className={styles.menuItems}>
						<button className={styles.menuItem} onClick={handleFaqClick}>
							<span>FAQ</span>
							<span className={styles.arrow}>
								<DropDownArrow />
							</span>
						</button>
						<button className={styles.menuItem} onClick={handleFreeClick}>
							<span>Free</span>
							<span className={styles.arrow}>
								<DropDownArrow />
							</span>
						</button>
						<button className={styles.menuItem}>
							<span>Презентация</span>
							<span className={styles.arrow}>
								<DropDownArrow />
							</span>
						</button>
					</div>
				</div>
				<div className={styles.gradientLine}></div>

				{/* Support Section */}
				<div className={styles.section}>
					<h3 className={styles.sectionTitle}>Аккаунт</h3>
					<div className={styles.menuItems}>
						<button
							className={styles.menuItem}
							onClick={() => {
								navigate('/recover/2fa')
								if (onClose) onClose()
							}}
						>
							<span>2-FA</span>
							<span className={styles.arrow}>
								<DropDownArrow />
							</span>
						</button>
						<button
							className={styles.menuItem}
							onClick={() => {
								navigate('/recover/password')
								if (onClose) onClose()
							}}
						>
							<span>Изменить пароль</span>
							<span className={styles.arrow}>
								<DropDownArrow />
							</span>
						</button>
					</div>
				</div>
				<div className={styles.gradientLine}></div>

				{/* Support Section */}
				<div className={styles.section}>
					<h3 className={styles.sectionTitle}>Поддержка</h3>
					<div className={styles.menuItems}>
						<button className={styles.menuItem}>
							<span>Электронная почта</span>
							<span className={styles.arrow}>
								<DropDownArrow />
							</span>
						</button>
						<button className={styles.menuItem}>
							<span>Тикет система</span>
							<span className={styles.arrow}>
								<DropDownArrow />
							</span>
						</button>
					</div>
				</div>
				<div className={styles.gradientLine}></div>

				{/* Logout Section */}
				<div className={styles.logout}>
					<div className={styles.menuItems}>
						<button className={styles.menuItem}>
							<span>Telegram - версия</span>
							<span className={styles.arrow}></span>
						</button>
					</div>
					<div className={styles.menuItems}>
						<button className={`${styles.menuItem} ${styles.logoutItem}`}>
							<span className={styles.logoutIcon}>
								<ExitIcon />
							</span>
							<span>Выйти</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
