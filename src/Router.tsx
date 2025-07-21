import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import WalletScreen from './pages/WalletScreen/WalletScreen'
import MarketingScreen from './pages/MarketingScreen/MarketingScreen'
import FreeScreen from './pages/FreeScreen/FreeScreen'
import FaqScreen from './pages/FaqScreen/FaqScreen'

// Trade dropdown pages
import TradeStatistics from './pages/TradeScreen/TradeStatistics/TradeStatistics'
import TradeLoan from './pages/TradeScreen/TradeLoan/TradeLoan'
import HFTTrading from './pages/TradeScreen/HFTTrading/HFTTrading'

// Commerce dropdown pages
import CommerceStatistics from './pages/CommerceScreen/CommerceStatistics/CommerceStatistics'
import CommerceLoan from './pages/CommerceScreen/CommerceLoan/CommerceLoan'
import ProceduralModel from './pages/CommerceScreen/ProceduralModel/ProceduralModel'

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

					{/* Trade dropdown routes */}
					<Route path='trade/statistics' element={<TradeStatistics />} />
					<Route path='trade/loan' element={<TradeLoan />} />
					<Route path='trade/hft' element={<HFTTrading />} />

					{/* Commerce dropdown routes */}
					<Route path='commerce/statistics' element={<CommerceStatistics />} />
					<Route path='commerce/loan' element={<CommerceLoan />} />
					<Route path='commerce/model' element={<ProceduralModel />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
