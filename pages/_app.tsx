import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'
import { GA_ID, SITE_DESCRIPTION, SITE_IMAGE_URL, SITE_NAME, SITE_URL, TWITTER_ID } from '../data/site'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:site' content={TWITTER_ID} />
			</Head>
			<DefaultSeo
				defaultTitle={SITE_NAME}
				description={SITE_DESCRIPTION}
				canonical={`${SITE_URL}/`}
				openGraph={{
					type: 'website',
					title: SITE_NAME,
					description: SITE_DESCRIPTION,
					site_name: SITE_NAME,
					url: `${SITE_URL}/`,
					images: [
						{
							url: SITE_IMAGE_URL,
							width: 300,
							height: 300,
							alt: 'tkのプロフィールサイトのロゴ画像',
							type: 'image/webp',
						},
					],
				}}
			/>

			{/* Google Analytics */}
			<Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy='afterInteractive' />
			<Script id='google-analytics' strategy='afterInteractive'>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${GA_ID}');
				`}
			</Script>

			<Component {...pageProps} />
		</>
	)
}
