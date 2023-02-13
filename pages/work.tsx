import Layout from '../components/layout'
import Image from 'next/image'
import Head from 'next/head'
import { NextSeo } from 'next-seo';

export default function Home() {
	const site_work_title = "ケイ(@sw_ts_k)のプロフィール -WORK-";
	const site_work_description = "ケイ(@sw_ts_k)のプロフィール：プログラミングによる制作物を載せたページ。";
	const site_image_url = "https://swtsk.netlify.app/twitter/twitter_icon.jpeg";
	const site_work_url = "https://swtsk.netlify.app/work";
	
	// 上から順に読み込まれる。
	const works = [
		{
			src: "/work/work4-1.png",
			title: "実験用に作成したSNSプラットフォーム（JavaScript×Firebase）",
			alt: "実験用に作成したSNSプラットフォーム（JavaScript×Firebase）"
		},
		{
			src: "/work/work3-1.png",
			title: "画像付カレンダーアプリ（Python×Kivy）",
			alt: "画像付カレンダーアプリ（Python×Kivy）"
		},
		{
			src: "/work/work2-1.png",
			title: "タイプ相性チェッカーアプリ（Python×Kivy）",
			alt: "タイプ相性チェッカーアプリ（Python×Kivy）"
		},
		{
			src: "/work/work1-1.png",
			title: "音楽プレーヤーアプリ（Python×Kivy）",
			alt: "音楽プレーヤーアプリ（Python×Kivy）"
		},
	]
	
	return (
		<>
			<Head>
				{/* twitter card */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@sw_ts_k" />
				<meta name="twitter:title" content={site_work_title} />
				<meta name="twitter:description" content={site_work_description} />
				<meta name="twitter:image" content={site_image_url} />
				
				{/* GAの設定 */}
				<script async src={`https://www.googletagmanager.com/gtag/js?id=G-437E8GND3S`}></script>
 				<script dangerouslySetInnerHTML={{
 					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						
						gtag('config', 'G-437E8GND3S');
 					`}}
 				/>
			</Head>
			<NextSeo
				title={site_work_title}
				description={site_work_description}
				openGraph={{
					url: site_work_url,
					title: site_work_title,
					description: site_work_description,
					images: [
						{
							url: site_image_url,
						},
					],
				}}
			/>
			<Layout selected={'work'}>
				<div className="work_contents_container">
					<div className="work_menu_title">WORK</div>
					<div className="work_gallery">
						{works.map((work) => (
							<div className="work_content content_loading" key={work.src}>
								<a href={work.src} data-lightbox="work_group" data-title={work.title} data-alt={work.alt}>
									<Image src={work.src} alt={work.alt} layout="fill" objectFit="cover" />
								</a>
							</div>
						))}
					</div>
				</div>
			</Layout>
			</>
	)
}
