import Layout from '../components/layout'
import Image from 'next/image'
import Head from 'next/head'
import { NextSeo } from 'next-seo';

export default function Home() {
	const site_index_title = 'tkのプロフィール -TOP-';
	const site_index_description = 'tkのプロフィール：TOPページ';
	const site_image_url = 'https://tk-profile.netlify.app/blog/blog_icon.webp';
	const site_index_url = 'https://tk-profile.netlify.app/';
	
	return (
		<>
			<Head>
				{/* twitter card */}
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:site' content='@sw_ts_k' />
				<meta name='twitter:title' content={site_index_title} />
				<meta name='twitter:description' content={site_index_description} />
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
					<div className='index_top_gallery'>
						<span className='index_top_illust_pc content_loading'>
							<Image src='/event/event20220807.webp' alt='20220807' layout='fill' objectFit='cover' />
						</span>
						<span className='index_top_illust_sp content_loading'>
							<Image src='/event/event20220807.webp' alt='20220807' layout='fill' objectFit='cover' />
						</span>
					</div>
					<div className='index_gallery'>
						<div className='index_content'>
							<div className='index_content_illust content_loading'>
								<Image src='/blog/blog_icon.webp' alt='blogのアイコン' layout='fill' objectFit='cover' />
							</div>
							<div className='index_content_space'></div>
							<div className='index_content_text'>
								<div className='index_content_text_title'>ABOUT</div>
								<div className='index_content_text_explain'>自己紹介。趣味などを書いています。</div>
								<div className='index_content_text_detail'>
									<a href='./about'>プロフィールを表示</a>
								</div>
							</div>
						</div>
						<div className='index_content'>
							<div className='index_content_illust content_loading'>
								<Image src='/work/work2-1.webp' alt='ポケモンタイプ相性チェッカー' layout='fill' objectFit='cover' />
							</div>
							<div className='index_content_space'></div>
							<div className='index_content_text'>
								<div className='index_content_text_title'>WORK</div>
								<div className='index_content_text_explain'>プログラミングによる制作物を載せたページ。</div>
								<div className='index_content_text_detail'>
									<a href='./work'>制作物一覧</a>
								</div>
							</div>
						</div>
						<div className='index_content'>
							<div className='index_content_illust content_loading'>
								<Image src='/event/event20200221.webp' alt='2020/02/21 スノボ旅行' layout='fill' objectFit='cover' />
							</div>
							<div className='index_content_space'></div>
							<div className='index_content_text'>
								<div className='index_content_text_title'>EVENT</div>
								<div className='index_content_text_explain'>参加したイベントや旅行先の写真をまとめたページ。</div>
								<div className='index_content_text_detail'>
									<a href='./event'>イベント一覧</a>
								</div>
							</div>
						</div>
						<div className='index_content_link'>
							<a href='./privacy_policy'>
								プライバシーポリシー
							</a>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}
