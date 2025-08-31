import React from 'react'
import styles from './WalletInfoModal.module.scss'
import Modal from '../Modal/Modal'

interface WalletInfoModalProps {
	isOpen: boolean
	onClose: () => void
}

const WalletInfoModal: React.FC<WalletInfoModalProps> = ({
	isOpen,
	onClose,
}) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title='Условия коммерции сервиса XAU.'
		>
			<div className={styles.wrapper}>
				<div className={styles.gradientLine}></div>
				<div className={styles.content}>
					<p>
						Срок коммерческого периода: 72 часа, в этот период активы инвестора
						находятся в общем резерве с активами других инвесторов и активами
						компании XAU.
					</p>
					<p>
						Объём используется для проведения коммерческих и других торговых
						операций, согласно видам деятельности (SIC) компании XAU, с целью
						извлечения финансовой выгоды (подробнее: клик more).
					</p>
					<p>
						Прибыль от каждой коммерческой операции делится в таком соотношении:
						<b>50%</b> доход компании и <b>50%</b> доход инвестора.
					</p>
					<p>
						Каждая операция может занимать от <b>20-до 70 минут</b>.
					</p>
					<p>
						Доход инвестора зачисляется на кошелек накопительно, формирует
						сложный процент дохода и капитализацию прибыли.
					</p>
					<p>
						После завершения периода - 72 часа, объём активов (в сумме с
						накопленной прибылью), автоматически возвращается на счет инвестора
						и доступен к переводу, обмену, снятию и другим действиям в обычном
						режиме коммерческого кошелька, а также к запуску нового
						коммерческого периода.
					</p>
				</div>
			</div>
		</Modal>
	)
}

export default WalletInfoModal
