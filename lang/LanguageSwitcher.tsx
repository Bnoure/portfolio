import { useTranslation } from 'next-i18next'

const LanguageSwitcher = () => {
	const { i18n } = useTranslation()

	const toggleLanguage = () => {
		const newLang = i18n.language === 'en' ? 'fr' : 'en'
		i18n.changeLanguage(newLang).then(() => {
			window.location.reload() // Force reload to ensure all components re-render
		})
	}

	return (
		<button onClick={toggleLanguage}>
			Switch to {i18n.language === 'en' ? 'French' : 'English'}
		</button>
	)
}

export default LanguageSwitcher
