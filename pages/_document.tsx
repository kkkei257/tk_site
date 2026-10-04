import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
	return (
		<Html lang='ja'>
			<Head>
				<link rel='icon' type='image/webp' href='/blog/blog_icon.webp' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
