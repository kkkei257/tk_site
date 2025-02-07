import Layout from '../components/layout'
import Image from 'next/image'
import Head from 'next/head'
import { NextSeo } from 'next-seo';

export default function Home() {
	const site_event_title = 'tkのプロフィール -EVENT-';
	const site_event_description = 'tkのプロフィール：参加したイベントや旅行先の写真をまとめたページ。';
	const site_image_url = 'https://tk-profile.netlify.app/blog/blog_icon.webp';
	const site_event_url = 'https://tk-profile.netlify.app/event';
	
	// 上から順に読み込まれる。
	const events = [
		{
			src: '/event/event20220807.webp',
			title: '2022/08/05 - 2022/08/07 石川旅行 at 金沢21世紀美術館',
			alt: '2022/08/05 - 2022/08/07 石川旅行 at 金沢21世紀美術館'
		},
		// {
		// 	src: '/event/event20220306.webp',
		// 	title: '2022/03/06 大阪・淡路島旅行、写真は淡路島にて撮影',
		// 	alt: '2022/03/06 大阪・淡路島旅行、写真は淡路島にて撮影影'
		// },
		{
			src: '/event/event20210919.webp',
			title: '2021/09/19 山梨・静岡旅行 at 紅葉台展望レストハウス',
			alt: '2021/09/19 山梨・静岡旅行 at 紅葉台展望レストハウス'
		},
		// {
		// 	src: '/event/event20210325.webp',
		// 	title: '2021/03/25 大学院修了',
		// 	alt: '2021/03/25 大学院修了'
		// },
		// {
		// 	src: '/event/event20210301.webp',
		// 	title: '2021/03/01 スノボ旅行',
		// 	alt: '2021/03/01 スノボ旅行'
		// },
		{
			src: '/event/event20210209.webp',
			title: '2021/02/09 初心者会',
			alt: '2021/02/09 初心者会'
		},
		{
			src: '/event/event20200221.webp',
			title: '2020/02/21 スノボ旅行',
			alt: '2020/02/21 スノボ旅行'
		},
		// {
		// 	src: '/event/event20190622.webp',
		// 	title: '2019/06/22 JGMF Face to Face vol.2 at 渋谷ストリームホール',
		// 	alt: '2019/06/22 JGMF Face to Face vol.2 at 渋谷ストリームホール'
		// },
		{
			src: '/event/event201903330.webp',
			title: '2019/03/30 サバゲー初参加',
			alt: '2019/03/30 サバゲー初参加'
		},
		{
			src: '/event/event20190227.webp',
			title: '2019/02/27 人生初スノボ',
			alt: '2019/02/27 人生初スノボ'
		},
		{
			src: '/event/event20190217.webp',
			title: '2019/02/17 日間賀島',
			alt: '2019/02/17 日間賀島で学会発表'
		},
		{
			src: '/event/event20181222.webp',
			title: '2018/12/22 スイーツ会 at 横浜',
			alt: '2018/12/22 スイーツ会 at 横浜'
		},
		{
			src: '/event/event20181007.webp',
			title: '2018/10/07 東京モーターフェス at お台場',
			alt: '2018/10/07 東京モーターフェス at お台場'
		},
		{
			src: '/event/event20180928.webp',
			title: '2018/09/28 JOJO展 at 国立新美術館',
			alt: '2018/09/28 JOJO展 at 国立新美術館'
		},
		{
			src: '/event/event20180829.webp',
			title: '2018/08/29 京都旅行、写真は城崎温泉にて撮影',
			alt: '2018/08/29 京都旅行、写真は城崎温泉にて撮影'
		},
		{
			src: '/event/event20180828.webp',
			title: '2018/08/28 京都旅行、写真は伏見稲荷大社にて撮影',
			alt: '2018/08/28 京都旅行、写真は伏見稲荷大社にて撮影'
		},
		{
			src: '/event/event20180804.webp',
			title: '2018/08/04 花火大会 at 市川',
			alt: '2018/08/04 花火大会 at 市川'
		},
		{
			src: '/event/event20180305.webp',
			title: '2018/03/05 ユニバ',
			alt: '2018/03/05 ユニバ'
		},
	]
	
	return (
		<>
			<Head>
				{/* twitter card */}
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:site' content='@sw_ts_k' />
				<meta name='twitter:title' content={site_event_title} />
				<meta name='twitter:description' content={site_event_description} />
				<meta name='twitter:image' content={site_image_url} />
				
				{/* GAの設定 */}
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
				title={site_event_title}
				description={site_event_description}
				openGraph={{
					url: site_event_url,
					title: site_event_title,
					description: site_event_description,
					images: [
						{
							url: site_image_url,
						},
					],
				}}
			/>
			<Layout selected={'event'}>
				<div className='event_contents_container'>
					<div className='event_menu_title'>EVENT</div>
					<div className='event_gallery'>
						{events.map((event) => (
							<div className='event_content content_loading' key={event.src}>
								<a href={event.src} data-lightbox='event_group' data-title={event.title} data-alt={event.alt}>
									<Image src={event.src} alt={event.alt} layout='fill' objectFit='cover' />
								</a>
							</div>
						))}
					</div>
				</div>
			</Layout>
		</>
	)
}
