import Layout from '../components/layout'
import Image from 'next/image'
import Head from 'next/head'
import { NextSeo } from 'next-seo';

export default function Home() {
	const site_index_title = "ケイ(@sw_ts_k)のプロフィール -TOP-";
	const site_index_description = "ケイ(@sw_ts_k)のプロフィール：TOPページ";
	const site_image_url = "https://swtsk.netlify.app/twitter/twitter_icon.jpeg";
	const site_index_url = "https://swtsk.netlify.app/";
	
	return (
		<>
			<Head>
				{/* twitter card */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@sw_ts_k" />
				<meta name="twitter:title" content={site_index_title} />
				<meta name="twitter:description" content={site_index_description} />
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
				<div className="index_contents_container">
					<div className="index_top_gallery">
						<span className="index_top_illust_pc content_loading">
							<Image src="/illust/illust20220727.png" alt="20220925" layout="fill" objectFit="cover" />
						</span>
						<span className="index_top_illust_sp content_loading">
							<Image src="/illust/illust20200703.png" alt="20220810" layout="fill" objectFit="cover" />
						</span>
					</div>
					<div className="index_gallery">
						<div className="index_content">
							<div className="index_content_illust content_loading">
								<Image src="/blog/blog_icon.png" alt="ブログ「ケイの雑記」のアイコン" layout="fill" objectFit="cover" />
							</div>
							<div className="index_content_space"></div>
							<div className="index_content_text">
								<div className="index_content_text_title">BLOG</div>
								<div className="index_content_text_explain">個人ブログ。鈍足で更新しています。</div>
								<div className="index_content_text_detail">
									<a href="https://kkkei257.blogspot.com/" target="_blank" rel="noopener noreferrer">ブログを表示</a>
								</div>
							</div>
						</div>
						<div className="index_content">
							<div className="index_content_illust content_loading">
								<Image src="/twitter/twitter_icon.jpeg" alt="twitterのアイコン" layout="fill" objectFit="cover" />
							</div>
							<div className="index_content_space"></div>
							<div className="index_content_text">
								<div className="index_content_text_title">ABOUT</div>
								<div className="index_content_text_explain">自己紹介。好きな作品などを書いています。</div>
								<div className="index_content_text_detail">
									<a href="./about">プロフィールを表示</a>
								</div>
							</div>
						</div>
						<div className="index_content">
							<div className="index_content_illust content_loading">
								<Image src="/illust/illust20220912.png" alt="映画ソニックのイラスト" layout="fill" objectFit="cover" />
							</div>
							<div className="index_content_space"></div>
							<div className="index_content_text">
								<div className="index_content_text_title">ILLUSTRATE</div>
								<div className="index_content_text_explain">Twitterに載せているイラストをまとめたページ。</div>
								<div className="index_content_text_detail">
									<a href="./illust">イラスト一覧</a>
								</div>
							</div>
						</div>
						<div className="index_content">
							<div className="index_content_illust content_loading">
								<Image src="/work/work2-1.png" alt="ポケモンタイプ相性チェッカー" layout="fill" objectFit="cover" />
							</div>
							<div className="index_content_space"></div>
							<div className="index_content_text">
								<div className="index_content_text_title">WORK</div>
								<div className="index_content_text_explain">プログラミングによる制作物を載せたページ。</div>
								<div className="index_content_text_detail">
									<a href="./work">制作物一覧</a>
								</div>
							</div>
						</div>
						<div className="index_content">
							<div className="index_content_illust content_loading">
								<Image src="/event/event20220626.jpeg" alt="ソニック公式Twitterオフ会" layout="fill" objectFit="cover" />
							</div>
							<div className="index_content_space"></div>
							<div className="index_content_text">
								<div className="index_content_text_title">EVENT</div>
								<div className="index_content_text_explain">参加したイベントや旅行先の写真をまとめたページ。</div>
								<div className="index_content_text_detail">
									<a href="./event">イベント一覧</a>
								</div>
							</div>
						</div>
						<div className="index_content">
							<div className="index_content_illust content_loading">
								<Image src="/images/marshmallow_top.png" alt="マシュマロ" layout="fill" objectFit="cover" />
							</div>
							<div className="index_content_space"></div>
							<div className="index_content_text">
								<div className="index_content_text_title">MARSHMALLOW</div>
								<div className="index_content_text_explain">ヶィのマシュマロ。イラストのリクエストや質問等受け付けてます。</div>
								<div className="index_content_text_detail">
									<a href="https://marshmallow-qa.com/sw_ts_k" target="_blank" rel="noopener noreferrer">マシュマロを表示</a>
								</div>
							</div>
						</div>
						<div className="index_content_link">
							<a href="https://vvvoi128.gitlab.io/swtsk/index.html" target="_blank" rel="noopener noreferrer">
								旧プロフィールサイト
							</a>
						</div>
						<div className="index_content_link">
							<a href="./privacy_policy">
								プライバシーポリシー
							</a>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}
