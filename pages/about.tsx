import Layout from '../components/layout'
import Image from 'next/image'
import Head from 'next/head'
import { NextSeo } from 'next-seo';

export default function Home() {
	const site_about_title = 'tkのプロフィール -ABOUT-';
	const site_about_description = '加瀬貴久のプロフィール：自己紹介。趣味などを書いています。';
	const site_image_url = 'https://tk-profile.netlify.app/blog/blog_icon.webp';
	const site_about_url = 'https://tk-profile.netlify.app/about';
	
	return (
		<>
			<Head>
				{/* twitter card */}
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:site' content='@sw_ts_k' />
				<meta name='twitter:title' content={site_about_title} />
				<meta name='twitter:description' content={site_about_description} />
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
				title={site_about_title}
				description={site_about_description}
				openGraph={{
					url: site_about_url,
					title: site_about_title,
					description: site_about_description,
					images: [
						{
							url: site_image_url,
						},
					],
				}}
			/>
			<Layout selected={'about'}>
				<div className='about_contents_container'>
					<div className='about_menu_title'>ABOUT</div>
					<div className='about_profile'>
						<div className='about_profile_content_illust'>
							<Image src='/blog/blog_icon.webp' alt='blogのアイコン' width={50} height={50} />
						</div>
						<div className='about_profile_content_text'>
							2021年4月からHR領域のWeb系企業でWeb開発エンジニアをしています。<br/>
							<br/>
							大学院ではSNS関連の研究（デマの拡散問題に関するテーマ）をしていました。<br />
							仕事では主に自社Webサービスのバックエンドの開発に従事しています。<br />
							本サイトは勉強を兼ねてNext.jsで作成しました。<br />
							<br/>
							好きなこと：<span className='about_profile_content_text_br'><br/></span>
							カフェ巡り / 映画館で映画を観る / 気ままに出歩いたり写真を撮ったり<br />
						</div>
					</div>
					<div className='about_sns'>
						<div className='about_sns_content_illust'>
							
						</div>
						<div className='about_sns_content_icon'>
							{/* ライトモード */}
							<div className='about_sns_content_icon_items light'>
								<a href='https://www.wantedly.com/id/takahisa_kase' target='_blank' rel='noopener noreferrer'>
									<Image src='/sns/Wantedly_Mark_LightBG.webp' alt='Wantedlyのアイコン' layout='fill' objectFit='cover' />
								</a>
							</div>
							{/* ダークモード */}
							<div className='about_sns_content_icon_items dark'>
								<a href='https://www.wantedly.com/id/takahisa_kase' target='_blank' rel='noopener noreferrer'>
									<Image src='/sns/Wantedly_Mark_DarkBG.webp' alt='Wantedlyのアイコン' layout='fill' objectFit='cover' />
								</a>
							</div>
							
							<div className='about_sns_content_icon_items'>
								<a href='https://www.linkedin.com/in/takahisa-kase-2b1302175/' target='_blank' rel='noopener noreferrer'>
									<Image src='/sns/LI-In-Bug.webp' alt='Linkedinのアイコン' layout='fill' objectFit='cover' />
								</a>
							</div>
							<div className='about_sns_content_icon_items'>
								<a href='https://qiita.com/kkkei257' target='_blank' rel='noopener noreferrer'>
									<Image src='/sns/qiitan_w_trans.webp' alt='qiitaのアイコン' layout='fill' objectFit='cover' />
								</a>
							</div>
							
							{/* ライトモード */}
							<div className='about_sns_content_icon_items light'>
								<a href='https://github.com/kkkei257' target='_blank' rel='noopener noreferrer'>
									<Image src='/sns/github-mark.webp' alt='githubのアイコン' layout='fill' objectFit='cover' />
								</a>
							</div>
							{/* ダークモード */}
							<div className='about_sns_content_icon_items dark'>
								<a href='https://github.com/kkkei257' target='_blank' rel='noopener noreferrer'>
									<Image src='/sns/github-mark-white.webp' alt='githubのアイコン' layout='fill' objectFit='cover' />
								</a>
							</div>
							
							<div className='about_sns_content_icon_items'>
								<a href='https://uec.repo.nii.ac.jp/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=9936&item_no=1&page_id=13&block_id=21' target='_blank' rel='noopener noreferrer'>
									<Image src='/images/paper.webp' alt='論文のアイコン' layout='fill' objectFit='cover' />
								</a>
							</div>
						</div>
					</div>
					<div className='about_favorite_contents'>
						<div className='about_favorite_content_illust'>
							<Image src='/images/book.webp' alt='twitterのアイコン' width={50} height={50} />
						</div>
						<div className='about_favorite_content_text'>
							その他のプロフィール：
							<ul>
								<li>好きな飲み物：<span className='about_profile_content_text_br'><br/></span>
									カフェラテ、ホットチョコレート
								</li>
								<li>趣味：<span className='about_profile_content_text_br'><br/></span>
									ブログ / イラスト / ギター / 旅行 など
								</li>
								<li>経験したことのある技術・言語：<span className='about_profile_content_text_br'><br/></span>
									PHP / Vue.js / Next.js / Elasticsearch / Terraform / Python など
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}
