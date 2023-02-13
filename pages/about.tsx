import Layout from '../components/layout'
import Image from 'next/image'
import Head from 'next/head'
import { NextSeo } from 'next-seo';

export default function Home() {
	const site_about_title = "ケイ(@sw_ts_k)のプロフィール -ABOUT-";
	const site_about_description = "ケイ(@sw_ts_k)のプロフィール：自己紹介。好きな作品などを書いています。";
	const site_image_url = "https://swtsk.netlify.app/twitter/twitter_icon.jpeg";
	const site_about_url = "https://swtsk.netlify.app/about";
	
	return (
		<>
			<Head>
				{/* twitter card */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@sw_ts_k" />
				<meta name="twitter:title" content={site_about_title} />
				<meta name="twitter:description" content={site_about_description} />
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
				<div className="about_contents_container">
					<div className="about_menu_title">ABOUT</div>
					<div className="about_profile">
						<div className="about_profile_content_illust">
							<Image src="/blog/blog_icon.png" alt="blogのアイコン" width={50} height={50} />
						</div>
						<div className="about_profile_content_text">
							はじめまして、加瀬と申します。2021年4月からHR領域のWeb系企業でWeb開発エンジニアをしています。<br/>
							<br/>
							大学院ではSNS関連の研究（デマの拡散問題に関するテーマ）をしていました。<br />
							仕事では主に自社Webサービスのバックエンドの開発に従事しています。<br />
							本サイトは勉強を兼ねてNext.jsで作成しました。<br />
							<br/>
							好きなこと：<span className="about_profile_content_text_br"><br/></span>
							モノを作ること。映画館で映画を観る。気ままに出歩いたり写真を撮ったり。<br />
						</div>
					</div>
					<div className="about_sns">
						<div className="about_sns_content_illust">
							
						</div>
						<div className="about_sns_content_icon">
							<div className="about_sns_content_icon_items">
								<a href="https://www.wantedly.com/id/takahisa_kase" target="_blank" rel="noopener noreferrer">
									<Image src="/sns/Wantedly_Mark_LightBG.png" alt="Wantedlyのアイコン" layout="fill" objectFit="cover" />
								</a>
							</div>
							<div className="about_sns_content_icon_items">
								<a href="https://www.linkedin.com/in/takahisa-kase-2b1302175/" target="_blank" rel="noopener noreferrer">
									<Image src="/sns/LI-In-Bug.png" alt="Linkedinのアイコン" layout="fill" objectFit="cover" />
								</a>
							</div>
							<div className="about_sns_content_icon_items">
								<a href="https://qiita.com/kkkei257" target="_blank" rel="noopener noreferrer">
									<Image src="/sns/qiitan_w_trans.png" alt="qiitaのアイコン" layout="fill" objectFit="cover" />
								</a>
							</div>
							<div className="about_sns_content_icon_items">
								<a href="https://github.com/kkkei257" target="_blank" rel="noopener noreferrer">
									<Image src="/sns/github-mark.png" alt="githubのアイコン" layout="fill" objectFit="cover" />
								</a>
							</div>
							{/* アイコンの間隔調整のために空白を設ける。 */}
							<div className="about_sns_content_icon_items"></div>
						</div>
					</div>
					<div className="about_favorite_contents">
						<div className="about_favorite_content_illust">
							<Image src="/images/book.png" alt="twitterのアイコン" width={50} height={50} />
						</div>
						<div className="about_favorite_content_text">
							その他のプロフィール：
							<ul>
								<li>好きな飲み物：カフェラテ</li>
								<li>最近始めた趣味：アナログレコードを聴く、ミラーレス一眼で写真を撮る</li>
								<li>得意なこと：気になることを徹底的に調べる、知識や経験を資料化する</li>
							</ul>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}
