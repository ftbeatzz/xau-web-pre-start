import React from 'react'
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
	return (
		<div className={styles.main}>
			<div className={styles.heroSection}>
				<div className={styles.heroWrapper}>
					<div className={styles.heroContent}>
						<div className={styles.icon}>
							<SmallWhiteLogo />
							<span>XAU LIMITED</span>
						</div>
						<h1>Стратегическое планирование компании </h1>
						<div className={styles.blocksWrapper}>
							<div className={styles.block}>
								<p>
									Компания XAU имеет одну глобальную цель, к которой выработана
									стратегия, запланирована реализация и конкретные пути для ее
									достижения.
								</p>
							</div>
							<div className={styles.block}>
								<p>
									Эта цель лежит в основе становления сервиса XAU и его
									приоритетным расчетом для реализации.
								</p>
							</div>
						</div>
						<div className={styles.blockBottom}>
							<p>
								Масштабность стратегического плана превосходит все другие
								аспекты и направления в развитии XAU, которые на фоне этого
								кажутся ежедневными задачами команды для усовершенствования
								предоставления услуг.
							</p>
						</div>
					</div>
				</div>
			</div>

			<section className={styles.strategySection}>
				<div className={styles.strategyWrapper}>
					<div className={styles.strategyContent}>
						<div className={styles.left}>
							<h2>Стратегическая разработка</h2>
							<div className={styles.txt}>
								<h3>Итак,</h3>
								<p>
									стратегическая разработка основана на создании юридически
									защищенных и полностью обеспеченных физическим серебром
									стейблкоинов.
								</p>
								<p>
									Это именно те активы, которые защищены от банкротства, имеют
									стоимость 1:1 тройской унции серебра, регулируются
									Департаментом финансовых услуг и обеспечены 100% запасом, где
									качество металла соответствует стандарту Silver Delivery
									Лондонской ассоциации рынка драгоценных металлов (LBMA).
								</p>
								<p>
									Эта технология позволит владельцам токенов получить доступ к
									стейблкоину, который обеспечивает право собственности на
									физическое серебро.
								</p>
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
						<h2>Этапы реализации проекта</h2>
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
													<span>Выполнено</span>
												</p>
												<p className={styles.date}>Декабрь 2024 года.</p>
											</div>
										</div>
										<div className={styles.txt}>
											<div>
												<p>
													Основана специализированная Trust Company и
													зарегистрирована в государстве ОАЭ – это компания,
													предоставляющая услуги по управлению активами,
													обеспечивая их сохранность и приумножение, в
													соответствии с условиями трастового договора.
													Регулируется международным финансовом центром (DIFC) и
													законом о трастах (DIFC Trust Law).
												</p>
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
													<span>В процессе</span>
												</p>
												<p className={styles.date}>Январь 2025 года</p>
											</div>
										</div>
										<div className={styles.txt}>
											<div>
												<p>
													Старт для получения лицензии категории А (1) в ADGM
													(FSRA) Абу-Даби Глобальный Финансовый Рынок, которая
													является банковской и криптовалютной лицензией.
												</p>
											</div>
											<div>
												<span>Срок получения лицензии:</span>
												<p>
													12-15 месяцев (ориентировочно март-апрель 2026 года).
												</p>
											</div>
											<div>
												<h3>Покрытие лицензии:</h3>
											</div>
											<div>
												<span>Финансовые услуги:</span>
												<p>
													Прием депозитов, управление инвестиционными счетами с
													распределением прибыли (получаемой на неограниченной
													основе).
												</p>
											</div>
											<div>
												<span>Криптовалюты:</span>
												<p>
													Обмен криптовалют (trading), хранение криптовалют
													(custody), покупка и продажа криптовалют (dealing),
													управление криптоактивами и разработка собственных
													активов.
												</p>
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
													<span>Выполнено</span>
												</p>
												<p className={styles.date}>Август 2025 года</p>
											</div>
										</div>
										<div className={styles.txt}>
											<div>
												<span>Капитал:</span>
												<p>
													Владение необходимым капиталом на регулируемом
													банковском счету.
												</p>
											</div>
											<div>
												<span>Коммерческая операционная стратегия:</span>
												<p>
													Комплексная проверка предстателями DIFC и DFSA,
													бизнес-модели компании.
												</p>
											</div>
											<div>
												<span>Официальная подача заявки:</span>
												<p>
													Внутренние политики, документы KYC (знай своего
													клиента), а также назначены ключевые офицеры.
												</p>
											</div>
											<div>
												<span>Оценка FSRA:</span>
												<p>
													Занимала 5 месяцев, включает неограниченное количество
													интервью с топ-менеджментом и представителями
													регулирующих органов.
												</p>
											</div>
											<div>
												<h4>Компания получила предварительное одобрение.</h4>
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
													<span>В процессе</span>
												</p>
												<p className={styles.date}>Март-апрель 2026 года</p>
											</div>
										</div>
										<div className={styles.txt}>
											<div>
												<p>Завершение документального оформления.</p>
											</div>
											<div>
												<p>
													Предположительно, в период первого квартала 2026 года,
													и после выполнения всех основных и дополнительных
													требований, которые запрашиваются в период с января
													2025 года по февраль 2026 года, DFSA выдает Trust
													Company официальное разрешение на ведение деятельности
													(вышеупомянутую лицензию).
												</p>
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
						<h2>Технический проект</h2>
						<div className={styles.coinWrapper}>
							<img src='/img/silverCoin.png' alt='coin' />
							<h3>Цифровизация серебра</h3>
						</div>
						<div className={styles.txtWrapper}>
							<p>
								Это полностью зарезервированный токен, который объединяет
								стабильность серебра с технологией блокчейна - LUNAR Silver
								(LUN), стандарт ERC-20.
							</p>
							<p>
								Цена за единицу привязана к унции физического серебра (~ 38 $ на
								август 2025 года).
							</p>
							<p>
								Обеспечение Trust Silver Company — глобальной лицензированной
								финансовой платформой и сервисом цифровых активов.
							</p>
							<p>
								Каждый токен LUN обеспечен 1 унцией инвестиционного серебряного
								слитка, надежно хранящегося в полностью застрахованных и
								проверенных хранилищах Trust Silver Company. Проверен и советует
								стандарту Silver Delivery Лондонской ассоциации рынка
								драгоценных металлов (LBMA).
							</p>
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
									<h3>Выпуск токенов</h3>
									<p>
										Первичная чеканка запланирована в размере 2 000 000 монет,
										после проверки независимыми инспекторами физического
										внесения резерва серебряного запаса, объёме эквивалентном
										1:1 унции серебра.
									</p>
									<p>
										Ориентировочно первичный выпуск запланирован на март-апрель
										2026 года.
									</p>
									<p>
										При каждом новом обеспечении более высокими объемами
										серебра, будут проводится новые выпуски токенов.
									</p>
								</div>
							</div>
							<div className={styles.block}>
								<div className={styles.txt}>
									<h3>Финансирование</h3>
									<p>
										У LUNAR Silver (LUN) не будет прямого ICO, разработка
										финансируется родительским проектом XAU TRADING SOLUTIONS
										LTD.
									</p>
									<p>
										LUN чеканится только при внесении физического серебра,
										поэтому предпродажи или распределения токенов не будет.
									</p>
									<p>
										Компания XAU TRADING SOLUTIONS LTD разработала стратегию
										накопления необходимых средств для токенизации серебрянного
										запаса. В июне 2025 года капитализация активов компании
										составила 10 м. $, резервы находятся в биржевых оборотных
										активах и запасах токенизированного золота.
									</p>
									<p>
										Стабильный оборот активов компании и привлеченных в XAU
										Commerce инвестиционных активов, за 10 месяцев в полном
										объёме покроет обеспечение LUN серебряным запасом в
										необходимом количестве для чеканки монет.
									</p>
								</div>
								<img src='/img/tokenizeMapImg2.svg' alt='tokenize' />
							</div>
						</div>

						<div className={styles.bottom}>
							<div className={styles.block}>
								<div className={styles.txt}>
									<h3>Запуск и первичный листинг</h3>
									<p>
										LUNAR Silver (LUN) будет представлен как полностью
										обеспеченный цифровой токен, лицензированной финансовой
										компанией Trust Silver Company.
									</p>
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
						<h2>Доступ</h2>
						<div className={styles.blocksWrapper}>
							<div className={styles.block}>
								<h3>MetaMask или Trust Wallet</h3>
								<p>Криптовалютные кошельки</p>
							</div>
							<div className={styles.block}>
								<h3>Uniswap, PancakeSwap, SushiSwap</h3>
								<p>Децентрализованные биржи (DEX)</p>
							</div>
							<div className={styles.block}>
								<h3>BingX, Gate, OKX, Bybit</h3>
								<p>Централизованные биржи (CEX)</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.communitySection}>
				<div className={styles.communityWrapper}>
					<div className={styles.communityContent}>
						<div className={styles.left}>
							<h2>Сообщество и доходность</h2>
							<div className={styles.txt}>
								<p>
									Владельцы LUN впервые в истории будут получать прибыль по
									драгоценным металлам от итогов коммерческой деятельности
									компании. Все владельцы LUN будут иметь пассивный доход,
									ежедневно выплачиваемый в LUN.
								</p>
								<p>
									Доходность рассчитывается на основе 0.3% от глобальной
									коммерческой прибыли, которая распределяется между
									пользователями, хранящими свое серебро в проекте.
								</p>
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
							<h2>Внедрение карт</h2>
							<div className={styles.txt}>
								<p>
									Интегрированные карты LUN позволят держателям тратить LUNAR
									Silver по всему миру, объединяя цифровые токены и ежедневные
									платежи.
								</p>
								<p>
									Доступная через мобильное устройство, виртуальная карта
									позволит людям в любой точке мира мгновенно конвертировать
									свои активы в местную валюту в точке продажи, везде, где
									принимается Mastercard.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.extencionsSection}>
				<div className={styles.extencionsWrapper}>
					<div className={styles.extencionsContent}>
						<div className={styles.left}>
							<h2>Расширение и развитие</h2>
							<p>
								В будущих обновлениях основное внимание будет уделяться более
								широким альянсам, более высоким объемам серебра и более глубокой
								интеграции с функциями DeFi.
							</p>
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
									<h2>Миссия LUNAR Silver (LUN)</h2>
									<p>
										Вернуть физическое серебро в качестве денежного средства и
										предоставить мировому сообществу стабильное средство
										сбережения.
									</p>
									<p>
										LUNAR Silver (LUN) обладает повседневной полезностью фиатной
										валюты, неограниченной эффективностью криптовалюты и
										отсутствием присущей ей волатильности.
									</p>
								</div>
								<div className={styles.right}>
									<img src='/img/lunarCharts.svg' alt='lunarCharts' />
								</div>
							</div>
							<div className={styles.bottom}>
								<div className={styles.left}>
									<p>
										LUN позволит мгновенно покупать, продавать, тратить и
										отправлять физические серебряные слитки в любую точку мира,
										обеспечивая реальный доступ, ценность и полезность для
										физических драгоценных металлов.
									</p>
									<img src='/img/lunarUi.svg' alt='lunarUi' />
								</div>
								<div className={styles.right}>
									<p>
										LUN — это настоящий стейблкоин, позволяющий криптотрейдерам
										легко выходить с волатильных рынков и инвестировать в
										неизменную стоимость физического серебра, получая при этом
										ежедневный доход.
									</p>
									<img src='/img/lunarCoin.svg' alt='lunarCoin' />
								</div>
							</div>
						</div>
						<p className={styles.bottomTxt}>
							Благодаря цифровизации каждая унция серебра, лежащая в основе LUN,
							доступна для обмена одним нажатием кнопки.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.conclusionSection}>
				<div className={styles.conclusionWrapper}>
					<div className={styles.conclusionContent}>
						<div className={styles.icon}>
							<SmallWhiteLogo />
							<p>Заключение</p>
						</div>
						<h2>
							Почему выбрано именно это направление в отрасли развития компании?
						</h2>
						<p>
							Компания XAU работает с криптовалютами, которые обеспечены золотом
							уже более трех лет, за этот период, мы убедились, что это самая
							надежная инвестиция. Такой тип токенов, сочетает в себе
							безопасность золота с технологией цифровых валют и имеет низкую
							волатильность, так как привязан к цене на физический металл. По
							сути, каждая единица криптовалюты обеспечена определенным
							количеством золота, что дает инвесторам полное спокойствие.
						</p>
						<span>
							Выбор направлен на серебро, так как если грамотно анализировать
							сектор глобальной экономики, то именно, серебро выглядит самым
							перспективным активом для инвестиций в 2026 году, учитывая
							ожидаемый рост спроса и ограниченное предложение.
						</span>
					</div>
				</div>
			</section>

			<section className={styles.factorsSection}>
				<div className={styles.factorsWrapper}>
					<div className={styles.factorsContent}>
						<div className={styles.left}>
							<p>
								И даже если, в 2025 году на его краткосрочную динамику повлияли
								введенные Дональдом Трампом пошлины, и драгметалл, возможно, не
								был готов к следующему этапу роста до второй половины 2025 года,
								то рост потребления серебра в следующих секторах:
							</p>
							<div className={styles.block}>
								<div className={styles.icon}>
									<GreenEcoIcon />
								</div>
								<div className={styles.txt}>
									<h3>Зеленая энергетика:</h3>
									<p>
										Использование серебра в солнечных панелях будет расти, что
										приведет к увеличению спроса.
									</p>
								</div>
							</div>
							<div className={styles.block}>
								<div className={styles.icon}>
									<IndustryIcon />
								</div>
								<div className={styles.txt}>
									<h3>Промышленность:</h3>
									<p>
										Промышленное потребление серебра также прогнозируется на
										увеличение.
									</p>
								</div>
							</div>
							<div className={styles.block}>
								<div className={styles.icon}>
									<GoldSectionIcon />
								</div>
								<div className={styles.txt}>
									<h3>Ювелирный сектор:</h3>
									<p>Ожидается рост спроса и в ювелирной отрасли</p>
								</div>
							</div>
							<p>
								и других, в долгосрочной перспективе обеспечит движение цены на
								серебро вверх.
							</p>
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
							<p>
								В 2024 году серебро подорожало на 25%, опередив золото по темпам
								роста и став одним из лучших по эффективности основных сырьевых
								товаров.
							</p>
							<p>
								При этом, ведущие эксперты уверены, что в конце 2026 года этот
								металл может взлететь до новых максимумов, а значит сейчас —
								самое время создавать цифровые активы, которые будут обеспечены
								физическим серебром и привязаны к его фактической стоимости.
							</p>
							<p>
								Компания XAU планирует расширить коммерческую модель стратегий,
								с применением собственной стратегической разработки.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.finalSection}>
				<div className={styles.finalWrapper}>
					<div className={styles.finalContent}>
						<div className={styles.icon}>
							<SmallWhiteLogo />
							<span>XAU LIMITED</span>
						</div>
						<p>
							Партнеры компании будут первыми награждены за сотрудничество.{' '}
						</p>
						<p>
							В том числе, те партнеры, которые проявили себя как лучшие
							маркетологи в отрасли развития сервиса XAU и поспособствовали
							быстрой капитализации активов компании, тем самым ускорив
							реализацию поставленной задачи по обеспечению токенизированого
							серебрянного актива LUNAR.
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default RoadMapScreen
