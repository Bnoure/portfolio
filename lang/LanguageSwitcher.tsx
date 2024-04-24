import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import 'flag-icons/css/flag-icons.min.css'

const LanguageSwitcher = () => {
	const { i18n } = useTranslation()
	const router = useRouter()

	const languages = [
		{ code: 'en', country: 'gb' },
		{ code: 'fr', country: 'fr' },
	]

	const changeLanguage = (code: string) => {
		console.log('Current pathname:', router.pathname)
		console.log('Current asPath:', router.asPath)
		console.log('Switching to locale:', code)

		router
			.push(
				{
					pathname: router.pathname,
					query: router.query,
				},
				undefined,
				{
					locale: code,
				}
			)
			.then(() => i18n.changeLanguage(code))
	}

	return (
		<div className='flex gap-2 p-2'>
			{languages.map((lang) => (
				<button
					key={lang.code}
					onClick={() => changeLanguage(lang.code)}
					className={`fi fi-${
						lang.country
					} rounded-full inline-flex items-center justify-center w-8 h-8 ${
						i18n.language && i18n.language.startsWith(lang.code)
							? 'text-3xl'
							: 'text-xl'
					} transition-transform duration-300 ease-in-out`}
					aria-label={`Change language to ${lang.code}`}
				/>
			))}
		</div>
	)
}

export default LanguageSwitcher
