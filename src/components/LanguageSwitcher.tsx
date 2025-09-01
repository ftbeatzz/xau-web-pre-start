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

	const languages = [
		{ code: 'ru', short: 'RU', full: 'Русский' },
		{ code: 'en', short: 'EN', full: 'English' },
		{ code: 'es', short: 'ES', full: 'Español' },
		{ code: 'pt', short: 'PT', full: 'Português' },
		{ code: 'de', short: 'DE', full: 'Deutsch' },
		{ code: 'it', short: 'IT', full: 'Italiano' },
		{ code: 'fr', short: 'FR', full: 'Français' },
		{ code: 'kk', short: 'KK', full: 'Қазақша' },
		{ code: 'tr', short: 'TR', full: 'Türkçe' },
		{ code: 'pl', short: 'PL', full: 'Polski' },
		{ code: 'cs', short: 'CS', full: 'Češtина' },
	]

	const getLanguageDisplay = (lang: string) => {
		const found = languages.find(l => l.code === lang)
		return found ? found.short : lang.toUpperCase()
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
					{languages.map(({ code, full }) => (
						<button
							key={code}
							className={`${styles.dropdownItem} ${
								currentLanguage === code ? styles.active : ''
							}`}
							onClick={() => handleLanguageChange(code)}
						>
							{full}
						</button>
					))}
				</div>
			)}
		</div>
	)
}

export default LanguageSwitcher
