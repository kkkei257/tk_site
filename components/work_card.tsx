import Image from 'next/image'
import Link from 'next/link'
import type { Work } from '../data/works'
import styles from './work_card.module.css'

type Props = {
	work: Work
	priority?: boolean
}

const WorkCard = ({ work, priority = false }: Props) => (
	<Link href={`/work/${work.slug}`} className={styles.card}>
		<div className={styles.thumbnail}>
			<Image
				src={work.thumbnail}
				alt={work.title}
				fill
				sizes='(min-width: 1120px) 352px, (min-width: 640px) 50vw, 100vw'
				placeholder='blur'
				priority={priority}
				style={{ objectFit: 'cover', objectPosition: 'top' }}
			/>
		</div>
		<div className={styles.body}>
			<p className={styles.meta}>
				<span>{work.period}</span>
				{work.organization && <span className={styles.organization}>{work.organization}</span>}
			</p>
			<h3 className={styles.title}>{work.title}</h3>
			{work.summary && <p className={styles.summary}>{work.summary}</p>}
			{work.techStack && work.techStack.length > 0 && (
				<ul className={styles.tags}>
					{work.techStack.map((tech) => (
						<li key={tech} className={styles.tag}>{tech}</li>
					))}
				</ul>
			)}
			<span className={styles.more}>
				詳細を見る
				<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
					<path d='M5 12h14M12 5l7 7-7 7' />
				</svg>
			</span>
		</div>
	</Link>
)

export default WorkCard
