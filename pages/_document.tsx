import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang='en'>
				<Head />
				<body className='antialiased bg-light dark:bg-dark'>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
