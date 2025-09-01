import React from 'react'
import styles from './CompanyScreen.module.scss'
import StartIcon from '../../icons/StartIcon'
import ClockIcon from '../../icons/ClockIcon'
import LightningIcon from '../../icons/LightningIcon'
import WalletArrowIcon from '../../icons/WalletArrowIcon'
import ReportIcon from '../../icons/ReportIcon'
import BankIcon from '../../icons/BankIcon'
import ScalesIcon from '../../icons/ScalesIcon'
import BasicsIcon2 from '../../icons/BasicsIcon2'
import LeadershipIcon from '../../icons/LeadershipIcon'
import MissionIcon from '../../icons/MissionIcon'
import ValueIcon from '../../icons/ValueIcon'
import { useTranslation } from 'react-i18next'
import MrketingIcon from '../../icons/MrketingIcon'

const ContactScreen: React.FC = () => {
	const { t } = useTranslation()

	return (
		<div className={styles.main}>
			<section className={styles.heroSection}>
				<div className={styles.heroWrapper}>
					<div className={styles.heroContent}>
						<h1>{t('company_hero_title')}</h1>
						<div className={styles.bottomWrapper}>
							<div className={styles.bottomContent}>
								<div className={styles.left}>
									<div className={styles.icon}>
										<StartIcon />
										<span>{t('company_hero_icon')}</span>
									</div>
									<h2>{t('company_hero_subtitle')}</h2>
									<p>{t('company_hero_p1')}</p>
									<p>{t('company_hero_p2')}</p>
								</div>
								<div className={styles.right}>
									<img src='img/companyImg.png' alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.gradientSection}>
				<div className={styles.gradientWrapper}>
					<div className={styles.gradientContent}>
						<div className={styles.left}>
							<h2>{t('company_gradient_title')}</h2>
						</div>
						<div className={styles.right}>
							<div className={styles.icon}>
								<ClockIcon />
								<span>{t('company_gradient_icon')}</span>
							</div>
							<p>{t('company_gradient_p')}</p>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.innovationSection}>
				<div className={styles.innovationWrapper}>
					<div className={styles.innovationContent}>
						<div className={styles.left}>
							<div className={styles.icon}>
								<LightningIcon />
								<span>{t('company_innovation_icon')}</span>
							</div>
							<h2>{t('company_innovation_title')}</h2>
							<p>{t('company_innovation_p')}</p>
							<div className={styles.iconsBlocks}>
								<div className={styles.iconBlock}>
									<div className={styles.icon}>
										<WalletArrowIcon />
									</div>
									<p>{t('company_innovation_client_settlements')}</p>
								</div>
								<div className={styles.iconBlock}>
									<div className={styles.icon}>
										<ReportIcon />
									</div>
									<p>{t('company_innovation_investor_finance')}</p>
								</div>
								<div className={styles.iconBlock}>
									<div className={styles.icon}>
										<BankIcon />
									</div>
									<p>{t('company_innovation_capital_attraction')}</p>
								</div>
								<div className={styles.iconBlock}>
									<div className={styles.icon}>
										<ScalesIcon />
									</div>
									<p>{t('company_innovation_efficient_use')}</p>
								</div>
							</div>
						</div>
						<div className={styles.right}>
							<img src='img/innovationImg.png' alt='' />
							<img src='img/innovationTablet.png' alt='' />
						</div>
					</div>
				</div>
			</section>

			<section className={styles.marketingSection}>
				<div className={styles.marketingWrapper}>
					<div className={styles.marketingContent}>
						<div className={styles.left}>
							<img src='img/marketingImg.png' alt='' />
						</div>
						<div className={styles.right}>
							<div className={styles.icon}>
								<MrketingIcon />
								<span>{t('company_marketing_icon')}</span>
							</div>
							<h2>{t('company_marketing_title')}</h2>
							<p>{t('company_marketing_p1')}</p>
							<p>{t('company_marketing_p2')}</p>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.basicSection}>
				<div className={styles.basicWrapper}>
					<div className={styles.basicContent}>
						<div className={styles.icon}>
							<BasicsIcon2 />
							<span>{t('company_basic_icon')}</span>
						</div>
						<div className={styles.blocksWrapper}>
							<div className={styles.block}>
								<p>{t('company_basic_block1')}</p>
							</div>
							<div className={styles.arrow}>
								<img src='/img/yellowArrow.png' alt='' />
							</div>
							<div className={styles.block}>
								<p>{t('company_basic_block2')}</p>
							</div>
							<div className={styles.arrow}>
								<img src='/img/yellowArrow.png' alt='' />
							</div>
							<div className={styles.block}>
								<p>{t('company_basic_block3')}</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.leadershipSection}>
				<div className={styles.leadershipWrapper}>
					<div className={styles.leadershipContent}>
						<div className={styles.left}>
							<img src='img/cabinetMockup.png' alt='' />
						</div>
						<div className={styles.right}>
							<div className={styles.icon}>
								<LeadershipIcon />
								<span>{t('company_leadership_icon')}</span>
							</div>
							<div className={styles.middleTxt}>
								<h2>{t('company_leadership_title')}</h2>
								<p>{t('company_leadership_p1')}</p>
								<p>{t('company_leadership_p2')}</p>
							</div>
							<h3>{t('company_leadership_belief')}</h3>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.missionSection}>
				<div className={styles.missionWrapper}>
					<div className={styles.missionContent}>
						<div className={styles.icon}>
							<MissionIcon />
							<span>{t('company_mission_icon')}</span>
						</div>
						<p>{t('company_mission_p')}</p>
					</div>
				</div>
			</section>

			<section className={styles.valueSection}>
				<div className={styles.valueWrapper}>
					<div className={styles.valueContent}>
						<div className={styles.left}>
							<div className={styles.icon}>
								<ValueIcon />
								<span>{t('company_value_icon')}</span>
							</div>
							<h2>{t('company_value_title')}</h2>
							<p>{t('company_value_p')}</p>
						</div>
						<div className={styles.right}>
							<img src='img/xauCardImg.png' alt='' />
						</div>
					</div>
				</div>
			</section>

			<section className={styles.arrowSection}>
				<div className={styles.arrowWrapper}>
					<div className={styles.arrowBlock}>
						<div className={styles.arrow}>
							<p>{t('company_arrow_p')}</p>
							<img src='/img/arrowAdvantages.png' alt='' />
						</div>
						<div className={styles.txt}>
							<h4>{t('company_arrow_txt')}</h4>
						</div>
					</div>
				</div>
			</section>

			{/* <section className={styles.directorsSection}>
			<div className={styles.directorsWrapper}>
				<div className={styles.directorsContent}>
					<p>Генеральный директор - <span>Philip George TYRRELL</span> </p>
					<p>Технический директор - <span>Alex Beeri</span> </p>
				</div>
			</div>
		</section> */}
		</div>
	)
}

export default ContactScreen
