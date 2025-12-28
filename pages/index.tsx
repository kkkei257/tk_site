import Layout from '../components/layout'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { NextSeo } from 'next-seo';

export default function Home() {
	const site_index_title = 'tkのプロフィール -TOP-';
	const site_index_description = 'tkのプロフィール：TOPページ';
	const site_image_url = 'https://tk-profile.netlify.app/blog/blog_icon.webp';
	const site_index_url = 'https://tk-profile.netlify.app/';

	const features = [
		{
			href: './about',
			title: 'ABOUT',
			description: '自己紹介。趣味などを書いています。',
			linkText: 'プロフィールを表示',
			image: '/blog/blog_icon.webp',
			alt: 'blogのアイコン'
		},
		{
			href: './work',
			title: 'WORK',
			description: '開発実績およびブログ記事を載せたページ。',
			linkText: '開発実績',
			image: '/work/kuchikomi_search_1.webp',
			alt: 'クチコミキーワード検索'
		},
		{
			href: './event',
			title: 'EVENT',
			description: '参加したイベントや旅行先の写真をまとめたページ。',
			linkText: 'イベント一覧',
			image: '/event/sanfrancisco.JPG',
			alt: '2024/08/09 - 2022/08/19 アメリカ旅行（ラスベガス、サンフランシスコ）'
		}
	];

	return (
		<>
			<Head>
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:site' content='@sw_ts_k' />
				<meta name='twitter:title' content={site_index_title} />
				<meta name='twitter:description' content={site_index_description} />
				<meta name='twitter:image' content={site_image_url} />

				<script async src={`https://www.googletagmanager.com/gtag/js?id=G-GTR2P2G0LD`}></script>
				<script dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						
						gtag('config', 'G-GTR2P2G0LD');
					`}}
				/>
			</Head>
			<NextSeo
				title={site_index_title}
				description={site_index_description}
				openGraph={{
					url: site_index_url,
					title: site_index_title,
					description: site_index_description,
					images: [
						{
							url: site_image_url,
						},
					],
				}}
			/>
			<Layout>
				<div className='index_contents_container'>
					<section className='hero_section'>
						<div className='hero_image_wrapper'>
							<Image
								src='/event/event20220807.webp'
								alt='20220807'
								fill
								style={{ objectFit: 'cover' }}
								priority
							/>
							<div className='hero_overlay'></div>
						</div>
						<div className='hero_content'>
							{/*<h1 className='hero_title'>Welcome to my Portfolio</h1>*/}
							<p className='hero_subtitle'>Web Developer & Engineer</p>
						</div>
					</section>

					<section className='features_section'>
						<div className='features_grid'>
							{features.map((feature) => (
								<article className='feature_card' key={feature.title}>
									<div className='feature_card_image'>
										<Image
											src={feature.image}
											alt={feature.alt}
											fill
											style={{ objectFit: 'cover' }}
										/>
									</div>
									<div className='feature_card_content'>
										<h2 className='feature_card_title'>{feature.title}</h2>
										<p className='feature_card_description'>{feature.description}</p>
										<Link href={feature.href} className='feature_card_link'>
											{feature.linkText}
											<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
												<path d="M5 12h14M12 5l7 7-7 7"/>
											</svg>
										</Link>
									</div>
								</article>
							))}
						</div>
					</section>

					<div className='index_content_link'>
						<Link href='./privacy_policy'>プライバシーポリシー</Link>
					</div>
				</div>
			</Layout>
		</>
	)
}
