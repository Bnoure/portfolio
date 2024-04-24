import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import Navbar from '@/components/Navbar'
import Provider from '@/components/Provider'
import StickySocial from '@/components/StickySocial'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider>
			<SpeedInsights />
			<Navbar />
			<div className='max-w-2xl w-[92vw] sm:w-[90vw] mx-auto pt-20'>
				<StickySocial />

				{children}
				<Footer />
				<Analytics />
			</div>
		</Provider>
	)
}

export default RootLayout
