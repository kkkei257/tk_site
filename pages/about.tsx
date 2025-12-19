import Layout from '../components/layout'
import Image from 'next/image'
import Head from 'next/head'
import { NextSeo } from 'next-seo';

export default function Home() {
	const site_about_title = 'tkのプロフィール -ABOUT-';
	const site_about_description = '加瀬貴久のプロフィール：自己紹介。趣味などを書いています。';
	const site_image_url = 'https://tk-profile.netlify.app/blog/blog_icon.webp';
	const site_about_url = 'https://tk-profile.netlify.app/about';

	const socialLinks = [
		{ href: 'https://www.wantedly.com/id/takahisa_kase', icon: '/sns/Wantedly_Mark_LightBG.webp', iconDark: '/sns/Wantedly_Mark_DarkBG.webp', alt: 'Wantedly', hasDarkMode: true },
		{ href: 'https://www.linkedin.com/in/takahisa-kase-2b1302175/', icon: '/sns/LI-In-Bug.webp', alt: 'LinkedIn' },
		{ href: 'https://qiita.com/kkkei257', icon: '/sns/qiitan_w_trans.webp', alt: 'Qiita' },
		{ href: 'https://github.com/kkkei257', icon: '/sns/github-mark.webp', iconDark: '/sns/github-mark-white.webp', alt: 'GitHub', hasDarkMode: true },
		{ href: 'https://uec.repo.nii.ac.jp/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=9936&item_no=1&page_id=13&block_id=21', icon: '/images/paper.webp', alt: '論文' },
	];

	const skills = [
		{ category: '好きな飲み物', items: 'カフェラテ、ホットチョコレート' },
		{ category: '趣味', items: 'ブログ / イラスト / ギター / 旅行 など' },
		{ category: '経験したことのある技術・言語', items: 'PHP / Vue.js / Next.js / Elasticsearch / Terraform / Python など' },
	];

	return (
		<>
			<Head>
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:site' content='@sw_ts_k' />
				<meta name='twitter:title' content={site_about_title} />
				<meta name='twitter:description' content={site_about_description} />
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
					<header className='page_header'>
						<h1 className='page_title'>ABOUT</h1>
						<p className='page_subtitle'>自己紹介</p>
					</header>

					<section className='about_profile_section'>
						<div className='about_profile_card'>
							<div className='about_profile_avatar'>
								<Image src='/blog/blog_icon.webp' alt='プロフィール画像' width={120} height={120} />
							</div>
							<div className='about_profile_info'>
								<p className='about_profile_text'>
									2021年4月からHR領域のWeb系企業でWeb開発エンジニアをしています。
								</p>
								<p className='about_profile_text'>
									大学院ではSNS関連の研究（デマの拡散問題に関するテーマ）をしていました。
									仕事では主に自社Webサービスのバックエンドの開発に従事しています。
									本サイトは勉強を兼ねてNext.jsで作成しました。
								</p>
								<p className='about_profile_text'>
									<strong>好きなこと：</strong>カフェ巡り / 映画館で映画を観る / 気ままに出歩いたり写真を撮ったり
								</p>
							</div>
						</div>
					</section>

					<section className='about_social_section'>
						<h2 className='section_title'>Links</h2>
						<div className='social_links'>
							{socialLinks.map((link) => (
								<a
									key={link.alt}
									href={link.href}
									target='_blank'
									rel='noopener noreferrer'
									className='social_link_item'
								>
									{link.hasDarkMode ? (
										<>
											<span className='social_icon light'>
												<Image src={link.icon} alt={link.alt} fill style={{ objectFit: 'contain' }} />
											</span>
											<span className='social_icon dark'>
												<Image src={link.iconDark!} alt={link.alt} fill style={{ objectFit: 'contain' }} />
											</span>
										</>
									) : (
										<span className='social_icon'>
											<Image src={link.icon} alt={link.alt} fill style={{ objectFit: 'contain' }} />
										</span>
									)}
									<span className='social_label'>{link.alt}</span>
								</a>
							))}
						</div>
					</section>

					<section className='about_skills_section'>
						<h2 className='section_title'>Profile</h2>
						<div className='skills_list'>
							{skills.map((skill) => (
								<div key={skill.category} className='skill_item'>
									<h3 className='skill_category'>{skill.category}</h3>
									<p className='skill_items'>{skill.items}</p>
								</div>
							))}
						</div>
					</section>
				</div>
			</Layout>
		</>
	)
}
