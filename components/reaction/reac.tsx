'use client '

import confetti from 'canvas-confetti'
import clsx from 'clsx'

import { useWindowDimensions } from '@/hooks/useWindowDimension'
import { usePostReactions } from '@/lib/useProjectReaction'
import { REACTION } from '@/constants'

interface IconInterface {
	isReacted: Boolean
}

const ThumbUpIcon = ({ isReacted }: IconInterface) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill={isReacted ? 'currentColor' : 'none'}
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='currentColor'
		className='w-5 h-5'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z'
		/>
	</svg>
)

const confettiOptions = {
	particleCount: 50,
	spread: 60,
	colors: ['#6085de'],
	disableForReducedMotion: true,
	scalar: 0.5,
	gravity: 0.85,
	decay: 0.75,
	ticks: 100,
}

const getConfettiColor = (type: string) => {
	switch (type) {
		case REACTION.like: {
			return ['#20BF6B']
		}

		default: {
			return ['#fb7185']
		}
	}
}

interface Reaction {
	slug: string
}

const Reaction = ({ slug }: Reaction) => {
	const { likes, isLiked, isLoading, reaction } = usePostReactions(slug)
	const { width: windowWidth, height: windowHeight } = useWindowDimensions()
	const handleClick = (type: string, event?: any) => {
		reaction(type)

		// If reaction was submitted successfully
		if (event) {
			const x = event.clientX / windowWidth
			const y = event.clientY / windowHeight
			confetti({
				...confettiOptions,
				origin: { x, y },
				colors: getConfettiColor(type),
			})
		}
	}

	return (
		<div className='flex items-start gap-2'>
			<button
				className='dark:bg-gray-800 bg-gray-200 p-2 rounded-lg cursor-pointer flex items-center gap-2'
				title={isLiked ? 'Liked' : 'Like'}
				onClick={(e) => handleClick(REACTION.like, e)}
			>
				<div
					className={clsx(
						'transform transition delay-50 duration-200 ease-out hover:scale-110',
						{ 'text-green-400': isLiked }
					)}
				>
					<ThumbUpIcon isReacted={!!isLiked} />
				</div>
				<div className='select-none'>{isLoading ? '..' : likes}</div>
			</button>
		</div>
	)
}

export default Reaction
