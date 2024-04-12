import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from 'react'
import { useTranslation } from 'next-i18next'

interface LanguageContextType {
	language: string
	setLanguage: (language: string) => void
}

// Création du contexte avec une valeur par défaut qui correspond à l'interface
const LanguageContext = createContext<LanguageContextType | null>(null)

// Composant fournisseur qui englobe les enfants et fournit le contexte de langue
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const { i18n } = useTranslation()
	const [language, setLanguage] = useState(i18n.language)

	useEffect(() => {
		const handleLanguageChange = (lng: string) => {
			setLanguage(lng)
		}

		i18n.on('languageChanged', handleLanguageChange)

		return () => {
			i18n.off('languageChanged', handleLanguageChange)
		}
	}, [i18n])

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	)
}

// Hook personnalisé pour utiliser le contexte de langue
export const useLanguage = () => {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider')
	}
	return context
}
