import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import Seo from '../components/seo'
import WorkCard from '../components/work_card'
import { works } from '../data/works'
import common from '../styles/common.module.css'
import styles from '../styles/index.module.css'

import heroImage from '../public/event/event20220807.webp'
import aboutImage from '../public/blog/blog_icon.webp'
import workImage from '../public/work/kuchikomi_search_1.webp'
import eventImage from '../public/event/sanfrancisco.webp'

const features = [
	{
		href: '/about',
		title: 'ABOUT',
		description: '自己紹介。趣味などを書いています。',
		image: aboutImage,
		alt: 'blogのアイコン',
	},
	{
		href: '/work',
		title: 'WORK',
		description: '開発実績およびブログ記事を載せたページ。',
		image: workImage,
		alt: 'クチコミキーワード検索',
	},
	{
		href: '/event',
		title: 'EVENT',
		description: '参加したイベントや旅行先の写真をまとめたページ。',
		image: eventImage,
		alt: '2024/08/09 - 2024/08/19 アメリカ旅行（サンフランシスコ）',
	},
]

const ArrowIcon = () => (
	<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
		<path d='M5 12h14M12 5l7 7-7 7' />
	</svg>
)

export default function Home() {
	return (
		<>
			<Seo title='tkのプロフィール -TOP-' description='tkのプロフィール：TOPページ' path='/' />
			<Layout>
				<section className={styles.hero}>
					<div className={styles.heroImage}>
						<Image
							src={heroImage}
							alt='金沢21世紀美術館'
							fill
							sizes='(min-width: 1120px) 1056px, 100vw'
							placeholder='blur'
							priority
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<div className={styles.heroText}>
						<p className={styles.heroEyebrow}>Web Developer &amp; Engineer</p>
						<h1 className={styles.heroTitle}>tk-profile</h1>
						<p className={styles.heroLead}>
							HR領域のWeb系企業でWeb開発エンジニアをしています。
							<br />
							これまでの開発実績や参加したイベントの写真をまとめています。
						</p>
						<div className={styles.heroActions}>
							<Link href='/work' className={styles.buttonPrimary}>
								開発実績を見る
								<ArrowIcon />
							</Link>
							<Link href='/about' className={styles.buttonSecondary}>プロフィール</Link>
						</div>
					</div>
				</section>

				<section className={common.section}>
					<ul className={styles.features}>
						{features.map((feature) => (
							<li key={feature.title}>
								<Link href={feature.href} className={styles.feature}>
									<div className={styles.featureImage}>
										<Image
											src={feature.image}
											alt={feature.alt}
											fill
											sizes='(min-width: 960px) 360px, (min-width: 640px) 33vw, 100vw'
											placeholder='blur'
											style={{ objectFit: 'cover' }}
										/>
									</div>
									<div className={styles.featureBody}>
										<h2 className={styles.featureTitle}>
											{feature.title}
											<ArrowIcon />
										</h2>
										<p className={styles.featureDescription}>{feature.description}</p>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</section>

				<section className={common.section}>
					<div className={common.sectionHeader}>
						<h2 className={common.sectionTitle}>
							<small>Recent Works</small>
							最近の開発実績
						</h2>
						<Link href='/work' className={common.sectionLink}>
							すべて見る
							<ArrowIcon />
						</Link>
					</div>
					<ul className={common.grid}>
						{works.slice(0, 3).map((work) => (
							<li key={work.slug}>
								<WorkCard work={work} />
							</li>
						))}
					</ul>
				</section>
			</Layout>
		</>
	)
}
