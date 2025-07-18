import React from 'react'
import styles from './DotLoader.module.scss'

const DotLoader: React.FC = () => {
	return (
		<div className={styles.dotLoader}>
			<div className={styles.dots}>
				<div className={styles.dot}></div>
				<div className={styles.dot}></div>
				<div className={styles.dot}></div>
			</div>
		</div>
	)
}

export default DotLoader
