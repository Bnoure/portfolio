const InfoSection = ({
	title,
	content,
}: {
	title: string
	content: string
}) => (
	<div className='flex flex-col border-r border-borderblack border-b'>
		<h5 className='font-bold ml-2'>{title}</h5>
		<p className='ml-2'>{content}</p>
	</div>
)

export default InfoSection
