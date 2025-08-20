import React, { useRef, useState } from 'react'
import styles from './WeChatRegistration.module.scss'
import WeChatIcon from '../../../icons/WeChatIcon'
import VerifyIcon from '../../../icons/VerifyIcon'
import DropDownArrow from '../../../icons/DropDownArrow'

type WeChatRegistrationProps = {
	onBackToStart: () => void
}

const WeChatRegistration: React.FC<WeChatRegistrationProps> = ({
	onBackToStart,
}) => {
	const [currentStep, setCurrentStep] = useState<number>(2) // глобально это будет шаг 2..
	const [maxReachedStep, setMaxReachedStep] = useState<number>(2)
	const [wechatFormData, setWechatFormData] = useState({
		lastName: '',
		firstName: '',
		idNumber: '',
		citizenship: '中國',
		city: '',
		address: '',
		operator: '',
		phoneNumber: '',
		verificationCode: Array(6).fill('') as string[],
		email: '',
		workplace: '',
		monthlyIncome: '',
		companyIndustry: '',
		employmentType: '',
		workExperience: '',
		taxNumber: '',
		additionalIncome: '',
	})
	const inputRefs = useRef<(HTMLInputElement | null)[]>([])
	const operatorOptions = [
		{ value: 'china-mobile', label: '中國移動' },
		{ value: 'china-unicom', label: '中國聯通' },
		{ value: 'china-telecom', label: '中國電信' },
	]
	const [isOperatorOpen, setIsOperatorOpen] = useState(false)

	const handleNextStep = () => {
		const next = currentStep + 1
		setCurrentStep(next)
		setMaxReachedStep(prev => Math.max(prev, next))
	}

	const handleWechatFormChange = (
		field: keyof typeof wechatFormData,
		value: string
	) => {
		setWechatFormData(prev => ({ ...prev, [field]: value }))
	}

	const handleSendCode = () => {}
	const handleConfirmPhoneNumber = () => handleNextStep()
	const handleSendTaxDeclaration = () => handleNextStep()
	const handleSaveWechatData = () => handleNextStep()
	const handleSaveWechatStep4Data = () => handleNextStep()
	const handleConfirmIdentity = () => handleNextStep()

	const handleWechatStep2CodeChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		idx: number
	) => {
		const val = e.target.value
		if (!/^[0-9]?$/.test(val)) return
		const newCode = [...wechatFormData.verificationCode]
		newCode[idx] = val
		setWechatFormData(prev => ({ ...prev, verificationCode: newCode }))
		if (val && idx < 5) {
			inputRefs.current[idx + 1]?.focus()
		}
	}

	const handleWechatStep2CodeKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		idx: number
	) => {
		if (e.key === 'Backspace') {
			if (wechatFormData.verificationCode[idx] === '' && idx > 0) {
				inputRefs.current[idx - 1]?.focus()
			}
		}
	}

	const handleWechatStep2Paste = (
		e: React.ClipboardEvent<HTMLInputElement>
	) => {
		const paste = e.clipboardData.getData('Text').replace(/\D/g, '').slice(0, 6)
		if (paste.length) {
			const newCode = paste.split('').concat(Array(6).fill('')).slice(0, 6)
			setWechatFormData(prev => ({ ...prev, verificationCode: newCode }))
			const nextIdx = Math.min(paste.length, 5)
			setTimeout(() => inputRefs.current[nextIdx]?.focus(), 0)
			e.preventDefault()
		}
	}

	const showWeChatSteps = currentStep > 1
	const showWeChatContent = currentStep > 1 && currentStep <= 6
	const wechatStepNumber = currentStep - 1

	return (
		<>
			{/* Навигация по шагам WeChat */}
			{showWeChatSteps && (
				<div className={styles.wechatStepsNavWrapper}>
					<h3>帳戶驗證</h3>
					<div className={styles.wechatStepsNav}>
						{Array.from({ length: 5 }, (_, index) => {
							const stepNumber = index + 1
							const isActive = wechatStepNumber === stepNumber
							const isCompleted = wechatStepNumber > stepNumber
							const isReached = maxReachedStep > index + 1
							const isClickable = isActive || isCompleted || isReached

							return (
								<button
									key={index}
									className={`${styles.stepTab} ${
										isActive ? styles.activeStepTab : ''
									} ${isCompleted ? styles.completedStepTab : ''} ${
										isReached && !isCompleted ? styles.reachedStepTab : ''
									} ${!isClickable ? styles.disabledStepTab : ''}`}
									onClick={
										isClickable ? () => setCurrentStep(index + 2) : undefined
									}
									disabled={!isClickable}
								>
									步驟 {stepNumber}
								</button>
							)
						})}
					</div>
				</div>
			)}

			{/* Контент для WeChat (шаги 1-5) */}
			{showWeChatContent && (
				<>
					{wechatStepNumber === 1 && (
						<div className={styles.wechatStep}>
							<div className={styles.codeInfo}>
								<p>請按欄位填寫您的個人資料。完成後點擊「儲存資料」。</p>
							</div>
							<div className={styles.wechatForm}>
								<div className={styles.formRow}>
									<div className={styles.formField}>
										<label>姓氏</label>
										<input
											type='text'
											className={styles.formInput}
											value={wechatFormData.lastName}
											onChange={e =>
												handleWechatFormChange('lastName', e.target.value)
											}
										/>
									</div>
									<div className={styles.formField}>
										<label>名字</label>
										<input
											type='text'
											className={styles.formInput}
											value={wechatFormData.firstName}
											onChange={e =>
												handleWechatFormChange('firstName', e.target.value)
											}
										/>
									</div>
								</div>
								<div className={styles.formField}>
									<label>中華人民共和國居民身份證號</label>
									<input
										type='text'
										className={styles.formInput}
										value={wechatFormData.idNumber}
										onChange={e =>
											handleWechatFormChange('idNumber', e.target.value)
										}
									/>
								</div>
								<div className={styles.formRow}>
									<div className={styles.formField}>
										<label>國籍</label>
										<input
											type='text'
											className={styles.formInput}
											onChange={e =>
												handleWechatFormChange('citizenship', e.target.value)
											}
											placeholder='中國'
											readOnly
										/>
									</div>
									<div className={styles.formField}>
										<label>居住城市</label>
										<input
											type='text'
											className={styles.formInput}
											value={wechatFormData.city}
											onChange={e =>
												handleWechatFormChange('city', e.target.value)
											}
										/>
									</div>
								</div>
								<div className={styles.formField}>
									<label>居住地址</label>
									<input
										type='text'
										className={styles.formInput}
										value={wechatFormData.address}
										onChange={e =>
											handleWechatFormChange('address', e.target.value)
										}
									/>
								</div>
							</div>
							<button
								className={styles.loginBtn}
								onClick={handleSaveWechatData}
							>
								<span>
									<WeChatIcon />
								</span>
								<span>儲存資料</span>
							</button>
							<div className={styles.backLink}>
								<a
									href='#'
									onClick={e => {
										e.preventDefault()
										onBackToStart()
									}}
								>
									返回
								</a>
							</div>
						</div>
					)}
					{wechatStepNumber === 2 && (
						<div className={styles.wechatStep}>
							<div className={styles.codeInfo}>
								<p>
									請輸入您的手機號碼並使用收到的驗證碼進行確認。完成後點擊「確認手機號碼」。
								</p>
							</div>
							<div className={styles.wechatForm}>
								<div className={styles.formRow}>
									<div className={styles.formField}>
										<label>請選擇運營商</label>
										<div
											className={`${styles.dropdown} ${
												isOperatorOpen ? styles.open : ''
											}`}
										>
											<button
												type='button'
												className={styles.dropdownHeader}
												onClick={() => setIsOperatorOpen(prev => !prev)}
												aria-haspopup='listbox'
												aria-expanded={isOperatorOpen}
											>
												<span>
													{operatorOptions.find(
														o => o.value === wechatFormData.operator
													)?.label || '選擇'}
												</span>
												<span className={styles.dropdownArrow}>
													<DropDownArrow />
												</span>
											</button>
											{isOperatorOpen && (
												<ul className={styles.dropdownList} role='listbox'>
													{operatorOptions.map(opt => (
														<li
															key={opt.value}
															role='option'
															aria-selected={
																wechatFormData.operator === opt.value
															}
															className={`${styles.dropdownItem} ${
																wechatFormData.operator === opt.value
																	? styles.selected
																	: ''
															}`}
															onClick={() => {
																handleWechatFormChange('operator', opt.value)
																setIsOperatorOpen(false)
															}}
														>
															{opt.label}
														</li>
													))}
												</ul>
											)}
										</div>
									</div>
									<div className={styles.formField}>
										<label>輸入手機號碼</label>
										<input
											type='tel'
											className={styles.formInput}
											value={wechatFormData.phoneNumber}
											onChange={e =>
												handleWechatFormChange('phoneNumber', e.target.value)
											}
										/>
									</div>
								</div>
								<button className={styles.sendCodeBtn} onClick={handleSendCode}>
									發送代碼
								</button>
								<div className={styles.formField}>
									<label>驗證碼</label>
									<div className={styles.codeInputs}>
										{wechatFormData.verificationCode.map((val, idx) => (
											<input
												key={idx}
												type='text'
												inputMode='numeric'
												maxLength={1}
												value={val}
												onChange={e => handleWechatStep2CodeChange(e, idx)}
												onKeyDown={e => handleWechatStep2CodeKeyDown(e, idx)}
												onPaste={handleWechatStep2Paste}
												ref={el => {
													inputRefs.current[idx] = el
												}}
												className={styles.codeInput}
											/>
										))}
									</div>
								</div>
							</div>
							<button
								className={styles.loginBtn}
								onClick={handleConfirmPhoneNumber}
							>
								<span>
									<WeChatIcon />
								</span>
								<span>確認手機號碼</span>
							</button>
							<div className={styles.resendStroke}>
								<span>沒有收到代碼嗎？</span>
								<a href='#' onClick={handleSendCode}>
									重新發送
								</a>
							</div>
							<div className={styles.backLink}>
								<a
									href='#'
									onClick={e => {
										e.preventDefault()
										setCurrentStep(2)
									}}
								>
									返回
								</a>
							</div>
						</div>
					)}
					{wechatStepNumber === 3 && (
						<div className={styles.wechatStep}>
							<div className={styles.codeInfo}>
								<p>
									請求表格，以提供有關帳戶類型的基本財務資訊、帳戶資訊以及限制確認。若要繼續，請按「發送表格」。
								</p>
							</div>
							<div className={styles.wechatForm}>
								<div className={styles.formField}>
									<label>請提供有效的電子郵件地址</label>
									<input
										type='email'
										className={styles.formInput}
										value={wechatFormData.email}
										onChange={e =>
											handleWechatFormChange('email', e.target.value)
										}
										placeholder='example@qq.com'
									/>
								</div>
							</div>
							<button
								className={styles.loginBtn}
								onClick={handleSendTaxDeclaration}
							>
								<span>
									<WeChatIcon />
								</span>
								<span>發送納稅申報表</span>
							</button>
							<div className={styles.backLink}>
								<a
									href='#'
									onClick={e => {
										e.preventDefault()
										setCurrentStep(3)
									}}
								>
									返回
								</a>
							</div>
						</div>
					)}
					{wechatStepNumber === 4 && (
						<div className={styles.wechatStep}>
							<div className={styles.codeInfo}>
								<p>
									請填寫就業資料、雇主資訊及機構全稱、工作期限、主要與附加的財務概況。若要繼續，請按「保存資料」。
								</p>
							</div>
							<div className={styles.wechatForm}>
								<div className={styles.formField}>
									<label>工作地點</label>
									<input
										type='text'
										className={styles.formInput}
										value={wechatFormData.workplace}
										onChange={e =>
											handleWechatFormChange('workplace', e.target.value)
										}
									/>
								</div>
								<div className={styles.formRow}>
									<div className={styles.formField}>
										<label>每月收入</label>
										<input
											type='text'
											className={styles.formInput}
											value={wechatFormData.monthlyIncome}
											onChange={e =>
												handleWechatFormChange('monthlyIncome', e.target.value)
											}
										/>
									</div>
									<div className={styles.formField}>
										<label>公司行業</label>
										<input
											type='text'
											className={styles.formInput}
											value={wechatFormData.companyIndustry}
											onChange={e =>
												handleWechatFormChange(
													'companyIndustry',
													e.target.value
												)
											}
										/>
									</div>
								</div>
								<div className={styles.formRow}>
									<div className={styles.formField}>
										<label>就業類型</label>
										<input
											type='text'
											className={styles.formInput}
											value={wechatFormData.employmentType}
											onChange={e =>
												handleWechatFormChange('employmentType', e.target.value)
											}
										/>
									</div>
									<div className={styles.formField}>
										<label>目前工作的年資</label>
										<input
											type='text'
											className={styles.formInput}
											value={wechatFormData.workExperience}
											onChange={e =>
												handleWechatFormChange('workExperience', e.target.value)
											}
										/>
									</div>
								</div>
								<div className={styles.formField}>
									<label>公司稅號或註冊號碼</label>
									<input
										type='text'
										className={styles.formInput}
										value={wechatFormData.taxNumber}
										onChange={e =>
											handleWechatFormChange('taxNumber', e.target.value)
										}
									/>
								</div>
								<div className={styles.formField}>
									<label>額外收入來源</label>
									<input
										type='text'
										className={styles.formInput}
										value={wechatFormData.additionalIncome}
										onChange={e =>
											handleWechatFormChange('additionalIncome', e.target.value)
										}
									/>
								</div>
							</div>
							<button
								className={styles.loginBtn}
								onClick={handleSaveWechatStep4Data}
							>
								<span>
									<WeChatIcon />
								</span>
								<span>保存資料</span>
							</button>
							<div className={styles.backLink}>
								<a
									href='#'
									onClick={e => {
										e.preventDefault()
										setCurrentStep(4)
									}}
								>
									返回
								</a>
							</div>
						</div>
					)}
					{wechatStepNumber === 5 && currentStep === 6 && (
						<div className={styles.wechatStep}>
							<div className={styles.codeInfo}>
								<p>
									請按「確認身份」。請提供其中一份證件（護照、護照（國際）、身份證）及所選證件的資料，然後按「提交審核」。
								</p>
							</div>
							<div className={styles.verificationIcon}>
								<VerifyIcon />
							</div>
							<button
								className={styles.loginBtn}
								onClick={handleConfirmIdentity}
							>
								<span>
									<WeChatIcon />
								</span>
								<span>確認身份</span>
							</button>
							<div className={styles.backLink}>
								<a
									href='#'
									onClick={e => {
										e.preventDefault()
										setCurrentStep(5)
									}}
								>
									返回
								</a>
							</div>
						</div>
					)}
				</>
			)}
		</>
	)
}

export default WeChatRegistration
