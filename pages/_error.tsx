import Link from 'next/link'
import { useTranslation } from 'next-i18next'

interface ErrorPageProps {
	statusCode: number | undefined
}

interface NextPageContext {
	res: any
	err: any
}

export default function ErrorPage({ statusCode }: ErrorPageProps) {
	return (
		<div className='h-[calc(100vh-400px)] mt-10'>
			<h2 className='heading'>
				{statusCode ? `Erreur ${statusCode}` : 'Erreur'}
			</h2>
			<p className='mb-10'>
				Oups, il semble que vous ayez fait un faux pas ! Ne vous inquiétez pas,
				nous allons vous remettre sur la bonne voie.
			</p>
			<p>
				Cette page peut ne pas exister sur mon site web, mais cela ne signifie
				pas que nous ne pouvons pas encore nous connecter. N&aposhésitez pas à
				explorer le reste de mon{' '}
				<Link href='/' legacyBehavior>
					<a className='link'>site</a>
				</Link>
				. Transformons ce petit détour en une aventure amusante et excitante !
			</p>
		</div>
	)
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}
