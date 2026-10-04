import Image from 'next/image'
import Layout from '../../components/layout'
import PageHeader from '../../components/page_header'
import Seo from '../../components/seo'
import WorkCard from '../../components/work_card'
import { articles } from '../../data/articles'
import { works } from '../../data/works'
import common from '../../styles/common.module.css'
import styles from '../../styles/work.module.css'

export default function WorkList() {
	return (
		<>
			<Seo
				title='tkのプロフィール -WORK-'
				description='tkのプロフィール：プログラミングによる制作物を載せたページ。'
				path='/work'
			/>
			<Layout selected='work'>
				<PageHeader eyebrow='開発実績・ブログ記事' title='WORK' description='これまでに携わった開発実績と、執筆したブログ記事をまとめています。' />

				<section className={common.section}>
					<div className={common.sectionHeader}>
						<h2 className={common.sectionTitle}>
							<small>Projects</small>
							開発実績
						</h2>
					</div>
					<ul className={common.grid}>
						{works.map((work, i) => (
							<li key={work.slug}>
								<WorkCard work={work} priority={i < 3} />
							</li>
						))}
					</ul>
				</section>

				<section className={common.section}>
					<div className={common.sectionHeader}>
						<h2 className={common.sectionTitle}>
							<small>Blog Articles</small>
							ブログ記事
						</h2>
					</div>
					<ul className={styles.articles}>
						{articles.map((article) => (
							<li key={article.url}>
								<a href={article.url} target='_blank' rel='noopener noreferrer' className={styles.article}>
									<div className={styles.articleThumbnail}>
										<Image
											src={article.thumbnail}
											alt=''
											fill
											sizes='(min-width: 640px) 200px, 120px'
											style={{ objectFit: 'cover' }}
										/>
									</div>
									<div className={styles.articleBody}>
										<p className={styles.articleHost}>{new URL(article.url).hostname}</p>
										<p className={styles.articleTitle}>{article.title}</p>
									</div>
									<svg className={styles.articleArrow} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
										<path d='M7 17L17 7M7 7h10v10' />
									</svg>
								</a>
							</li>
						))}
					</ul>
				</section>
			</Layout>
		</>
	)
}
