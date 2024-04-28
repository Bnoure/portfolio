import { Img } from '@/components/atoms/img'
import cx from '@/utils/cx'

import { getAboutImage } from './img'

export default function Photo() {
	const photo = getAboutImage()
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
