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

// Временная компоновка: переиспользуем Commerce ProceduralModel
const ArbProceduralModel: React.FC = () => {
	return (
		<div className={styles.main}>
			<div className={styles.heroSection}>
				<div className={styles.heroWrapper}>
					<div className={styles.heroContent}>
						<div className={styles.heroTitle}>
							<h1>XAU ARB</h1>
							<h2>Арбитражная операционная модель</h2>
						</div>
						<p>
							Здесь мы с вами рассмотрим еще один вариант стратегии, которая
							применяется компанией XAU TRADERZ в рамках коммерческих стратегий
							для извлечения прибыли.
						</p>
						<ul>
							<li>
								<div>
									<CandlesIcon />
								</div>
								<span>
									Данная модель используется в те периоды, когда на DEX биржах
									нет необходимой ликвидности для обмена объёма одного типа
									токена на другой и последующей продажи его по принципу
									основной процессуальной модели коммерческих операций.
								</span>
							</li>
							<li>
								<div>
									<CandlesIcon />
								</div>
								<span>
									А также, когда и на CEX биржах, где одновременно торгуются два
									токена XAUТ и PAXG, таких как: Gate, Ourbit, CoinW, Bitrue и
									других, мы не можем провести такой обмен в паре PAXG/XAUt или
									XAUt/PAXG по причине того, что обмен будет не выгодным и в
									итог коммерческой операции не принесет прибыль.
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className={styles.modelSection}>
				<div className={styles.modelWrapper}>
					<div className={styles.modelContent}>
						<div className={styles.left}>
							<p>
								Это процессуальная модель арбитражного обмена с использованием
								разных централизованных торговых платформ, стейблкоинов XAUТ,
								PAXG и USDT, с фиксацией прибыли на спреде, образованного за
								счет разницы в ценах на активы XAUТ или PAXG.
							</p>
							<p>
								На всех биржах, которые применяются в этой стратегии, XAU
								TRADERZ имеет корпоративные счета с объёмами криптоактивов, в
								том числе валютные счета для расчета в государственных валютах.
							</p>
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
						<h2>АРБИТРАЖНАЯ СТРАТЕГИЯ</h2>
						<div className={styles.blocksWrapper}>
							<div className={styles.block}>
								<div className={styles.heading}>
									<span>
										<ArbModelIcon />
									</span>
									<h3>Готовая арбитражная модель</h3>
								</div>
								<p>
									Вы можете индивидуально повторить и использовать эту
									стратегию, как готовую арбитражную схему работы в таком
									порядке, как работают торговые аналитики компании XAU TRADERZ.
								</p>
							</div>
							<div className={styles.block}>
								<div className={styles.heading}>
									<span>
										<ProfitIcon />
									</span>
									<h3>Доходность</h3>
								</div>
								<h4>50%</h4>
								<p>
									Эта стратегия гарантированно может обеспечить профит 50% в
									месяц.
								</p>
							</div>
							<div className={styles.block}>
								<div className={styles.heading}>
									<span>
										<ArrowListIcon />
									</span>
									<h3>Важно!</h3>
								</div>
								<p>
									Минимальный объём токенов для получения выгодной арбитражной
									операции, с учетом комиссий, составляет{' '}
									<span>- 10 XAUt, 10 PAXG и 25 000 USDT.</span>
								</p>
							</div>
						</div>
						<div className={styles.bottomBlock}>
							<div className={styles.heading}>
								<span>
									<LocationIcon />
								</span>
								<h3>Необходимый объем для старта</h3>
							</div>
							<p>
								На кошельках криптобирж всегда необходимо держать активы в XAUТ,
								PAXG и USDT, чтобы иметь возможность в любой момент использовать
								их в качестве стартового токена.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.optimizeTokensSection}>
				<div className={styles.optimizeTokensWrapper}>
					<div className={styles.optimizeTokensContent}>
						<h2>Поиск оптимального токена перед сделкой</h2>
						<p>
							Перед началом слелки XAU ARB, мы определяем какой из токенов XAUТ
							или PAXG нам выгоднее всего использовать в данный момент.
						</p>
						<p>
							Мы можем проводить арбитражный обмен одновременно двумя токенами,
							если высокие арбитражные спреды обнаружены по двум позициям.
						</p>
						<p>
							Для этого, мониторим цену покупки и продажи каждого из токенов на
							разных биржевых платформах.
						</p>
					</div>
				</div>
			</div>

			<div className={styles.priceSection}>
				<div className={styles.priceWrapper}>
					<div className={styles.priceContent}>
						<div className={styles.left}>
							<div className={styles.title}>
								<span>ТОКЕН</span>
								<h2>PAX Gold (PAXG)</h2>
							</div>
							<div className={styles.img}>
								<img src='/img/paxPrice.png' alt='paxg' />
							</div>
						</div>
						<div className={styles.right}>
							<div className={styles.title}>
								<span>ТОКЕН</span>
								<h2>Tether Gold (XAUt)</h2>
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
						<p>
							Для примера этой арбитражной стратегии будем использовать
							криптоактив PAX Gold (PAXG) и лучшее предложение по его продаже и
							покупке.
						</p>
					</div>
					<div className={styles.stepContent}>
						<div className={styles.stepItem}>
							<h2>Шаг 1</h2>
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
											<p>
												Зафиксируем данные: выбранные криптобиржи, цены продажи
												и покупки по маркету бирж и объёмы криптоактивов,
												которые будем использовать в арбитражной операции.
											</p>
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
											<p>Применяем в арбитражной операции объём:</p>
											<div className={styles.block}>
												<span>20 PAX Gold (PAXG)</span>
												<h3>
													Выделяется с корпоративного на счета биржи CoinEx.
												</h3>
											</div>
										</div>
										<div className={styles.bottom}>
											<p>
												Авто ботом стратегии рассчитывается необходимый объём
												актива в USDT (с учетом торговых комиссий и применимых
												индексов), который будет выделен с общего объёма
												корпоративного счета биржи Latoken для проведения этой
												операции ~ 67643 USDT.
											</p>
											<p>
												Активы готовы для одновременной сделки продажи и покупки
												PAX Gold (PAXG) по маркету криптобирж.
											</p>
										</div>
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
							<h2>Шаг 2</h2>
							<div className={styles.step}>
								<div className={styles.content}>
									<div className={styles.right}>
										<div className={styles.top}>
											<p>Поводим продажу PAXG на бирже CoinEx.</p>
											<p>
												На всех биржах, которые применяются в этой стратегии,
												XAU TRADERZ имеет корпоративные счета с объёмами
												криптоактивов, в том числе валютные счета для расчета в
												государственных валютах.
											</p>
											<div className={styles.block}>
												<h3>
													Пара: <span>PAXG/ USDT.</span>
												</h3>
												<h3>
													Объём: <span>20 PAXG.</span>
												</h3>
												<h3>
													Цена: <span>3,384.82 USDT.</span>
												</h3>
												<h3>
													Комиссия за обмен: <span>0.08%</span>
												</h3>
												<span className={styles.grayTxt}>
													(зависит от выторгованного объёма за последние 30
													дней).
												</span>
												<h3>
													Получено:{' '}
													<span className={styles.goldTxt}>
														67, 642.24 USDT.
													</span>
												</h3>
											</div>
										</div>
									</div>
								</div>
								<div className={styles.img}>
									<img src='/img/arbStep2.png' alt='step1' />
								</div>
							</div>
						</div>
						<div className={styles.arrow}>
							<div className={styles.img}>
								<img src='/img/arbStepsArrow2.png' alt='step3' />
							</div>
						</div>
						<div className={styles.stepItem}>
							<h2>Шаг 3</h2>
							<div className={styles.step}>
								<div className={styles.img}>
									<img src='/img/arbStep3.png' alt='step3' />
								</div>
								<div className={styles.content}>
									<div className={styles.right}>
										<div className={styles.top}>
											<p>Проводим покупку PAXG на бирже Latoken. </p>
											<div className={styles.block}>
												<h3>
													Пара: <span>USDT/PAXG.</span>
												</h3>
												<h3>
													Объём: <span>67642.24 USDT.</span>
												</h3>
												<h3>
													Цена: <span>3,366.07 USDT.</span>
												</h3>
												<h3>
													Комиссия за обмен: <span>0.1%</span>
												</h3>
												<span className={styles.grayTxt}>
													(зависит от выторгованного объёма за последние 30
													дней).
												</span>
												<h3>
													Получено:{' '}
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

			<div className={styles.conclusiaSection}>
				<div className={styles.conclusiaWrapper}>
					<div className={styles.conclusiaContent}>
						<h2>Итог арбитражной сделки</h2>
						<div className={styles.blocksWrapper}>
							<div className={styles.block}>
								<h3>0.075 PAXG</h3>
								<p>Чистой прибыли</p>
							</div>
							<img src='/img/yellowArrow.png' alt='arrow' />
							<div className={styles.block}>
								<h3>250 USDT</h3>
								<p>Чистой прибыли</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.finalSection}>
				<div className={styles.finalWrapper}>
					<div className={styles.finalContent}>
						<p>
							По стратегии, которая открыта выше, средний оборот арбитражных
							операций компании XAU, с одним или одновременно двумя токенами
							цифрового золота, за 24 часа может достигать 15-20- ти сделок.
						</p>
						<span>
							При общем обороте объёма в PAXG и USDT около 140 000 USDT, с
							учетом погрешностей и операционных затрат, прибыль за 24 часа
							может составить около 2-6 % от объёма или более 50% в месяц.
						</span>
						<p>
							Чем выше объём оборотного актива, тем существеннее прибыль от
							арбитражных спредов.
						</p>
						<p>
							<b>
								Рекомендовано! Стабильно увеличивать капитализацию оборотного
								актива портфеля и прирост финансового капитала.
							</b>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ArbProceduralModel
