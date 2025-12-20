import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'

const Layout = (props: any) => {
	const [visible, setVisible] = useState('hidden')
	const [isFirst, setFirstLoadState] = useState('first');

	const toggleHamburger = () => {
		setFirstLoadState(isFirst !== '' ? '' : '');
		setVisible(visible === 'visible' ? 'hidden' : 'visible');
	}

	const navItems = [
		{ href: './about', label: 'ABOUT', key: 'about' },
		{ href: './work', label: 'WORK', key: 'work' },
		{ href: './event', label: 'EVENT', key: 'event' },
	];

	return (
		<>
			<header>
				<div className="header_inner">
					<Link href="./" className="logo_link">
						<div className="top_menu_icon">
							<Image src="/blog/blog_icon.webp" alt="blogのアイコン" fill style={{ objectFit: 'cover' }} />
						</div>
						<span className="top_menu_text">tk-profile</span>
					</Link>
					<nav className="desktop_nav">
						{navItems.map((item) => (
							<Link
								key={item.key}
								href={item.href}
								className={`nav_link ${props.selected === item.key ? 'nav_link_active' : ''}`}
							>
								{item.label}
							</Link>
						))}
					</nav>
				</div>
			</header>

			<button
				className="menuButton"
				onClick={toggleHamburger}
				aria-label={visible === 'hidden' ? 'メニューを開く' : 'メニューを閉じる'}
			>
				<span className={`hamburger_icon ${visible === 'visible' ? 'open' : ''}`}>
					<span></span>
					<span></span>
					<span></span>
				</span>
			</button>

			<div className="container">
				{props.children}
			</div>

			<nav className="menuBar">
				{navItems.map((item) => (
					<Link
						key={item.key}
						href={item.href}
						className={props.selected === item.key ? 'menuItemsSelected' : 'menuItems'}
					>
						<Image
							src={`/images/${item.key}${props.selected === item.key ? '_selected' : ''}.webp`}
							alt={`${item.label}のアイコン`}
							fill
							style={{ objectFit: 'cover' }}
						/>
					</Link>
				))}
			</nav>

			<button className="topScrollButton" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="トップへ戻る">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M18 15l-6-6-6 6"/>
				</svg>
			</button>

			<div onClick={toggleHamburger} className={`${visible} ${isFirst} hamburgerMenu`}>
				<nav className="hamburgerMenu_inner">
					<Link href="./" className="hamburgerMenuItems">TOP</Link>
					{navItems.map((item) => (
						<Link key={item.key} href={item.href} className="hamburgerMenuItems">
							{item.label}
						</Link>
					))}
				</nav>
			</div>

			<footer>
				<div className="footer_inner">
					<Link href="./" className="footer_logo">tk-profile</Link>
					<p className="footer_copy">&copy; 2024 tk-profile. All rights reserved.</p>
				</div>
			</footer>
		</>
	)
}

export default Layout
