import { useTranslation } from 'next-i18next'
import 'flag-icons/css/flag-icons.min.css' // Assurez-vous que cela est bien importé dans _app.tsx si ce n'est pas déjà fait

const LanguageSwitcher = () => {
	const { i18n } = useTranslation()

	// Définition des langues disponibles et de leurs codes de pays respectifs pour les drapeaux
	const languages = [
		{ code: 'gb', country: 'gb' }, // Great Britain for English
		{ code: 'fr', country: 'fr' }, // France for French
		// Ajoutez d'autres langues ici
	]

	const currentLang = i18n.language?.toLowerCase()

	const toggleLanguage = (code: string) => {
		i18n.changeLanguage(code)
	}

	return (
		<div className='flex gap-2 p-2 '>
			{languages.map((lang) => (
				<button
					key={lang.code}
					onClick={() => toggleLanguage(lang.code)}
					className={`fi fi-${
						lang.country
					} rounded-full inline-flex items-center justify-center w-8 h-8 ${
						currentLang?.startsWith(lang.code)
							? 'text-3xl' // Langue sélectionnée (plus grande)
							: 'text-xl' // Langue non sélectionnée (plus petite)
					} transition-transform duration-300 ease-in-out`}
					aria-label={`Change language to ${lang.code}`}
				></button>
			))}
		</div>
	)
}

export default LanguageSwitcher
