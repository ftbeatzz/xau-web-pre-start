import React from 'react'
import styles from './ProceduralModel.module.scss'
import YellowCheckIcon from '../../../icons/YellowCheckIcon'
import StudyingIcon from '../../../icons/StudyingIcon'
import AssetsIcon from '../../../icons/AssetsIcon'
import WarningIcon from '../../../icons/WarningIcon'
import LinkIcon from '../../../icons/LinkIcon'
import CalendarIcon from '../../../icons/CalendarIcon'
import StatIcon from '../../../icons/StatIcon'
import TradeIcon from '../../../icons/TradeIcon'
import MoneyBackIcon from '../../../icons/MoneyBackIcon'
import { useTranslation, Trans } from 'react-i18next'

const ProceduralModel: React.FC = () => {
	const { t } = useTranslation()

	return (
		<div className={styles.main}>
			<section className={styles.heroSection}>
				<div className={styles.heroWrapper}>
					<div className={styles.heroContent}>
						<h2>{t('commerce_hero_title')}</h2>
						<ul>
							<li>
								<span>
									<YellowCheckIcon />
								</span>
								<span>{t('commerce_hero_list1')}</span>
							</li>
							<li>
								<span>
									<YellowCheckIcon />
								</span>
								<span>{t('commerce_hero_list2')}</span>
							</li>
							<li>
								<span>
									<YellowCheckIcon />
								</span>
								<span>{t('commerce_hero_list3')}</span>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section className={styles.studyingSection}>
				<div className={styles.studyingWrapper}>
					<div className={styles.studyingContent}>
						<h2>{t('commerce_studying_title')}</h2>
						<div className={styles.topBlock}>
							<div className={styles.leftItem}>
								<div className={styles.studyingIcon}>
									<StudyingIcon />
								</div>
								<div className={styles.middleTxt}>
									<p>{t('commerce_studying_top_p')}</p>
									<span>{t('commerce_studying_top_note')}</span>
								</div>
								<div className={styles.prices}>
									<h3>{t('commerce_studying_prices_title')}</h3>
									<p>
										<Trans i18nKey='commerce_studying_prices_bybit' />
									</p>
									<p>
										<Trans i18nKey='commerce_studying_prices_binance' />
									</p>
								</div>
							</div>
							<div className={styles.rightItem}>
								<div className={styles.chartBlockWrapper}>
									<img src='/img/ChartCommerce.png' alt='' />
								</div>
							</div>
						</div>
						<div className={styles.bottomBlocks}>
							<div className={styles.leftItem}>
								<div className={styles.itemIcon}>
									<AssetsIcon />
								</div>
								<h3>{t('commerce_studying_asset_title')}</h3>
								<p>{t('commerce_studying_asset_p')}</p>
								<span>{t('commerce_studying_asset_note')}</span>
								<div className={styles.imgWrapper}>
									<img src='/img/studyingImgLeft.png' alt='' />
								</div>
							</div>
							<div className={styles.rightItem}>
								<div className={styles.itemIcon}>
									<WarningIcon />
								</div>
								<h3>{t('commerce_studying_important_title')}</h3>
								<p>
									<Trans i18nKey='commerce_studying_important_p' />
								</p>
								<span>{t('commerce_studying_important_note')}</span>
								<div className={styles.imgWrapper}>
									<img src='/img/studyingImgRight.png' alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.stepsSection}>
				<div className={styles.stepsWrapper}>
					<div className={styles.stepsContent}>
						<div className={styles.firstStep}>
							<div className={styles.stepTitle}>
								{t('commerce_steps_step1_title')}
							</div>
							<div className={styles.stepItems}>
								<div className={styles.leftItem}>
									<img
										className={styles.imgDesc}
										src='/img/step1Img.png'
										alt=''
									/>
									<img
										className={styles.imgMobile}
										src='/img/step1Tablet.png'
										alt=''
									/>
								</div>
								<div className={styles.rightItem}>
									<div className={styles.lines}>
										<div className={styles.topIcon}>
											<LinkIcon />
										</div>
										<div className={styles.longLine}>
											<img src='/img/step1LongLine.png' alt='' />
										</div>
										<div className={styles.middleIcon}>
											<CalendarIcon />
										</div>
										<div className={styles.shortLine}>
											<img src='/img/step1ShortLine.png' alt='' />
										</div>
										<div className={styles.bottomIcon}>
											<StatIcon />
										</div>
									</div>
									<div className={styles.content}>
										<div className={styles.topTxt}>
											<div className={styles.topContent}>
												<p>
													{t('commerce_steps_step1_start')}
													<b>20 Tether Gold (XAUt)</b>.
												</p>
												<p>{t('commerce_steps_step1_exchange')}</p>
												<p>{t('commerce_steps_step1_swap')}</p>
											</div>
											<div className={styles.links}>
												<p>
													<a href=''>{t('commerce_steps_step1_uniswap')}</a>{' '}
													<span>{t('commerce_steps_step1_uniswap_url')}</span>
												</p>
												<p>
													<a href=''>{t('commerce_steps_step1_curve')}</a>{' '}
													<span>{t('commerce_steps_step1_curve_url')}</span>
												</p>
												<p>
													<a href=''>{t('commerce_steps_step1_balancer')}</a>{' '}
													<span>{t('commerce_steps_step1_balancer_url')}</span>
												</p>
											</div>
										</div>
										<div className={styles.middleTxt}>
											<p>{t('commerce_steps_step1_params')}</p>
											<div className={styles.middleBlock}>
												<span>{t('commerce_steps_step1_volume')}</span>
												<span>{t('commerce_steps_step1_pair')}</span>
											</div>
										</div>
										<div className={styles.bottomTxt}>
											<p>{t('commerce_steps_step1_give')}</p>
											<p>{t('commerce_steps_step1_receive')}</p>
											<p>
												{t('commerce_steps_step1_fee')}{' '}
												<span>{t('commerce_steps_step1_fee_note')}</span>.
											</p>
											<p>{t('commerce_steps_step1_send')}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.secondStep}>
							<div className={styles.stepTitle}>
								{t('commerce_steps_step2_title')}
							</div>
							<div className={styles.stepSubtitle}>
								<p>{t('commerce_steps_step2_received')}</p>
								<p>
									{t('commerce_steps_step2_exchange')}{' '}
									<a href=''>{t('commerce_steps_step2_exchange_url')}</a>
								</p>
								<p>{t('commerce_steps_step2_price')}</p>
							</div>
							<div className={styles.stepItems}>
								<div className={styles.leftItem}>
									<div className={styles.lines}>
										<div className={styles.topIcon}>
											<TradeIcon />
										</div>
										<div className={styles.longLine}>
											<img src='/img/step2ShortLine.png' alt='' />
										</div>
										<div className={styles.middleIcon}>
											<MoneyBackIcon />
										</div>
										<div className={styles.shortLine}>
											<img src='/img/step2LongLine.png' alt='' />
										</div>
										<div className={styles.bottomIcon}>
											<StatIcon />
										</div>
									</div>
									<div className={styles.content}>
										<div className={styles.topTxt}>
											<div className={styles.topContent}>
												<p>
													<b>{t('commerce_steps_step2_exchange_title')}</b>
												</p>
												<p>{t('commerce_steps_step2_pair')}</p>
												<p>{t('commerce_steps_step2_volume')}</p>
												<p>{t('commerce_steps_step2_fee')}</p>
											</div>
											<div className={styles.topBlock}>
												{t('commerce_steps_step2_received_amount')}
											</div>
										</div>
										<div className={styles.middleTxt}>
											<p>
												<b>{t('commerce_steps_step2_return')}</b>
											</p>
											<p>{t('commerce_steps_step2_xaut_price')}</p>
											<p>{t('commerce_steps_step2_usdt_pair')}</p>
											<p>{t('commerce_steps_step2_usdt_volume')}</p>
											<p>{t('commerce_steps_step2_usdt_fee')}</p>
											<p>{t('commerce_steps_step2_paxg_volume')}</p>
											<div className={styles.middleBlock}>
												<span>{t('commerce_steps_step2_final_received')}</span>
												<span>{t('commerce_steps_step2_withdrawal_fee')}</span>
											</div>
										</div>
										<div className={styles.bottomBlock}>
											<p>{t('commerce_steps_step2_complete')}</p>
											<p className={styles.goldTxt}>
												{t('commerce_steps_step2_profit')}
											</p>
											<span>{t('commerce_steps_step2_note')}</span>
										</div>
									</div>
								</div>
								<div className={styles.rightItem}>
									<img src='/img/step2Img.png' alt='' />
									<img src='/img/step2Tablet.png' alt='' />
								</div>
							</div>
						</div>

						<div className={styles.finalTxt}>
							<p>{t('commerce_final_strategy')}</p>
							<p className={styles.goldTxt}>{t('commerce_final_profit')}</p>
							<p>{t('commerce_final_volume')}</p>
							<p className={styles.boldTxt}>
								{t('commerce_final_recommendation')}
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ProceduralModel
