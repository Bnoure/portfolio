import { useRouter } from 'next/router'

const ProjetDetail = () => {
	const router = useRouter()
	const { nomduprojet } = router.query

	// Ici, vous pouvez charger les données du projet en utilisant `nomduprojet`
	// Exemple: appel API ou récupération des données d'un store

	return (
		<div>
			<h1>Projet: {nomduprojet}</h1>
			{/* Contenu du projet */}
		</div>
	)
}

export default ProjetDetail
