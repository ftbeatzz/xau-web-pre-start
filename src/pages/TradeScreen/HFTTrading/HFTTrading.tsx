import React from 'react'
import styles from './HFTTrading.module.scss'
import TradeChart from './TradeChart'
import CloudIcon from '../../../icons/CloudIcon'
import CodeIcon from '../../../icons/CodeIcon'
import NetworkStationIcon from '../../../icons/NetworkStationIcon'
import WhiteCheckIcon from '../../../icons/WhiteCheckIcon'
import WiFiIcon from '../../../icons/WiFiIcon'
import CandleIcon from '../../../icons/CandleIcon'
import SnipingIcon from '../../../icons/SnipingIcon'
import { useTranslation } from 'react-i18next'

const HFTTrading: React.FC = () => {
	const { t } = useTranslation()

	return (
		<div className={styles.main}>
			<section className={styles.heroSection}>
				<div className={styles.heroWrapper}>
					<div className={styles.heroContent}>
						<h1>{t('trade_hero_title')}</h1>
						<h2>{t('trade_hero_subtitle')}</h2>
						<div className={styles.heroBlock}>
							<p>{t('trade_hero_p1')}</p>
							<p>{t('trade_hero_p2')}</p>
							<div className={styles.tradeChart}>
								<TradeChart />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.advantagesSection}>
				<div className={styles.advantagesWrapper}>
					<div className={styles.advantagesContent}>
						<h2 className={styles.advantagesTitle}>
							{t('trade_advantages_title')}
						</h2>
						<div className={styles.advantagesTop}>
							<div className={styles.advantagesItem}>
								<div className={styles.advantagesIcon}>
									<CloudIcon />
								</div>
								<div className={styles.advantagesTxt}>
									<h2>{t('trade_advantages_hardware_title')}</h2>
									<p>{t('trade_advantages_hardware_p')}</p>
								</div>
							</div>
							<div className={styles.advantagesItem}>
								<div className={styles.advantagesIcon}>
									<CodeIcon />
								</div>
								<div className={styles.advantagesTxt}>
									<h2>{t('trade_advantages_software_title')}</h2>
									<p>{t('trade_advantages_software_p')}</p>
								</div>
							</div>
							<div className={styles.advantagesItem}>
								<div className={styles.advantagesIcon}>
									<NetworkStationIcon />
								</div>
								<div className={styles.advantagesTxt}>
									<h2>{t('trade_advantages_network_title')}</h2>
									<p>{t('trade_advantages_network_p')}</p>
								</div>
							</div>
						</div>
						<div className={styles.gradientLine}></div>
						<div className={styles.advantagesBottom}>
							<div className={styles.advantagesItem}>
								<div className={styles.advantagesIcon}>
									<WhiteCheckIcon />
								</div>
								<p>{t('trade_advantages_list1')}</p>
							</div>
							<div className={styles.advantagesItem}>
								<div className={styles.advantagesIcon}>
									<WhiteCheckIcon />
								</div>
								<p>{t('trade_advantages_list2')}</p>
							</div>
							<div className={styles.advantagesItem}>
								<div className={styles.advantagesIcon}>
									<WhiteCheckIcon />
								</div>
								<p>{t('trade_advantages_list3')}</p>
							</div>
							<div className={styles.advantagesItem}>
								<div className={styles.advantagesIcon}>
									<WhiteCheckIcon />
								</div>
								<p>{t('trade_advantages_list4')}</p>
							</div>
							<div className={styles.advantagesItem}>
								<div className={styles.advantagesIcon}>
									<WhiteCheckIcon />
								</div>
								<p>{t('trade_advantages_list5')}</p>
							</div>
							<div className={styles.advantagesItem}>
								<div className={styles.advantagesIcon}>
									<WhiteCheckIcon />
								</div>
								<p>{t('trade_advantages_list6')}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.yellowLine}>
				<p>{t('trade_yellow_line')}</p>
			</section>
			<section className={styles.architectureSection}>
				<div className={styles.architectureWrapper}>
					<div className={styles.architectureContent}>
						<h2 className={styles.architectureTitle}>
							{t('trade_architecture_title')}
						</h2>
						<div className={styles.architectureTop}>
							<div className={styles.left}>
								<img src='/img/Diagram.svg' alt='' />
							</div>
							<div className={styles.right}>
								<div className={styles.block}>
									<p>{t('trade_architecture_block1')}</p>
								</div>
								<div className={styles.block}>
									<p>{t('trade_architecture_block2')}</p>
								</div>
								<div className={styles.block}>
									<p>{t('trade_architecture_block3')}</p>
								</div>
								<div className={styles.block}>
									<p>{t('trade_architecture_block4')}</p>
								</div>
							</div>
						</div>
						<div className={styles.architectureBottom}>
							<div className={styles.listItem}>
								<h2>{t('trade_architecture_market_feed_title')}</h2>
								<ul>
									<li>{t('trade_architecture_market_feed_li1')}</li>
									<li>{t('trade_architecture_market_feed_li2')}</li>
									<li>{t('trade_architecture_market_feed_li3')}</li>
								</ul>
							</div>
							<div className={styles.listItem}>
								<h2>{t('trade_architecture_parser_title')}</h2>
								<ul>
									<li>{t('trade_architecture_parser_li1')}</li>
									<li>{t('trade_architecture_parser_li2')}</li>
									<li>{t('trade_architecture_parser_li3')}</li>
								</ul>
							</div>
							<div className={styles.listItem}>
								<h2>{t('trade_architecture_order_book_title')}</h2>
								<ul>
									<li>{t('trade_architecture_order_book_li1')}</li>
									<li>{t('trade_architecture_order_book_li2')}</li>
									<li>{t('trade_architecture_order_book_li3')}</li>
								</ul>
							</div>
							<div className={styles.listItem}>
								<h2>{t('trade_architecture_risk_title')}</h2>
								<ul>
									<li>{t('trade_architecture_risk_li1')}</li>
									<li>{t('trade_architecture_risk_li2')}</li>
								</ul>
							</div>
							<div className={styles.listItem}>
								<h2>{t('trade_architecture_order_sender_title')}</h2>
								<ul>
									<li>{t('trade_architecture_order_sender_li1')}</li>
									<li>{t('trade_architecture_order_sender_li2')}</li>
									<li>{t('trade_architecture_order_sender_li3')}</li>
								</ul>
							</div>
							<div className={styles.listItem}>
								<h2>{t('trade_architecture_feedback_title')}</h2>
								<ul>
									<li>{t('trade_architecture_feedback_li1')}</li>
									<li>{t('trade_architecture_feedback_li2')}</li>
								</ul>
							</div>
							<div className={styles.listItem}>
								<h2>{t('trade_architecture_monitoring_title')}</h2>
								<ul>
									<li>{t('trade_architecture_monitoring_li1')}</li>
									<li>{t('trade_architecture_monitoring_li2')}</li>
									<li>{t('trade_architecture_monitoring_li3')}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.htfSystem}>
				<div className={styles.htfSystemContent}>
					<h2>{t('trade_htf_title')}</h2>
					<img src='/img/DiagramHFTDesc.png' alt='' />
					<img src='/img/DiagramHFTMobile.png' alt='' />
				</div>
			</section>
			<section className={styles.methodologySection}>
				<div className={styles.methodologyWrapper}>
					<div className={styles.methodologyContent}>
						<h2 className={styles.methodologyTitle}>
							{t('trade_methodology_title')}
						</h2>
						<div className={styles.methodologyTop}>
							<div className={styles.left}>
								<h2>{t('trade_methodology_market_making_title')}</h2>
								<p>{t('trade_methodology_market_making_p1')}</p>
								<p>
									<b>{t('trade_methodology_market_making_p2')}</b>
								</p>
								<p>{t('trade_methodology_market_making_example')}</p>
								<p>{t('trade_methodology_market_making_price')}</p>
								<li>{t('trade_methodology_market_making_buy')}</li>
								<a href='https://app.uniswap.org/' className={styles.link}>
									<p>{t('trade_methodology_market_making_uniswap')}</p>
									<span>
										{t('trade_methodology_market_making_uniswap_url')}
									</span>
								</a>
								<li>{t('trade_methodology_market_making_sell')}</li>
								<span>{t('trade_methodology_market_making_profit')}</span>
								<p>{t('trade_methodology_market_making_other')}</p>
							</div>
							<div className={styles.right}>
								<img src='/img/MethodologyTop.png' alt='' />
							</div>
						</div>

						<div className={styles.methodologyBottom}>
							<div className={styles.left}>
								<img src='/img/MethodologyBottom.png' alt='' />
							</div>
							<div className={styles.right}>
								<h2>{t('trade_methodology_arbitrage_title')}</h2>
								<p>{t('trade_methodology_arbitrage_p1')}</p>
								<p>{t('trade_methodology_arbitrage_example')}</p>
								<p>{t('trade_methodology_arbitrage_ounce')}</p>
								<div className={styles.block}>
									<p>{t('trade_methodology_arbitrage_exchange')}</p>
									<a href='https://www.mexc.com/' className={styles.link}>
										<p>{t('trade_methodology_arbitrage_mexc')}</p>
										<span>{t('trade_methodology_arbitrage_mexc_url')}</span>
									</a>
									<p>
										<b>{t('trade_methodology_arbitrage_mexc_price')}</b>
									</p>
								</div>
								<div className={styles.block}>
									<p>{t('trade_methodology_arbitrage_and')}</p>
									<a href='(https://app.uniswap.org/)' className={styles.link}>
										<p>{t('trade_methodology_arbitrage_okx')}</p>
										<span>{t('trade_methodology_arbitrage_okx_url')}</span>
									</a>
									<p>
										<b>{t('trade_methodology_arbitrage_okx_price')}</b>
									</p>
								</div>
								<p>{t('trade_methodology_arbitrage_bot')}</p>
								<p>{t('trade_methodology_arbitrage_strategy')}</p>
							</div>
						</div>

						<div className={styles.methodologyBlocks}>
							<div className={styles.top}>
								<div className={styles.block}>
									<div className={styles.icon}>
										<WiFiIcon />
									</div>
									<div className={styles.txt}>
										<h2>{t('trade_methodology_latency_title')}</h2>
										<p>{t('trade_methodology_latency_p')}</p>
									</div>
								</div>
								<div className={styles.block}>
									<div className={styles.icon}>
										<CandleIcon />
									</div>
									<div className={styles.txt}>
										<h2>{t('trade_methodology_momentum_title')}</h2>
										<p>{t('trade_methodology_momentum_p')}</p>
									</div>
								</div>
							</div>

							<div className={styles.bottom}>
								<div className={styles.block}>
									<div className={styles.icon}>
										<SnipingIcon />
									</div>
									<div className={styles.txt}>
										<h2>{t('trade_methodology_sniping_title')}</h2>
										<p>{t('trade_methodology_sniping_p1')}</p>
										<p>{t('trade_methodology_sniping_p2')}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default HFTTrading
