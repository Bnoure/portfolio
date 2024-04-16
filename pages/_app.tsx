import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import '../app/globals.css'
import RootLayout from '../app/layout'
import nextI18NextConfig from '../next-i18next.config.js'
import 'node_modules/flag-icons/css/flag-icons.min.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RootLayout>
			<Component {...pageProps} />
		</RootLayout>
	)
}

export default appWithTranslation(MyApp, nextI18NextConfig)
