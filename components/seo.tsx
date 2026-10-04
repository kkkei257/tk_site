import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { SITE_IMAGE_URL, SITE_URL } from '../data/site'

type Props = {
	title: string
	description: string
	path: string
}

const Seo = ({ title, description, path }: Props) => {
	const url = `${SITE_URL}${path}`

	return (
		<>
			<Head>
				<meta name='twitter:title' content={title} />
				<meta name='twitter:description' content={description} />
				<meta name='twitter:image' content={SITE_IMAGE_URL} />
			</Head>
			<NextSeo
				title={title}
				description={description}
				canonical={url}
				openGraph={{
					url,
					title,
					description,
					images: [{ url: SITE_IMAGE_URL }],
				}}
			/>
		</>
	)
}

export default Seo
