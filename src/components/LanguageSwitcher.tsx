import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import styles from './LanguageSwitcher.module.scss'
import EarthIcon from '../icons/EarthIcon'
import DropDownArrow from '../icons/DropDownArrow'

const LanguageSwitcher: React.FC = () => {
	const { currentLanguage, changeLanguage } = useLanguage()
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const handleLanguageChange = (language: string) => {
		changeLanguage(language)
		setIsOpen(false)
	}

	const getLanguageDisplay = (lang: string) => {
		return lang.toUpperCase()
	}

	return (
		<div className={styles.languageSwitcher} ref={dropdownRef}>
			<button
				className={styles.languageButton}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className={styles.globeIcon}>
					<EarthIcon />
				</div>
				<span className={styles.languageText}>
					{getLanguageDisplay(currentLanguage)}
				</span>
				<div className={`${styles.arrow} ${isOpen ? styles.arrowUp : ''}`}>
					<DropDownArrow />
				</div>
			</button>

			{isOpen && (
				<div className={styles.dropdown}>
					<button
						className={`${styles.dropdownItem} ${
							currentLanguage === 'ru' ? styles.active : ''
						}`}
						onClick={() => handleLanguageChange('ru')}
					>
						RU
					</button>
					<button
						className={`${styles.dropdownItem} ${
							currentLanguage === 'en' ? styles.active : ''
						}`}
						onClick={() => handleLanguageChange('en')}
					>
						EN
					</button>
				</div>
			)}
		</div>
	)
}

export default LanguageSwitcher
