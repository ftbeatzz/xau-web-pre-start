import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './RoadMapScreen.module.scss'
import SmallWhiteLogo from '../../icons/SmallWhiteLogo'
import RealizeFirstIcon from '../../icons/RealizeFirstIcon'
import YellowCheckIcon from '../../icons/YellowCheckIcon'
import RealizeSecondIcon from '../../icons/RealizeSecondIcon'
import ProcessingIcon from '../../icons/ProcessingIcon'
import RealizeThirdIcon from '../../icons/RealizeThirdIcon'
import RealizeFourIcon from '../../icons/RealizeFourIcon'
import GreenEcoIcon from '../../icons/GreenEcoIcon'
import IndustryIcon from '../../icons/IndustryIcon'
import GoldSectionIcon from '../../icons/GoldSectionIcon'

const RoadMapScreen: React.FC = () => {
	const { t } = useTranslation()
	return (
		<div className={styles.main}>
			<div className={styles.heroSection}>
				<div className={styles.heroWrapper}>
					<div className={styles.heroContent}>
						<div className={styles.icon}>
							<SmallWhiteLogo />
							<span>{t('roadmap_brand')}</span>
						</div>
						<h1>{t('roadmap_title')}</h1>
						<div className={styles.blocksWrapper}>
							<div className={styles.block}>
								<p>{t('roadmap_intro_block1')}</p>
							</div>
							<div className={styles.block}>
								<p>{t('roadmap_intro_block2')}</p>
							</div>
						</div>
						<div className={styles.blockBottom}>
							<p>{t('roadmap_intro_bottom')}</p>
						</div>
					</div>
				</div>
			</div>

			<section className={styles.strategySection}>
				<div className={styles.strategyWrapper}>
					<div className={styles.strategyContent}>
						<div className={styles.left}>
							<h2>{t('roadmap_strategy_title')}</h2>
							<div className={styles.txt}>
								<h3>{t('roadmap_strategy_intro')}</h3>
								<p>{t('roadmap_strategy_p1')}</p>
								<p>{t('roadmap_strategy_p2')}</p>
								<p>{t('roadmap_strategy_p3')}</p>
							</div>
						</div>
						<div className={styles.right}>
							<img src='/img/strategyEarth.png' alt='strategy' />
						</div>
					</div>
				</div>
			</section>

			<section className={styles.realizationSection}>
				<div className={styles.realizationWrapper}>
					<div className={styles.realizationContent}>
						<h2>{t('roadmap_realization_title')}</h2>
						<div className={styles.blocksWrapper}>
							<div className={styles.contentBlock}>
								<div className={styles.block}>
									<div className={styles.blockText}>
										<div className={styles.heading}>
											<div className={styles.icon}>
												<RealizeFirstIcon />
											</div>
											<div>
												<p className={styles.statusDone}>
													<span>
														<YellowCheckIcon />
													</span>
													<span>{t('roadmap_status_done')}</span>
												</p>
												<p className={styles.date}>{t('roadmap_real1_date')}</p>
											</div>
										</div>
										<div className={styles.txt}>
											<div>
												<p>{t('roadmap_real1_p')}</p>
											</div>
										</div>
									</div>
									<div className={styles.line}>
										<img src='/img/realizeLine1.png' alt='realizationLine' />
									</div>
								</div>
								<div className={styles.img}>
									<img src='/img/realizationImg1.png' alt='realization' />
								</div>
							</div>
							<div className={styles.contentBlock}>
								<div className={styles.img}>
									<img src='/img/realizationImg2.png' alt='realization' />
								</div>
								<div className={styles.block}>
									<div className={styles.blockText}>
										<div className={styles.heading}>
											<div className={styles.icon}>
												<RealizeSecondIcon />
											</div>
											<div>
												<p className={styles.statusProcessing}>
													<span>
														<ProcessingIcon />
													</span>
													<span>{t('roadmap_status_processing')}</span>
												</p>
												<p className={styles.date}>{t('roadmap_real2_date')}</p>
											</div>
										</div>
										<div className={styles.txt}>
											<div>
												<p>{t('roadmap_real2_p1')}</p>
											</div>
											<div>
												<span>{t('roadmap_real2_term_label')}</span>
												<p>{t('roadmap_real2_term_p')}</p>
											</div>
											<div>
												<h3>{t('roadmap_real2_cover_title')}</h3>
											</div>
											<div>
												<span>{t('roadmap_real2_fin_label')}</span>
												<p>{t('roadmap_real2_fin_p')}</p>
											</div>
											<div>
												<span>{t('roadmap_real2_crypto_label')}</span>
												<p>{t('roadmap_real2_crypto_p')}</p>
											</div>
										</div>
									</div>
									<div className={styles.line}>
										<img src='/img/realizeLine2.png' alt='realizationLine' />
									</div>
								</div>
							</div>
							<div className={styles.contentBlock}>
								<div className={styles.block}>
									<div className={styles.blockText}>
										<div className={styles.heading}>
											<div className={styles.icon}>
												<RealizeThirdIcon />
											</div>
											<div>
												<p className={styles.statusDone}>
													<span>
														<YellowCheckIcon />
													</span>
													<span>{t('roadmap_status_done')}</span>
												</p>
												<p className={styles.date}>{t('roadmap_real3_date')}</p>
											</div>
										</div>
										<div className={styles.txt}>
											<div>
												<span>{t('roadmap_real3_capital_label')}</span>
												<p>{t('roadmap_real3_capital_p')}</p>
											</div>
											<div>
												<span>{t('roadmap_real3_strategy_label')}</span>
												<p>{t('roadmap_real3_strategy_p')}</p>
											</div>
											<div>
												<span>{t('roadmap_real3_apply_label')}</span>
												<p>{t('roadmap_real3_apply_p')}</p>
											</div>
											<div>
												<span>{t('roadmap_real3_assess_label')}</span>
												<p>{t('roadmap_real3_assess_p')}</p>
											</div>
											<div>
												<h4>{t('roadmap_real3_preapprove')}</h4>
											</div>
										</div>
									</div>
									<div className={styles.line}>
										<img src='/img/realizeLine3.png' alt='realizationLine' />
									</div>
								</div>
								<div className={styles.img}>
									<img src='/img/realizationImg3.png' alt='realization' />
								</div>
							</div>
							<div className={styles.contentBlock}>
								<div className={styles.img}>
									<img src='/img/realizationImg2.png' alt='realization' />
								</div>
								<div className={styles.block}>
									<div className={styles.blockText}>
										<div className={styles.heading}>
											<div className={styles.icon}>
												<RealizeFourIcon />
											</div>
											<div>
												<p className={styles.statusProcessing}>
													<span>
														<ProcessingIcon />
													</span>
													<span>{t('roadmap_status_processing')}</span>
												</p>
												<p className={styles.date}>{t('roadmap_real4_date')}</p>
											</div>
										</div>
										<div className={styles.txt}>
											<div>
												<p>{t('roadmap_real4_p1')}</p>
											</div>
											<div>
												<p>{t('roadmap_real4_p2')}</p>
											</div>
										</div>
									</div>
									<div className={styles.line}>
										<img src='/img/realizeLine4.png' alt='realizationLine' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.technicalSection}>
				<div className={styles.technicalWrapper}>
					<div className={styles.technicalContent}>
						<h2>{t('roadmap_tech_title')}</h2>
						<div className={styles.coinWrapper}>
							<img src='/img/silverCoin.png' alt='coin' />
							<h3>{t('roadmap_tech_digital_title')}</h3>
						</div>
						<div className={styles.txtWrapper}>
							<p>{t('roadmap_tech_p1')}</p>
							<p>{t('roadmap_tech_p2')}</p>
							<p>{t('roadmap_tech_p3')}</p>
							<p>{t('roadmap_tech_p4')}</p>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.tokenizeSection}>
				<div className={styles.tokenizeWrapper}>
					<div className={styles.tokenizeContent}>
						<div className={styles.top}>
							<div className={styles.block}>
								<img src='/img/tokenizeMapImg1.png' alt='tokenize' />
								<div className={styles.txt}>
									<h3>{t('roadmap_tokenize_issue_title')}</h3>
									<p>{t('roadmap_tokenize_issue_p1')}</p>
									<p>{t('roadmap_tokenize_issue_p2')}</p>
									<p>{t('roadmap_tokenize_issue_p3')}</p>
								</div>
							</div>
							<div className={styles.block}>
								<div className={styles.txt}>
									<h3>{t('roadmap_tokenize_fin_title')}</h3>
									<p>{t('roadmap_tokenize_fin_p1')}</p>
									<p>{t('roadmap_tokenize_fin_p2')}</p>
									<p>{t('roadmap_tokenize_fin_p3')}</p>
									<p>{t('roadmap_tokenize_fin_p4')}</p>
								</div>
								<img src='/img/tokenizeMapImg2.svg' alt='tokenize' />
							</div>
						</div>

						<div className={styles.bottom}>
							<div className={styles.block}>
								<div className={styles.txt}>
									<h3>{t('roadmap_tokenize_launch_title')}</h3>
									<p>{t('roadmap_tokenize_launch_p1')}</p>
								</div>
								<img src='/img/tokenizeMapImg3.svg' alt='tokenize' />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.accessSection}>
				<div className={styles.accessWrapper}>
					<div className={styles.accessContent}>
						<h2>{t('roadmap_access_title')}</h2>
						<div className={styles.blocksWrapper}>
							<div className={styles.block}>
								<h3>{t('roadmap_access_wallets_title')}</h3>
								<p>{t('roadmap_access_wallets_p')}</p>
							</div>
							<div className={styles.block}>
								<h3>{t('roadmap_access_dex_title')}</h3>
								<p>{t('roadmap_access_dex_p')}</p>
							</div>
							<div className={styles.block}>
								<h3>{t('roadmap_access_cex_title')}</h3>
								<p>{t('roadmap_access_cex_p')}</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.communitySection}>
				<div className={styles.communityWrapper}>
					<div className={styles.communityContent}>
						<div className={styles.left}>
							<h2>{t('roadmap_community_title')}</h2>
							<div className={styles.txt}>
								<p>{t('roadmap_community_p1')}</p>
								<p>{t('roadmap_community_p2')}</p>
							</div>
						</div>
						<div className={styles.right}>
							<img src='/img/communityImg.png' alt='community' />
						</div>
					</div>
				</div>
			</section>

			<section className={styles.cardsSection}>
				<div className={styles.cardsWrapper}>
					<div className={styles.cardsContent}>
						<div className={styles.left}>
							<img src='/img/cardsImg.png' alt='cards' />
						</div>
						<div className={styles.right}>
							<h2>{t('roadmap_cards_title')}</h2>
							<div className={styles.txt}>
								<p>{t('roadmap_cards_p1')}</p>
								<p>{t('roadmap_cards_p2')}</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.extencionsSection}>
				<div className={styles.extencionsWrapper}>
					<div className={styles.extencionsContent}>
						<div className={styles.left}>
							<h2>{t('roadmap_ext_title')}</h2>
							<p>{t('roadmap_ext_p1')}</p>
						</div>
						<div className={styles.right}>
							<img src='/img/extencionImg.png' alt='extencions' />
						</div>
					</div>
				</div>
			</section>

			<section className={styles.lunarSection}>
				<div className={styles.lunarWrapper}>
					<div className={styles.lunarContent}>
						<div className={styles.mainBlock}>
							<div className={styles.top}>
								<div className={styles.left}>
									<h2>{t('roadmap_mission_title')}</h2>
									<p>{t('roadmap_mission_p1')}</p>
									<p>{t('roadmap_mission_p2')}</p>
								</div>
								<div className={styles.right}>
									<img src='/img/lunarCharts.svg' alt='lunarCharts' />
								</div>
							</div>
							<div className={styles.bottom}>
								<div className={styles.left}>
									<p>{t('roadmap_mission_p3')}</p>
									<img src='/img/lunarUi.svg' alt='lunarUi' />
								</div>
								<div className={styles.right}>
									<p>{t('roadmap_mission_p4')}</p>
									<img src='/img/lunarCoin.svg' alt='lunarCoin' />
								</div>
							</div>
						</div>
						<p className={styles.bottomTxt}>{t('roadmap_mission_bottom')}</p>
					</div>
				</div>
			</section>

			<section className={styles.conclusionSection}>
				<div className={styles.conclusionWrapper}>
					<div className={styles.conclusionContent}>
						<div className={styles.icon}>
							<SmallWhiteLogo />
							<p>{t('roadmap_conclusion_label')}</p>
						</div>
						<h2>{t('roadmap_conclusion_h2')}</h2>
						<p>{t('roadmap_conclusion_p1')}</p>
						<span>{t('roadmap_conclusion_span')}</span>
					</div>
				</div>
			</section>

			<section className={styles.factorsSection}>
				<div className={styles.factorsWrapper}>
					<div className={styles.factorsContent}>
						<div className={styles.left}>
							<p>{t('roadmap_factors_p1')}</p>
							<div className={styles.block}>
								<div className={styles.icon}>
									<GreenEcoIcon />
								</div>
								<div className={styles.txt}>
									<h3>{t('roadmap_green_title')}</h3>
									<p>{t('roadmap_green_p')}</p>
								</div>
							</div>
							<div className={styles.block}>
								<div className={styles.icon}>
									<IndustryIcon />
								</div>
								<div className={styles.txt}>
									<h3>{t('roadmap_industry_title')}</h3>
									<p>{t('roadmap_industry_p')}</p>
								</div>
							</div>
							<div className={styles.block}>
								<div className={styles.icon}>
									<GoldSectionIcon />
								</div>
								<div className={styles.txt}>
									<h3>{t('roadmap_jewelry_title')}</h3>
									<p>{t('roadmap_jewelry_p')}</p>
								</div>
							</div>
							<p>{t('roadmap_factors_p2')}</p>
						</div>
						<div className={styles.right}>
							<img src='/img/factorsImg.png' alt='factors' />
						</div>
					</div>
				</div>
			</section>

			<section className={styles.statisticsSection}>
				<div className={styles.statisticsWrapper}>
					<div className={styles.statisticsContent}>
						<div className={styles.left}>
							<img src='/img/statImg.png' alt='statistics' />
						</div>
						<div className={styles.right}>
							<p>{t('roadmap_stats_p1')}</p>
							<p>{t('roadmap_stats_p2')}</p>
							<p>{t('roadmap_stats_p3')}</p>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.finalSection}>
				<div className={styles.finalWrapper}>
					<div className={styles.finalContent}>
						<div className={styles.icon}>
							<SmallWhiteLogo />
							<span>{t('roadmap_final_brand')}</span>
						</div>
						<p>{t('roadmap_final_p1')}</p>
						<p>{t('roadmap_final_p2')}</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default RoadMapScreen
