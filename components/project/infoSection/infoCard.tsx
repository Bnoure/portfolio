const InfoSection = ({
	title,
	content,
}: {
	title: string
	content: string
}) => (
	<div className='flex flex-col border-r border-borderblack border-b'>
		<h5 className='font-bold mt-2 ml-2'>{title}</h5>
		<p className='mt-2 ml-2 font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300'>
			{content}
		</p>
	</div>
)

export default InfoSection
