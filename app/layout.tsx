import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import Navbar from '@/components/Navbar'
import Provider from '@/components/Provider'
import StickySocial from '@/components/StickySocial'

import './globals.css'
import Footer from '@/components/Footer'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider>
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
