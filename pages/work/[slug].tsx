import type { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Layout from '../../components/layout'
import Lightbox, { LightboxItem } from '../../components/lightbox'
import Seo from '../../components/seo'
import { findWork, works } from '../../data/works'
import styles from '../../styles/work_detail.module.css'

type Props = {
	slug: string
}

const MAIN_IMAGE_MAX_HEIGHT = 560

const hasText = (value?: string): value is string => !!value && value.trim() !== ''
const hasItems = <T,>(value?: T[]): value is T[] => !!value && value.length > 0

const BulletSection = ({ title, items }: { title: string; items?: string[] }) => {
	const filled = items?.filter(hasText)
	if (!hasItems(filled)) return null

	return (
		<section className={styles.section}>
			<h2 className={styles.sectionTitle}>{title}</h2>
			<ul className={styles.bullets}>
				{filled.map((item, i) => (
					<li key={i}>{item}</li>
				))}
			</ul>
		</section>
	)
}

export default function WorkDetail({ slug }: Props) {
	const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
	const work = findWork(slug)!
	const index = works.indexOf(work)
	const prevWork = works[index - 1]
	const nextWork = works[index + 1]

	const label = work.organization ? `${work.title} (${work.organization})` : work.title
	const images: LightboxItem[] = [
		{ src: work.thumbnail, alt: label },
		...(work.images ?? []).map((image) => ({ src: image.src, alt: image.caption ?? label, caption: image.caption })),
	]
	const techStack = work.techStack?.filter(hasText) ?? []
	const links = work.links?.filter((link) => hasText(link.url)) ?? []
	const hasContent =
		hasText(work.summary) ||
		hasText(work.background) ||
		[work.details, work.highlights, work.results].some((items) => hasItems(items?.filter(hasText)))

	return (
		<>
			<Seo
				title={`tkのプロフィール -WORK- ${work.title}`}
				description={hasText(work.summary) ? work.summary : `tkのプロフィール：開発実績「${label}」の詳細。`}
				path={`/work/${work.slug}`}
			/>
			<Layout selected='work'>
				<article className={styles.article}>
					<Link href='/work' className={styles.backLink}>
						<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
							<path d='M19 12H5M12 19l-7-7 7-7' />
						</svg>
						WORK 一覧
					</Link>

					<header className={styles.header}>
						<p className={styles.meta}>
							<span>{work.period}</span>
							{work.organization && <span className={styles.organization}>{work.organization}</span>}
						</p>
						<h1 className={styles.title}>{work.title}</h1>
						{hasText(work.summary) && <p className={styles.summary}>{work.summary}</p>}
					</header>

					<button type='button' className={styles.mainImage} onClick={() => setLightboxIndex(0)} aria-label='画像を拡大表示'>
						<Image
							src={work.thumbnail}
							alt={label}
							sizes='(min-width: 1120px) 1056px, 100vw'
							placeholder='blur'
							priority
							// 縦長の画像でも高さが MAIN_IMAGE_MAX_HEIGHT を超えないよう、縦横比から表示幅を決める
							style={{ width: `min(100%, ${Math.round((MAIN_IMAGE_MAX_HEIGHT * work.thumbnail.width) / work.thumbnail.height)}px)` }}
						/>
					</button>

					<div className={styles.content}>
						<div className={styles.body}>
							{hasText(work.background) && (
								<section className={styles.section}>
									<h2 className={styles.sectionTitle}>背景・課題</h2>
									<p className={styles.text}>{work.background}</p>
								</section>
							)}
							<BulletSection title='取り組んだこと' items={work.details} />
							<BulletSection title='工夫した点' items={work.highlights} />
							<BulletSection title='成果・学び' items={work.results} />

							{images.length > 1 && (
								<section className={styles.section}>
									<h2 className={styles.sectionTitle}>画像</h2>
									<ul className={styles.gallery}>
										{images.slice(1).map((image, i) => (
											<li key={image.src.src}>
												<button type='button' className={styles.galleryItem} onClick={() => setLightboxIndex(i + 1)}>
													<span className={styles.galleryImage}>
														<Image
															src={image.src}
															alt={image.alt}
															fill
															sizes='(min-width: 960px) 240px, 50vw'
															placeholder='blur'
															style={{ objectFit: 'cover', objectPosition: 'top' }}
														/>
													</span>
													{image.caption && <span className={styles.galleryCaption}>{image.caption}</span>}
												</button>
											</li>
										))}
									</ul>
								</section>
							)}

							{!hasContent && <p className={styles.empty}>詳細は準備中です。</p>}
						</div>

						<aside className={styles.sidebar}>
							<dl className={styles.facts}>
								<div>
									<dt>期間</dt>
									<dd>{work.period}</dd>
								</div>
								{work.organization && (
									<div>
										<dt>プロジェクト</dt>
										<dd>{work.organization}</dd>
									</div>
								)}
								{hasText(work.role) && (
									<div>
										<dt>担当</dt>
										<dd>{work.role}</dd>
									</div>
								)}
								{hasText(work.team) && (
									<div>
										<dt>体制</dt>
										<dd>{work.team}</dd>
									</div>
								)}
								{techStack.length > 0 && (
									<div>
										<dt>使用技術</dt>
										<dd>
											<ul className={styles.tags}>
												{techStack.map((tech) => (
													<li key={tech}>{tech}</li>
												))}
											</ul>
										</dd>
									</div>
								)}
								{links.length > 0 && (
									<div>
										<dt>関連リンク</dt>
										<dd>
											<ul className={styles.links}>
												{links.map((link) => (
													<li key={link.url}>
														<a href={link.url} target='_blank' rel='noopener noreferrer'>
															{hasText(link.label) ? link.label : link.url}
														</a>
													</li>
												))}
											</ul>
										</dd>
									</div>
								)}
							</dl>
						</aside>
					</div>

					<nav className={styles.pager} aria-label='他の開発実績'>
						{prevWork ? (
							<Link href={`/work/${prevWork.slug}`} className={styles.pagerLink}>
								<span className={styles.pagerLabel}>← 前の実績</span>
								<span className={styles.pagerTitle}>{prevWork.title}</span>
							</Link>
						) : <span />}
						{nextWork && (
							<Link href={`/work/${nextWork.slug}`} className={`${styles.pagerLink} ${styles.pagerNext}`}>
								<span className={styles.pagerLabel}>次の実績 →</span>
								<span className={styles.pagerTitle}>{nextWork.title}</span>
							</Link>
						)}
					</nav>
				</article>

				<Lightbox items={images} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onChange={setLightboxIndex} />
			</Layout>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = () => ({
	paths: works.map((work) => ({ params: { slug: work.slug } })),
	fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = ({ params }) => ({
	props: { slug: params!.slug as string },
})
