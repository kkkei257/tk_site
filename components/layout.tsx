import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { NAV_ITEMS, NavKey } from '../data/site'
import styles from './layout.module.css'

type Props = {
	selected?: NavKey
	children: React.ReactNode
}

const Layout = ({ selected, children }: Props) => {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 400)
		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<>
			<header className={styles.header}>
				<div className={styles.headerInner}>
					<Link href='/' className={styles.logo}>
						<span className={styles.logoIcon}>
							<Image src='/blog/blog_icon.webp' alt='' width={32} height={32} priority />
						</span>
						<span className={styles.logoText}>tk-profile</span>
					</Link>
					<nav className={styles.nav} aria-label='グローバルナビゲーション'>
						{NAV_ITEMS.map((item) => (
							<Link
								key={item.key}
								href={item.href}
								className={`${styles.navLink} ${selected === item.key ? styles.navLinkActive : ''}`}
								aria-current={selected === item.key ? 'page' : undefined}
							>
								{item.label}
							</Link>
						))}
					</nav>
				</div>
			</header>

			<main className={styles.main}>{children}</main>

			<footer className={styles.footer}>
				<div className={styles.footerInner}>
					<Link href='/' className={styles.footerLogo}>tk-profile</Link>
					<nav className={styles.footerNav} aria-label='フッターナビゲーション'>
						{NAV_ITEMS.map((item) => (
							<Link key={item.key} href={item.href}>{item.label}</Link>
						))}
						<Link href='/privacy_policy'>PRIVACY POLICY</Link>
					</nav>
					<p className={styles.copyright}>&copy; 2024 tk-profile. All rights reserved.</p>
				</div>
			</footer>

			<button
				type='button'
				className={`${styles.scrollTop} ${isScrolled ? styles.scrollTopVisible : ''}`}
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				aria-label='トップへ戻る'
				tabIndex={isScrolled ? 0 : -1}
			>
				<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
					<path d='M18 15l-6-6-6 6' />
				</svg>
			</button>
		</>
	)
}

export default Layout
