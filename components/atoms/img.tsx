'use client'

import Image, { type ImageProps, type StaticImageData } from 'next/image'
import { useState } from 'react'
import cx from '@/utils/cx'

const defaultImage = '/images/about/1.jpeg'

export const Img = (props: ImageProps) => {
	const [errored, setErrored] = useState<boolean>(false)
	const imageSrc = errored ? defaultImage : props.src

	return (
		<Image
			{...props}
			src={imageSrc}
			placeholder={
				typeof props.src !== 'string'
					? (props.src as StaticImageData).blurDataURL
						? 'blur'
						: props.placeholder
					: props.placeholder
			}
			className={cx('object-cover object-center', props.className)}
			loading={!props.priority ? 'eager' : undefined}
			decoding={'async'}
			onError={() => {
				setErrored(true)
			}}
			unoptimized={errored || props.unoptimized}
		/>
	)
}
