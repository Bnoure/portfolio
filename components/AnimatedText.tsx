import { useEffect, useState, useCallback } from 'react'

const AnimatedText = ({
	text,
	style,
}: {
	text: string
	style?: React.CSSProperties
}) => {
	const [randomizeText, setRandomizeText] = useState(text)
	const [isAnimating, setIsAnimating] = useState(true)
	const animatingTime = text.length * 100 > 1000 ? 1000 : text.length * 100

	const generateGibberish = useCallback(
		(index: any, timeElapsed: Number) => {
			if (text[index] === ' ') return ' '
			const characters =
				'A-B*CD_EF-GH_JK*LM-NOP_QRS*TU-VWX_YZa*bcd_ef-gh_jkm_nopq_rstu_vw-xyz_023_456*789_'

			const randomChar = Math.floor(Math.random() * characters.length)
			return Number(timeElapsed) >= Math.floor(Math.random() * animatingTime)
				? text[index]
				: characters[randomChar]
		},
		[text, animatingTime]
	)

	useEffect(() => {
		let interval: NodeJS.Timeout
		setTimeout(() => {
			let timeElapsed = 0
			interval = setInterval(() => {
				timeElapsed += 100
				setRandomizeText(
					text
						.split('')
						.map((_, index: Number) => generateGibberish(index, timeElapsed))
						.join('')
				)
			}, 100)
		}, 50)

		setTimeout(() => {
			clearInterval(interval)
			setIsAnimating(false)
		}, animatingTime + 50)
	}, [text, animatingTime, generateGibberish])

	return <span style={style}>{isAnimating ? randomizeText : text}</span>
}

export default AnimatedText
