import clsx from 'clsx'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import Navbar from '@/components/Navbar'
import Provider from '@/components/Provider'
import StickySocial from '@/components/StickySocial'

import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={clsx('antialiased bg-light dark:bg-dark', inter.variable)}
			>
				<Provider>
					<Navbar />
					<div className='max-w-2xl w-[92vw] sm:w-[90vw] mx-auto pt-20'>
						<StickySocial />
						{children}
						<Footer />
						<Analytics />
					</div>
				</Provider>
			</body>
		</html>
	)
}
