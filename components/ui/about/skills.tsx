import type { CSSProperties } from 'react'

import { Icon } from '@/components/atoms/icon'
import { Section } from '@/components/atoms/section'
import { hexToRgb } from '@/utils/color'
import cx from '@/utils/cx'
import { cn } from 'lib/utils'

import { skills } from './data'

export const Skills = () => {
	return (
		<Section id={'skills'}>
			<h2>Skills</h2>
			<ul className={'flex items-center gap-2.5 flex-wrap'}>
				{skills
					.filter((skill) => !skill.hide)
					.map((skill) => {
						const color = hexToRgb(skill.color, 0, true)
						return (
							<li className={'block'} key={skill.name}>
								<span
									className={cx(
										'flex items-center gap-1.5 !important',
										'rounded-2 !important pl-3 pr-3.5 py-1.5 min-h-9 !important',
										'border border-divider !important',
										'text-3xs font-medium cursor-default !important',
										'transition-colors !important',
										'bg-brand-200/5 dark:bg-brand-700/10 !important',
										'hocus:!bg-tint-bg !important',
										'hocus:border-tint-border !important'
									)}
									style={{ '--tint': color } as CSSProperties}
								>
									<Icon path={skill.icon} className={'size-4 !important'} />
									<span>{skill.name}</span>
								</span>
							</li>
						)
					})}
			</ul>
		</Section>
	)
}
