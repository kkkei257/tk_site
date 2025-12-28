import Layout from '../components/layout'
import Image from 'next/image'
import Head from 'next/head'
import { NextSeo } from 'next-seo';

export default function Home() {
	const site_work_title = 'tkのプロフィール -WORK-';
	const site_work_description = 'tkのプロフィール：プログラミングによる制作物を載せたページ。';
	const site_image_url = 'https://tk-profile.netlify.app/blog/blog_icon.webp';
	const site_work_url = 'https://tk-profile.netlify.app/work';

	const blogArticles = [
		{
			url: 'https://techblog.openwork.co.jp/entry/hackathon-2025',
			thumbnail: 'https://cdn-ak.f.st-hatena.com/images/fotolife/o/openwork_engineer/20251222/20251222112242.jpg',
			title: '生成AI時代のハッカソンで戦う上でやるべきだと感じたこと',
		},
		{
			url: 'https://qiita.com/kkkei257/items/6fd2292fbb278dbf7eed',
			thumbnail: 'https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-user-contents.imgix.net%2Fhttps%253A%252F%252Fcdn.qiita.com%252Fassets%252Fpublic%252Fadvent-calendar-ogp-background-7940cd1c8db80a7ec40711d90f43539e.jpg%3Fixlib%3Drb-4.0.0%26w%3D1200%26blend64%3DaHR0cHM6Ly9xaWl0YS11c2VyLXByb2ZpbGUtaW1hZ2VzLmltZ2l4Lm5ldC9odHRwcyUzQSUyRiUyRnMzLWFwLW5vcnRoZWFzdC0xLmFtYXpvbmF3cy5jb20lMkZxaWl0YS1pbWFnZS1zdG9yZSUyRjAlMkY1MTU2MTIlMkYzMmE0ZDQ5ODliYjgwNGEzOGZkNTU4ODBiZTQ0OThkOGI3MjQwZjQ4JTJGeF9sYXJnZS5wbmclM0YxNjIyNjQyODQxP2l4bGliPXJiLTQuMC4wJmFyPTElM0ExJmZpdD1jcm9wJm1hc2s9ZWxsaXBzZSZiZz1GRkZGRkYmZm09cG5nMzImcz1hYzBkYzc4N2MwMzk0ZGFhOTAxZWZmODJiMWJmMDJlNg%26blend-x%3D120%26blend-y%3D462%26blend-w%3D90%26blend-h%3D90%26blend-mode%3Dnormal%26mark64%3DaHR0cHM6Ly9xaWl0YS1vcmdhbml6YXRpb24taW1hZ2VzLmltZ2l4Lm5ldC9odHRwcyUzQSUyRiUyRnMzLWFwLW5vcnRoZWFzdC0xLmFtYXpvbmF3cy5jb20lMkZxaWl0YS1vcmdhbml6YXRpb24taW1hZ2UlMkY1ZDM2YmMxMDc3MzdiODI4ZWViNjQxMjgyOTZmYWFmZjMyZTFkYjIwJTJGb3JpZ2luYWwuanBnJTNGMTczMjYzODQ2Mz9peGxpYj1yYi00LjAuMCZ3PTQ0Jmg9NDQmZml0PWNyb3AmbWFzaz1jb3JuZXJzJmNvcm5lci1yYWRpdXM9OCZiZz1GRkZGRkYmYm9yZGVyPTIlMkNGRkZGRkYmZm09cG5nMzImcz05N2FlYzJkNzdhMWNkNmJmNDRiNjRmNTM4OThlZGMzOA%26mark-x%3D186%26mark-y%3D515%26mark-w%3D40%26mark-h%3D40%26s%3D8b579d9c4ad820b6534f25a3ac477451?ixlib=rb-4.0.0&w=1200&fm=jpg&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTk2MCZoPTMyNCZ0eHQ9QW1hem9uJTIwT3BlblNlYXJjaCUyMFNlcnZpY2UlRTMlODElQTclRTklODElQUQlRTklODElODclRTMlODElOTclRTMlODElOUYlRTMlODIlQTglRTMlODMlQTklRTMlODMlQkMlRTMlODElQTglRTglQTclQTMlRTYlQjElQkElRTclQUQlOTYlRTMlODElQUUlRTklODAlODYlRTUlQkMlOTUlRTMlODElOEQlRTklOUIlODYmdHh0LWFsaWduPWxlZnQlMkN0b3AmdHh0LWNvbG9yPSUyMzNBM0MzQyZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT01NiZ0eHQtcGFkPTAmcz01YzZmM2E2NDljODM4MjNkZjAwODkxMDk5ZTA1YmE0MA&mark-x=120&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTgzOCZoPTU4JnR4dD0lNDBra2tlaTI1NyZ0eHQtY29sb3I9JTIzM0EzQzNDJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTM2JnR4dC1wYWQ9MCZzPWMzYjBhZTRkNTc5OTg0NDlhZDZiMjZiYTNiNjY3MmMy&blend-x=242&blend-y=454&blend-w=838&blend-h=46&blend-fit=crop&blend-crop=left%2Cbottom&blend-mode=normal&txt64=5qCq5byP5Lya56S-Qm9jZWs&txt-x=242&txt-y=539&txt-width=838&txt-clip=end%2Cellipsis&txt-color=%233A3C3C&txt-font=Hiragino%20Sans%20W6&txt-size=28&s=215c2bb358df5e880ccc5e1486963dca',
			title: 'Amazon OpenSearch Serviceで遭遇したエラーと解決策の逆引き集',
		},
		{
			url: 'https://techblog.openwork.co.jp/entry/improving-keyword-search-speed',
			thumbnail: 'https://cdn-ak.f.st-hatena.com/images/fotolife/o/openwork_engineer/20240109/20240109130701.png',
			title: 'Elasticsearchの検索ロジックを変更してクチコミキーワード検索速度を改善した',
		},
		{
			url: 'https://qiita.com/kkkei257/items/62bef12a54ef67e4cef6',
			thumbnail: 'https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-user-contents.imgix.net%2Fhttps%253A%252F%252Fcdn.qiita.com%252Fassets%252Fpublic%252Farticle-ogp-background-afbab5eb44e0b055cce1258705637a91.png%3Fixlib%3Drb-4.0.0%26w%3D1200%26blend64%3DaHR0cHM6Ly9xaWl0YS11c2VyLXByb2ZpbGUtaW1hZ2VzLmltZ2l4Lm5ldC9odHRwcyUzQSUyRiUyRnMzLWFwLW5vcnRoZWFzdC0xLmFtYXpvbmF3cy5jb20lMkZxaWl0YS1pbWFnZS1zdG9yZSUyRjAlMkY1MTU2MTIlMkYzMmE0ZDQ5ODliYjgwNGEzOGZkNTU4ODBiZTQ0OThkOGI3MjQwZjQ4JTJGeF9sYXJnZS5wbmclM0YxNjIyNjQyODQxP2l4bGliPXJiLTQuMC4wJmFyPTElM0ExJmZpdD1jcm9wJm1hc2s9ZWxsaXBzZSZiZz1GRkZGRkYmZm09cG5nMzImcz1hYzBkYzc4N2MwMzk0ZGFhOTAxZWZmODJiMWJmMDJlNg%26blend-x%3D120%26blend-y%3D467%26blend-w%3D82%26blend-h%3D82%26blend-mode%3Dnormal%26s%3D193ec62443e2ae7323e6aefe2bcbe813?ixlib=rb-4.0.0&w=1200&fm=jpg&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTk2MCZoPTMyNCZ0eHQ9R2l0aHViJTIwQWN0aW9ucyVFMyU4MiU5MiVFNCVCRCVCRiVFMyU4MSVBMyVFMyU4MSVBNiVFMyU4MyVBQyVFMyU4MyU5MyVFMyU4MyVBNSVFMyU4MyVCQyVFOSU5NiU4QiVFNSVBNyU4QiVFNiU5NyVBNSVFNiU5OSU4MiVFMyU4MSU4QSVFMyU4MiU4OCVFMyU4MSVCMyVFNSVBRSU4QyVFNCVCQSU4NiVFNiU5NyVBNSVFNiU5OSU4MiVFMyU4MiU5Mk5vdGlvbiVFMyU4MSVBRSVFMyU4MiVCRiVFMyU4MiVCOSVFMyU4MiVBRiVFMyU4MyU4MSVFMyU4MiVCMSVFMyU4MyU4MyVFMyU4MyU4OCVFMyU4MSVBQiVFOCVBOCU5OCVFOSU4QyVCMiVFMyU4MSU5OSVFMyU4MiU4QiZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZ0eHQtY29sb3I9JTIzMUUyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTU2JnR4dC1wYWQ9MCZzPWU4YzVlNTNmYzY0ODQxNGUzNDJiMWU5NzFmYTE4NzMx&mark-x=120&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTgzOCZoPTU4JnR4dD0lNDBra2tlaTI1NyZ0eHQtY29sb3I9JTIzMUUyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTM2JnR4dC1wYWQ9MCZzPTRmYTBjMDkzNGMzMWFlZDdjYmM1OWNkYmE2ZmNlNWM2&blend-x=242&blend-y=480&blend-w=838&blend-h=46&blend-fit=crop&blend-crop=left%2Cbottom&blend-mode=normal&s=b5279bcaca2babff7d10eabbc8d8f36a',
			title: 'Github Actionsを使ってレビュー開始日時および完了日時をNotionのタスクチケットに記録する\n',
		}
	]

	const works = [
		{
			src: '/work/kuchikomi_share_1.webp',
			title: '2025/12：クチコミシェア機能 (OpenWork)',
			alt: '2025/12：クチコミシェア機能 (OpenWork)'
		},
		{
			src: '/work/taskhub_output_1.webp',
			title: '2025/04：生成AI回答画面の実装 (Taskhub)',
			alt: '2025/04：生成AI回答画面の実装 (Taskhub)'
		},
		{
			src: '/work/kuchikomi_search_1.webp',
			title: '2025/02：社員評価・年収比較コンテンツ (OpenWork)',
			alt: '2025/02：社員評価・年収比較コンテンツ (OpenWork)'
		},
		{
			src: '/work/kuchikomi_search_1.webp',
			title: '2023/03：クチコミキーワード検索 (OpenWork)',
			alt: '2023/03：クチコミキーワード検索 (OpenWork)'
		},
		{
			src: '/work/work4-1.webp',
			title: '2020/09：実験用に作成したSNSプラットフォーム（JavaScript×Firebase）',
			alt: '2020/09：実験用に作成したSNSプラットフォーム（JavaScript×Firebase）'
		},
		{
			src: '/work/work3-1.webp',
			title: '2019/10：画像付カレンダーアプリ（Python×Kivy）',
			alt: '2019/10：画像付カレンダーアプリ（Python×Kivy）'
		},
		{
			src: '/work/work2-1.webp',
			title: '2019/09：タイプ相性チェッカーアプリ（Python×Kivy）',
			alt: '2019/09：タイプ相性チェッカーアプリ（Python×Kivy）'
		},
		{
			src: '/work/work1-1.webp',
			title: '2019/09：音楽プレーヤーアプリ（Python×Kivy）',
			alt: '2019/09：音楽プレーヤーアプリ（Python×Kivy）'
		},
	]

	return (
		<>
			<Head>
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:site' content='@sw_ts_k' />
				<meta name='twitter:title' content={site_work_title} />
				<meta name='twitter:description' content={site_work_description} />
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
				<div className='work_contents_container'>
					<h1 className='section_heading'>WORK</h1>

					<h2 className='section_subheading'>Blog Articles</h2>
					<div className='blog_grid'>
						{blogArticles.map((article) => (
							<a href={article.url} target='_blank' rel='noopener noreferrer' className='blog_card' key={article.url}>
								<div className='blog_thumbnail'>
									<Image src={article.thumbnail} alt={article.title} fill style={{ objectFit: 'cover' }} />
								</div>
								<div className='blog_info'>
									<p className='blog_title'>{article.title}</p>
								</div>
							</a>
						))}
					</div>

					<h2 className='section_subheading'>Gallery</h2>
					<div className='gallery_grid'>
						{works.map((work) => (
							<article className='gallery_item' key={work.src}>
								<a href={work.src} data-lightbox='work_group' data-title={work.title} data-alt={work.alt}>
									<div className='gallery_image'>
										<Image src={work.src} alt={work.alt} fill style={{ objectFit: 'cover' }} />
									</div>
									<div className='gallery_overlay'>
										<p className='gallery_title'>{work.title}</p>
									</div>
								</a>
							</article>
						))}
					</div>
				</div>
			</Layout>
		</>
	)
}
