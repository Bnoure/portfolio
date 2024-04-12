import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import '../app/globals.css'
import RootLayout from '../app/layout'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RootLayout>
			<Component {...pageProps} />
		</RootLayout>
	)
}

export default appWithTranslation(MyApp)
