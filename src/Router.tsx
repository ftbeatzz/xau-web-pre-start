import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import WalletScreen from './pages/WalletScreen/WalletScreen'
import MarketingScreen from './pages/MarketingScreen/MarketingScreen'
import FreeScreen from './pages/FreeScreen/FreeScreen'
import FaqScreen from './pages/FaqScreen/FaqScreen'
import LoginScreen from './pages/LoginScreen/LoginScreen'
import RegScreen from './pages/RegScreen/RegScreen'
import RoadMapScreen from './pages/RoadMapScreen/RoadMapScreen'

// Trade dropdown pages
import TradeStatistics from './pages/TradeScreen/TradeStatistics/TradeStatistics'
import TradeLoan from './pages/TradeScreen/TradeLoan/TradeLoan'
import HFTTrading from './pages/TradeScreen/HFTTrading/HFTTrading'

// Commerce dropdown pages
import CommerceStatistics from './pages/CommerceScreen/CommerceStatistics/CommerceStatistics'
import CommerceLoan from './pages/CommerceScreen/CommerceLoan/CommerceLoan'
import ProceduralModel from './pages/CommerceScreen/ProceduralModel/ProceduralModel'
// ARB dropdown pages
import ArbStatistics from './pages/ArbScreen/ArbStatistics/ArbStatistics'
import ArbLoan from './pages/ArbScreen/ArbLoan/ArbLoan'
import ArbProceduralModel from './pages/ArbScreen/ProceduralModel/ProceduralModel'
import RecoverTwoFa from './pages/RecoverTwoFa/RecoverTwoFa'
import RecoverPassword from './pages/RecoverPassword/RecoverPassword'

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<WalletScreen />} />
					<Route path='wallet' element={<WalletScreen />} />
					<Route path='marketing' element={<MarketingScreen />} />
					<Route path='free' element={<FreeScreen />} />
					<Route path='faq' element={<FaqScreen />} />
					<Route path='roadmap' element={<RoadMapScreen />} />
					<Route path='login' element={<LoginScreen />} />
					<Route path='registration' element={<RegScreen />} />

					{/* Trade dropdown routes */}
					<Route path='trade/statistics' element={<TradeStatistics />} />
					<Route path='trade/loan' element={<TradeLoan />} />
					<Route path='trade/hft' element={<HFTTrading />} />

					{/* Commerce dropdown routes */}
					<Route path='commerce/statistics' element={<CommerceStatistics />} />
					<Route path='commerce/loan' element={<CommerceLoan />} />
					<Route path='commerce/model' element={<ProceduralModel />} />

					{/* ARB dropdown routes */}
					<Route path='arb/statistics' element={<ArbStatistics />} />
					<Route path='arb/loan' element={<ArbLoan />} />
					<Route path='arb/model' element={<ArbProceduralModel />} />
					{/* Profile related */}
					<Route path='recover/2fa' element={<RecoverTwoFa />} />
					<Route path='recover/password' element={<RecoverPassword />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
