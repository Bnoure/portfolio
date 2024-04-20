import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const PortfolioPage = () => {
	return (
		<div className='container mx-auto px-4'>
			<Head>
				<title>Portfolio de Nour-Eddine</title>
				<meta
					name='description'
					content='Découvrez mon portfolio complet, incluant divers projets et réalisations.'
				/>
			</Head>

			<main className='mt-8'>
				<h1 className='text-3xl font-bold'>Portfolio de Nour-Eddine</h1>
				<p className='mt-4 text-lg text-gray-700'>
					Bienvenue sur la page de mon portfolio, où vous pouvez découvrir tous
					les projets sur lesquels j'ai travaillé.
				</p>

				<div className='mt-8'>
					<Image src='' alt='Portfolio Cover' width={800} height={450} />
					<p className='mt-4'>
						Mon portfolio présente une large gamme de projets dans différents
						domaines de l'informatique, y compris le développement web, les
						applications mobiles et bien plus encore.
					</p>
					<Link
						href='/projects'
						className='mt-4 inline-block px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'
					>
						<p>Retour à la liste des projets</p>
					</Link>
				</div>
			</main>
		</div>
	)
}

export default PortfolioPage
