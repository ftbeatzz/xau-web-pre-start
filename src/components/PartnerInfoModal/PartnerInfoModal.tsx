import React from 'react'
import styles from './PartnerInfoModal.module.scss'
import Modal from '../Modal/Modal'

interface PartnerInfoModalProps {
	isOpen: boolean
	onClose: () => void
}

const PartnerInfoModal: React.FC<PartnerInfoModalProps> = ({
	isOpen,
	onClose,
}) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} title='Партнерская программа'>
			<div className={styles.wrapper}>
				<div className={styles.gradientLine}></div>
				<div className={styles.content}>
					<p>
						Коммерческая стратегия финансового сервиса XAU спроектирована таким
						образом, что из прибыли, полученной от использования инвестиционных
						активов на кошельках компании оседает 60%, эти активы направлены на
						увеличение общей капитализации компании, а также на покрытие
						операционных затрат, в том числе обеспечение маркетинга.
					</p>

					<p>
						Начисления по партнерской программе осуществляется в криптоактиве
						XAUt.
					</p>

					<p>
						Вы можете участвовать в маркетинге и получать начисления
						партнерского дохода без наличия у вас личного активного баланса.
					</p>

					<div className={styles.rewardSection}>
						<h3>Размер партнерского вознаграждения:</h3>
						<p>
							0.7% от объёма активов лично приглашенных партнеров, за каждый
							коммерческий период: 72 часа.
						</p>
					</div>

					<div className={styles.exampleSection}>
						<h3>Приведем пример:</h3>
						<p>
							Если ваш партнер работает с активом в размере 1 PAX Gold или 1
							Tether Gold/около 3300 USDT на протяжении 2-х месяцев, то это
							составит 20 коммерческих периодов.
						</p>
						<p>
							За этот период, получите около 0.16 XAUt или 550 долларов на
							партнёрский кошелек.
						</p>
					</div>

					<p>
						Эти активы вы можете использовать для обмена, снятия или
						использования в коммерции сервиса XAU.
					</p>
				</div>
			</div>
		</Modal>
	)
}

export default PartnerInfoModal
