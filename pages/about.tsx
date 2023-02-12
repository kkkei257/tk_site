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
							ケイです。<b>ソニック</b> / <b>ポケモン</b> / <b>マッドラットデッド</b> / <b>オッドタクシー</b> が大好きです。ケモノとても良き_(:3 」∠)_<br/>
							<br/>
							ソニックのキャラ全員大好きですが特にテイルスくんを推してます。<br />
							オッドタクシーのキャラでは田中と今井が特に好きです。<br />
							<br/>
							好きなこと：<span className="about_profile_content_text_br"><br/></span>
							推しを推すこと。映画館で映画を観る。気ままに出歩いたり写真を撮ったり。<br />
						</div>
					</div>
					<div className="about_sns">
						<div className="about_sns_content_illust">
							
						</div>
						<div className="about_sns_content_icon">
							<div className="about_sns_content_icon_items">
								<a href="https://twitter.com/sw_ts_k" target="_blank" rel="noopener noreferrer">
									<Image src="/sns/Twitter social icons - circle - blue.png" alt="Twitterのアイコン" layout="fill" objectFit="cover" />
								</a>
							</div>
							<div className="about_sns_content_icon_items">
								<a href="https://qiita.com/kkkei257" target="_blank" rel="noopener noreferrer">
									<Image src="/sns/qiitan_w_trans.png" alt="qiitaのアイコン" layout="fill" objectFit="cover" />
								</a>
							</div>
							<div className="about_sns_content_icon_items">
								<a href="https://kkkei257.blogspot.com/" target="_blank" rel="noopener noreferrer">
									<Image src="/sns/blogger_icon.png" alt="bloggerのアイコン" layout="fill" objectFit="cover" />
								</a>
							</div>
							<div className="about_sns_content_icon_items">
								<a href="https://poipiku.com/1252401/" target="_blank" rel="noopener noreferrer">
									<Image src="/sns/poipiku_w_trans.png" alt="poipikuのアイコン" layout="fill" objectFit="cover" />
								</a>
							</div>
							<div className="about_sns_content_icon_items">
								<a href="https://www.instagram.com/kkkei257/" target="_blank" rel="noopener noreferrer">
							<Image src="/sns/Instagram_Glyph_Gradient.png" alt="Instagramのアイコン" layout="fill" objectFit="cover" />
						</a>
							</div>
						</div>
					</div>
					<div className="about_favorite_contents">
						<div className="about_favorite_content_illust">
							<Image src="/images/book.png" alt="twitterのアイコン" width={50} height={50} />
						</div>
						<div className="about_favorite_content_text">
							その他好きな作品：
							<ul>
								<li>ジョジョ(7部まで読んだ)</li>
								<li>メイドインアビス</li>
								<li>魔人探偵脳噛ネウロ</li>
								<li>金色のガッシュ</li>
								<li>リコリス・リコイル</li>
								<li>鬼滅の刃</li>
								<li>ヒロアカ</li>
								<li>テニスの王子様</li>
							</ul>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}
