import '../styles/globals.css'

// pc
import '../styles/components_layout.css'
import '../styles/index.css'
import '../styles/about.css'
import '../styles/illust.css'
import '../styles/work.css'
import '../styles/event.css'
import '../styles/privacy_policy.css'

// sp
import '../styles/sp/components_layout.css'
import '../styles/sp/index.css'
import '../styles/sp/about.css'
import '../styles/sp/illust.css'
import '../styles/sp/work.css'
import '../styles/sp/event.css'
import '../styles/sp/privacy_policy.css'

// tablet
import '../styles/tablet/components_layout.css'
import '../styles/tablet/index.css'
import '../styles/tablet/about.css'
import '../styles/tablet/illust.css'
import '../styles/tablet/work.css'
import '../styles/tablet/event.css'
import '../styles/tablet/privacy_policy.css'

// lightbox
import '../styles/js/lightbox-plus-jquery.js'
import '../styles/lightbox.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo';

// 初回queryのundefined現象の解消
App.getInitialProps = async () => ({ pageProps: {} })

export default function App({ Component, pageProps }: AppProps) {
	const site_title = 'tkのプロフィール';
	const site_name = 'tkのプロフィール';
	const site_description = 'tkのプロフィール';
	const site_image_url = 'https://tk-profile.netlify.app/blog/blog_icon.png';
	
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
				
				{/* twitter card */}
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:site' content='@sw_ts_k' />
				<meta name='twitter:title' content={site_title} />
				<meta name='twitter:description' content={site_description} />
				<meta name='twitter:image' content={site_image_url} />
				
				{/* ファビコン */}
				<link rel='icon' type='image/jpg' href='/blog/blog_icon.png'/>
			</Head>
			<DefaultSeo
				defaultTitle={site_title}
				description={site_description}
				canonical='https://tk-profile.netlify.app/'
				openGraph={{
					type: 'website',
					title: site_title,
					description: site_description,
					site_name: site_name,
					url: 'https://tk-profile.netlify.app/',
					images: [
						{
							url: site_image_url,
							width: 300,
							height: 300,
							alt: 'tkのプロフィールサイトのロゴ画像',
							type: 'image/jpeg',
						},
					],
				}}
			/>
			<Component {...pageProps} />
		</>
	)
}
