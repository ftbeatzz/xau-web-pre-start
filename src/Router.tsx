import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import WalletScreen from './pages/WalletScreen/WalletScreen'
import CommerceScreen from './pages/CommerceScreen/CommerceScreen'
import TradeScreen from './pages/TradeScreen/TradeScreen'
import MarketingScreen from './pages/MarketingScreen/MarketingScreen'
import FreeScreen from './pages/FreeScreen/FreeScreen'

// Trade dropdown pages
import CompanyStatistics from './pages/TradeScreen/CompanyStatistics/CompanyStatistics'
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
					<Route path='commerce' element={<CommerceScreen />} />
					<Route path='trade' element={<TradeScreen />} />
					<Route path='marketing' element={<MarketingScreen />} />
					<Route path='free' element={<FreeScreen />} />

					{/* Trade dropdown routes */}
					<Route path='trade/statistics' element={<CompanyStatistics />} />
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
