export const SITE_URL = 'https://tk-profile.netlify.app'
export const SITE_NAME = 'tkのプロフィール'
export const SITE_DESCRIPTION = 'tkのプロフィール'
export const SITE_IMAGE_URL = `${SITE_URL}/blog/blog_icon.webp`
export const TWITTER_ID = '@sw_ts_k'
export const GA_ID = 'G-GTR2P2G0LD'

export const NAV_ITEMS = [
	{ href: '/about', label: 'ABOUT', key: 'about' },
	{ href: '/work', label: 'WORK', key: 'work' },
	{ href: '/event', label: 'EVENT', key: 'event' },
] as const

export type NavKey = (typeof NAV_ITEMS)[number]['key']
