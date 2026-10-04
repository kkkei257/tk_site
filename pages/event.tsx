import Image from 'next/image'
import { useState } from 'react'
import Layout from '../components/layout'
import Lightbox, { LightboxItem } from '../components/lightbox'
import PageHeader from '../components/page_header'
import Seo from '../components/seo'
import { events } from '../data/events'
import styles from '../styles/event.module.css'

// ファーストビューに入る枚数。これらは遅延読み込みせず優先的に取得する
const PRIORITY_COUNT = 3

const lightboxItems: LightboxItem[] = events.map((event) => ({
	src: event.image,
	alt: event.alt,
	caption: `${event.date}　${event.title}`,
}))

export default function Event() {
	const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

	return (
		<>
			<Seo
				title='tkのプロフィール -EVENT-'
				description='tkのプロフィール：参加したイベントや旅行先の写真をまとめたページ。'
				path='/event'
			/>
			<Layout selected='event'>
				<PageHeader eyebrow='イベント・旅行' title='EVENT' description='参加したイベントや旅行先の写真をまとめています。' />

				<ul className={styles.grid}>
					{events.map((event, i) => (
						<li key={event.image.src}>
							<button type='button' className={styles.item} onClick={() => setLightboxIndex(i)} aria-label={`${event.alt}を拡大表示`}>
								<span className={styles.image}>
									<Image
										src={event.image}
										alt={event.alt}
										fill
										sizes='(min-width: 1120px) 352px, (min-width: 640px) 50vw, 100vw'
										placeholder='blur'
										priority={i < PRIORITY_COUNT}
										style={{ objectFit: 'cover' }}
									/>
								</span>
								<span className={styles.caption}>
									<span className={styles.date}>{event.date}</span>
									<span className={styles.title}>{event.title}</span>
								</span>
							</button>
						</li>
					))}
				</ul>

				<Lightbox items={lightboxItems} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onChange={setLightboxIndex} />
			</Layout>
		</>
	)
}
