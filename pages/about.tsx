import Image from 'next/image'
import Layout from '../components/layout'
import PageHeader from '../components/page_header'
import Seo from '../components/seo'
import common from '../styles/common.module.css'
import styles from '../styles/about.module.css'

const socialLinks = [
	{ href: 'https://www.wantedly.com/id/takahisa_kase', icon: '/sns/Wantedly_Mark_LightBG.webp', iconDark: '/sns/Wantedly_Mark_DarkBG.webp', label: 'Wantedly' },
	{ href: 'https://www.linkedin.com/in/%E8%B2%B4%E4%B9%85-%E5%8A%A0%E7%80%AC-2b1302175/', icon: '/sns/LI-In-Bug.webp', label: 'LinkedIn' },
	{ href: 'https://qiita.com/kkkei257', icon: '/sns/qiitan_w_trans.webp', label: 'Qiita' },
	{ href: 'https://github.com/kkkei257', icon: '/sns/github-mark.webp', iconDark: '/sns/github-mark-white.webp', label: 'GitHub' },
	{ href: 'https://uec.repo.nii.ac.jp/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=9936&item_no=1&page_id=13&block_id=21', icon: '/images/paper.webp', label: '論文' },
]

const profiles = [
	{ label: '好きな飲み物', value: 'カフェラテ、ホットチョコレート' },
	{ label: '趣味', value: 'ブログ / イラスト / ギター / 旅行 など' },
	{ label: '好きなこと', value: 'カフェ巡り / 映画館で映画を観る / 気ままに出歩いたり写真を撮ったり' },
	{ label: '経験したことのある技術・言語', value: 'PHP / Vue.js / Next.js / Elasticsearch / Terraform / Python など' },
]

export default function About() {
	return (
		<>
			<Seo
				title='tkのプロフィール -ABOUT-'
				description='加瀬貴久のプロフィール：自己紹介。趣味などを書いています。'
				path='/about'
			/>
			<Layout selected='about'>
				<PageHeader eyebrow='自己紹介' title='ABOUT' description='経歴や趣味などを書いています。' />

				<section className={styles.profile}>
					<div className={styles.avatar}>
						<Image src='/blog/blog_icon.webp' alt='プロフィール画像' width={128} height={128} priority />
					</div>
					<div className={styles.profileText}>
						<p>2021年4月からHR領域のWeb系企業でWeb開発エンジニアをしています。</p>
						<p>
							大学院ではSNS関連の研究（デマの拡散問題に関するテーマ）をしていました。
							仕事では主に自社Webサービスのバックエンドの開発に従事しています。
							本サイトは勉強を兼ねてNext.jsで作成しました。
						</p>
					</div>
				</section>

				<section className={common.section}>
					<div className={common.sectionHeader}>
						<h2 className={common.sectionTitle}>
							<small>Profile</small>
							プロフィール
						</h2>
					</div>
					<dl className={styles.profileList}>
						{profiles.map((profile) => (
							<div key={profile.label} className={styles.profileRow}>
								<dt>{profile.label}</dt>
								<dd>{profile.value}</dd>
							</div>
						))}
					</dl>
				</section>

				<section className={common.section}>
					<div className={common.sectionHeader}>
						<h2 className={common.sectionTitle}>
							<small>Links</small>
							リンク
						</h2>
					</div>
					<ul className={styles.links}>
						{socialLinks.map((link) => (
							<li key={link.label}>
								<a href={link.href} target='_blank' rel='noopener noreferrer' className={styles.link}>
									<span className={`${styles.linkIcon} ${link.iconDark ? styles.lightOnly : ''}`}>
										<Image src={link.icon} alt='' fill sizes='24px' style={{ objectFit: 'contain' }} />
									</span>
									{link.iconDark && (
										<span className={`${styles.linkIcon} ${styles.darkOnly}`}>
											<Image src={link.iconDark} alt='' fill sizes='24px' style={{ objectFit: 'contain' }} />
										</span>
									)}
									<span className={styles.linkLabel}>{link.label}</span>
									<svg className={styles.linkArrow} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
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
