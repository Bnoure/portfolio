import { Img } from '@/components/atoms/img'
import cx from '@/utils/cx'
import { useEffect, useState } from 'react'

import { getAboutImage } from './img'

export default function Photo() {
	const [photo, setPhoto] = useState({
		src: '/images/about/1.jpeg',
		alt: 'me',
		width: 600,
		height: 600,
	})

	useEffect(() => {
		const fetchImage = async () => {
			const img = await getAboutImage() // Attendre que la promesse soit résolue
			setPhoto(img) // Ensuite, mettre à jour l'état avec les données de l'image
		}

		fetchImage() // Appeler la fonction fetchImage pour récupérer l'image
	}, [])
	return (
		<figure className={'mt-3'}>
			<div
				className={cx(
					'tablet-md:rounded-4',
					'overflow-hidden',
					'-mx-3 tablet-md:-mx-4',
					''
				)}
				style={{ aspectRatio: '21/9' }}
			>
				<Img
					src={photo.src}
					alt={photo.alt}
					width={photo.width}
					height={photo.height}
					quality={100}
					className={'h-full rounded-2xl'}
					priority
				/>
			</div>
			<figcaption>{photo.alt}</figcaption>
		</figure>
	)
}
