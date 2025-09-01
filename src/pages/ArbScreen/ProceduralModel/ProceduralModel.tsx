import React from 'react'
import styles from './ProceduralModal.module.scss'
import CandlesIcon from '../../../icons/CandlesIcon'
import ArbModelIcon from '../../../icons/ArbModelIcon'
import ProfitIcon from '../../../icons/ProfitIcon'
import ArrowListIcon from '../../../icons/ArrowListIcon'
import LocationIcon from '../../../icons/LocationIcon'
import FiltresIcon from '../../../icons/FiltresIcon'
import CheckListIcon from '../../../icons/CheckListIcon'
import SettingsIcon from '../../../icons/SettingsIcon'
import { useTranslation, Trans } from 'react-i18next'

// Временная компоновка: переиспользуем Commerce ProceduralModel
const ArbProceduralModel: React.FC = () => {
	const { t } = useTranslation()
	return (
		<div className={styles.main}>
			<div className={styles.heroSection}>
				<div className={styles.heroWrapper}>
					<div className={styles.heroContent}>
						<div className={styles.heroTitle}>
							<h1>XAU ARB</h1>
							<h2>{t('arb_hero_h2')}</h2>
						</div>
						<p>{t('arb_hero_p1')}</p>
						<ul>
							<li>
								<div>
									<CandlesIcon />
								</div>
								<span>{t('arb_hero_li1')}</span>
							</li>
							<li>
								<div>
									<CandlesIcon />
								</div>
								<span>{t('arb_hero_li2')}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className={styles.modelSection}>
				<div className={styles.modelWrapper}>
					<div className={styles.modelContent}>
						<div className={styles.left}>
							<p>{t('arb_model_p1')}</p>
							<p>{t('arb_model_p2')}</p>
						</div>
						<div className={styles.right}>
							<img src='/img/exchUI.png' alt='xau-arb-model' />
						</div>
					</div>
				</div>
			</div>

			<div className={styles.strategySection}>
				<div className={styles.strategyWrapper}>
					<div className={styles.strategyContent}>
						<h2>{t('arb_strategy_h2')}</h2>
						<div className={styles.blocksWrapper}>
							<div className={styles.block}>
								<div className={styles.heading}>
									<span>
										<ArbModelIcon />
									</span>
									<h3>{t('arb_strategy_block1_h3')}</h3>
								</div>
								<p>{t('arb_strategy_block1_p')}</p>
							</div>
							<div className={styles.block}>
								<div className={styles.heading}>
									<span>
										<ProfitIcon />
									</span>
									<h3>{t('arb_strategy_block2_h3')}</h3>
								</div>
								<h4>{t('arb_strategy_block2_h4')}</h4>
								<p>{t('arb_strategy_block2_p')}</p>
							</div>
							<div className={styles.block}>
								<div className={styles.heading}>
									<span>
										<ArrowListIcon />
									</span>
									<h3>{t('arb_strategy_block3_h3')}</h3>
								</div>
								<p>
									<Trans
										i18nKey='arb_strategy_block3_p'
										components={{ span: <span /> }}
									/>
								</p>
							</div>
						</div>
						<div className={styles.bottomBlock}>
							<div className={styles.heading}>
								<span>
									<LocationIcon />
								</span>
								<h3>{t('arb_required_h3')}</h3>
							</div>
							<p>{t('arb_required_p')}</p>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.optimizeTokensSection}>
				<div className={styles.optimizeTokensWrapper}>
					<div className={styles.optimizeTokensContent}>
						<h2>{t('arb_optimize_h2')}</h2>
						<p>{t('arb_optimize_p1')}</p>
						<p>{t('arb_optimize_p2')}</p>
						<p>{t('arb_optimize_p3')}</p>
					</div>
				</div>
			</div>

			<div className={styles.priceSection}>
				<div className={styles.priceWrapper}>
					<div className={styles.priceContent}>
						<div className={styles.left}>
							<div className={styles.title}>
								<span>{t('arb_price_token_label')}</span>
								<h2>{t('arb_price_paxg_title')}</h2>
							</div>
							<div className={styles.img}>
								<img src='/img/paxPrice.png' alt='paxg' />
							</div>
						</div>
						<div className={styles.right}>
							<div className={styles.title}>
								<span>{t('arb_price_token_label')}</span>
								<h2>{t('arb_price_xaut_title')}</h2>
							</div>
							<div className={styles.img}>
								<img src='/img/xauPrice.png' alt='paxg' />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.stepSection}>
				<div className={styles.stepWrapper}>
					<div className={styles.title}>
						<p>{t('arb_step_intro_p')}</p>
					</div>
					<div className={styles.stepContent}>
						<div className={styles.stepItem}>
							<h2>{t('arb_step1_h2')}</h2>
							<div className={styles.step}>
								<div className={styles.img}>
									<img src='/img/arbStep1.png' alt='step1' />
								</div>
								<div className={styles.content}>
									<div className={styles.left}>
										<span>
											<FiltresIcon />
										</span>
										<div>
											<img src='/img/arbLargeArrow.png' alt='arbArrow' />
										</div>
										<span>
											<CheckListIcon />
										</span>
										<div>
											<img src='/img/arbShortArrow.png' alt='arbArrow' />
										</div>
										<span>
											<SettingsIcon />
										</span>
									</div>
									<div className={styles.right}>
										<div className={styles.top}>
											<p>{t('arb_step1_top_p')}</p>
											<div className={styles.block}>
												<h3>
													Биржа: <span>CoinEx</span>
												</h3>
												<h3>
													Price sell пара PAXG/USDT: <span>3,384.82 USDT.</span>
												</h3>
											</div>
											<div className={styles.block}>
												<h3>
													Биржа: <span>Latoken</span>
												</h3>
												<h3>
													Price sell пара PAXG/USDT: <span>3,366.07 USDT.</span>
												</h3>
											</div>
										</div>
										<div className={styles.middle}>
											<p>{t('arb_step1_middle_p')}</p>
											<div className={styles.block}>
												<span>20 PAX Gold (PAXG)</span>
												<h3>{t('arb_step1_middle_h3')}</h3>
											</div>
										</div>
										<div className={styles.bottom}>
											<p>{t('arb_step1_bottom_p1')}</p>
											<p>{t('arb_step1_bottom_p2')}</p>
										</div>
									</div>
								</div>
							</div>
							<div className={styles.arrow}>
								<div className={styles.img}>
									<img src='/img/arbStepsArrow1.png' alt='step2' />
								</div>
							</div>
							<div className={styles.stepItem}>
								<h2>{t('arb_step2_h2')}</h2>
								<div className={styles.step}>
									<div className={styles.content}>
										<div className={styles.right}>
											<div className={styles.top}>
												<p>{t('arb_step2_top_p1')}</p>
												<p>{t('arb_step2_top_p2')}</p>
												<div className={styles.block}>
													<h3>
														{t('arb_step_pair')} <span>PAXG/ USDT.</span>
													</h3>
													<h3>
														{t('arb_step_volume')} <span>20 PAXG.</span>
													</h3>
													<h3>
														{t('arb_step_price')} <span>3,384.82 USDT.</span>
													</h3>
													<h3>
														{t('arb_step_fee')} <span>0.08%</span>
													</h3>
													<span className={styles.grayTxt}>
														{t('arb_step_gray')}
													</span>
													<h3>
														{t('arb_step_claimed')}
														<span className={styles.goldTxt}>
															67, 642.24 USDT.
														</span>
													</h3>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={styles.arrow}>
								<div className={styles.img}>
									<img src='/img/arbStepsArrow2.png' alt='step3' />
								</div>
							</div>
							<div className={styles.stepItem}>
								<h2>{t('arb_step3_h2')}</h2>
								<div className={styles.step}>
									<div className={styles.img}>
										<img src='/img/arbStep3.png' alt='step3' />
									</div>
									<div className={styles.content}>
										<div className={styles.right}>
											<div className={styles.top}>
												<p>{t('arb_step3_top_p1')}</p>
												<div className={styles.block}>
													<h3>
														{t('arb_step_pair')} <span>USDT/PAXG.</span>
													</h3>
													<h3>
														{t('arb_step_volume')} <span>67642.24 USDT.</span>
													</h3>
													<h3>
														{t('arb_step_price')} <span>3,366.07 USDT.</span>
													</h3>
													<h3>
														{t('arb_step_fee')} <span>0.1%</span>
													</h3>
													<span className={styles.grayTxt}>
														{t('arb_step_gray')}
													</span>
													<h3>
														{t('arb_step_claimed')}
														<span className={styles.goldTxt}>20.075 PAXG.</span>
													</h3>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.conclusiaSection}>
				<div className={styles.conclusiaWrapper}>
					<div className={styles.conclusiaContent}>
						<h2>{t('arb_result_h2')}</h2>
						<div className={styles.blocksWrapper}>
							<div className={styles.block}>
								<h3>0.075 PAXG</h3>
								<p>{t('arb_result_profit_label')}</p>
							</div>
							<img src='/img/yellowArrow.png' alt='arrow' />
							<div className={styles.block}>
								<h3>250 USDT</h3>
								<p>{t('arb_result_profit_label')}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.finalSection}>
				<div className={styles.finalWrapper}>
					<div className={styles.finalContent}>
						<p>{t('arb_final_p1')}</p>
						<span>{t('arb_final_span')}</span>
						<p>{t('arb_final_p2')}</p>
						<p>
							<Trans
								i18nKey='arb_final_recommendation'
								components={{ b: <b /> }}
							/>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ArbProceduralModel
