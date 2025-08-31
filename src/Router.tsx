import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import PreStartScreen from './pages/PreStartScreen/PreStartScreen'
import FaqScreen from './pages/FaqScreen/FaqScreen'
import RoadMapScreen from './pages/RoadMapScreen/RoadMapScreen'
import HFTTrading from './pages/TradeScreen/HFTTrading/HFTTrading'
import ProceduralModel from './pages/CommerceScreen/ProceduralModel/ProceduralModel'
import ArbProceduralModel from './pages/ArbScreen/ProceduralModel/ProceduralModel'
import RecoverTwoFa from './pages/RecoverTwoFa/RecoverTwoFa'
import RecoverPassword from './pages/RecoverPassword/RecoverPassword'
import CompanyScreen from './pages/CompanyScreen/CompanyScreen'
import LoginScreen from './pages/LoginScreen/LoginScreen'
import RegScreen from './pages/RegScreen/RegScreen'

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<PreStartScreen />} />
					<Route path='pre-start' element={<PreStartScreen />} />
					<Route path='faq' element={<FaqScreen />} />
					<Route path='about-us' element={<CompanyScreen />} />
					<Route path='roadmap' element={<RoadMapScreen />} />
					<Route path='trade/hft' element={<HFTTrading />} />
					<Route path='commerce/model' element={<ProceduralModel />} />
					<Route path='arb/model' element={<ArbProceduralModel />} />
					{/* Profile related */}
					<Route path='recover/2fa' element={<RecoverTwoFa />} />
					<Route path='recover/password' element={<RecoverPassword />} />
					<Route path='login' element={<LoginScreen />} />
					<Route path='registration' element={<RegScreen />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
