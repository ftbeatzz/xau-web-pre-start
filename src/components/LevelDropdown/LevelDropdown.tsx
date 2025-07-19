import React, { useState } from 'react'
import styles from './LevelDropdown.module.scss'
import DropDownArrow from '../../icons/DropDownArrow'

interface LevelOption {
	id: string
	label: string
	partnersCount: number
}

interface LevelDropdownProps {
	onLevelChange?: (level: LevelOption) => void
}

const LevelDropdown: React.FC<LevelDropdownProps> = ({ onLevelChange }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedLevel, setSelectedLevel] = useState<LevelOption>({
		id: '1',
		label: 'Уровень 1',
		partnersCount: 7,
	})

	const levels: LevelOption[] = [
		{ id: '1', label: 'Уровень 1', partnersCount: 7 },
		{ id: '2', label: 'Уровень 2', partnersCount: 14 },
		{ id: '3', label: 'Уровень 3', partnersCount: 21 },
		{ id: '4', label: 'Уровень 4', partnersCount: 28 },
		{ id: '5', label: 'Уровень 5', partnersCount: 35 },
	]

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	const handleSelect = (level: LevelOption) => {
		setSelectedLevel(level)
		setIsOpen(false)
		onLevelChange?.(level)
	}

	return (
		<div className={styles.dropdownContainer}>
			<div className={styles.dropdownHeader} onClick={handleToggle}>
				<span className={styles.dropdownText}>
					{selectedLevel.label} - {selectedLevel.partnersCount} партнеров
				</span>
				<div className={`${styles.arrow} ${isOpen ? styles.arrowUp : ''}`}>
					<DropDownArrow />
				</div>
			</div>
			{isOpen && (
				<div className={styles.dropdownList}>
					{levels.map(level => (
						<div
							key={level.id}
							className={`${styles.dropdownItem} ${
								selectedLevel.id === level.id ? styles.selected : ''
							}`}
							onClick={() => handleSelect(level)}
						>
							{level.label} - {level.partnersCount} партнеров
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default LevelDropdown
