import React from 'react'
import styles from './WalletInfoModal.module.scss'
import Modal from '../Modal/Modal'
import { useTranslation, Trans } from 'react-i18next'

interface WalletInfoModalProps {
	isOpen: boolean
	onClose: () => void
}

const WalletInfoModal: React.FC<WalletInfoModalProps> = ({
	isOpen,
	onClose,
}) => {
	const { t } = useTranslation()
	return (
		<Modal isOpen={isOpen} onClose={onClose} title={t('wallet_info_title')}>
			<div className={styles.wrapper}>
				<div className={styles.gradientLine}></div>
				<div className={styles.content}>
					<p>{t('wallet_info_p1')}</p>
					<p>{t('wallet_info_p2')}</p>
					<p>
						<Trans i18nKey='wallet_info_p3' components={{ b: <b /> }} />
					</p>
					<p>
						<Trans i18nKey='wallet_info_p4' components={{ b: <b /> }} />
					</p>
					<p>{t('wallet_info_p5')}</p>
					<p>{t('wallet_info_p6')}</p>
				</div>
			</div>
		</Modal>
	)
}

export default WalletInfoModal
