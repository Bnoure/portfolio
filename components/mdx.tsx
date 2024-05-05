import * as React from 'react'
import Link from 'next/link'

import RoundedImage from './RoundedImage'
import { useMDXComponent } from 'next-contentlayer/hooks'

const CustomLink = (props: any) => {
	const href = props.href

	if (href.startsWith('/')) {
		return (
			<Link href={href} {...props}>
				{props.children}
			</Link>
		)
	}

	if (href.startsWith('#')) {
		return <a {...props} />
	}

	return <a target='_blank' rel='noopener noreferrer' {...props} />
}

const components = {
	Image: RoundedImage,
}

interface MdxProps {
	code: string
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code)

	return (
		<article className=''>
			<Component components={{ ...components }} />
		</article>
	)
}
