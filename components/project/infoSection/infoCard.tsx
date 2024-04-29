const InfoSection = ({
	title,
	content,
}: {
	title: string
	content: string
}) => (
	<div className='flex flex-col  '>
		<h5 className='font-bold'>{title}</h5>
		<p>{content}</p>
	</div>
)

export default InfoSection
