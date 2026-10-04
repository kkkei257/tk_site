import Image, { StaticImageData } from 'next/image'
import React, { useCallback, useEffect, useRef } from 'react'
import styles from './lightbox.module.css'

export type LightboxItem = {
	src: StaticImageData
	alt: string
	caption?: string
}

type Props = {
	items: LightboxItem[]
	index: number | null
	onClose: () => void
	onChange: (index: number) => void
}

const SWIPE_THRESHOLD = 50

const Lightbox = ({ items, index, onClose, onChange }: Props) => {
	const closeButtonRef = useRef<HTMLButtonElement>(null)
	const touchStartX = useRef<number | null>(null)
	const isOpen = index !== null
	const count = items.length

	const showPrev = useCallback(() => {
		if (index !== null) onChange((index - 1 + count) % count)
	}, [index, count, onChange])

	const showNext = useCallback(() => {
		if (index !== null) onChange((index + 1) % count)
	}, [index, count, onChange])

	useEffect(() => {
		if (!isOpen) return

		const previousFocus = document.activeElement as HTMLElement | null
		const previousOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'
		closeButtonRef.current?.focus()

		return () => {
			document.body.style.overflow = previousOverflow
			previousFocus?.focus()
		}
	}, [isOpen])

	useEffect(() => {
		if (!isOpen) return

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose()
			if (e.key === 'ArrowLeft') showPrev()
			if (e.key === 'ArrowRight') showNext()
		}
		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [isOpen, onClose, showPrev, showNext])

	if (index === null) return null

	const current = items[index]
	// 前後の画像を先読みして、送り操作時の表示待ちをなくす
	const neighbors = count > 1 ? [items[(index - 1 + count) % count], items[(index + 1) % count]] : []

	const onTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.touches[0].clientX
	}

	const onTouchEnd = (e: React.TouchEvent) => {
		if (touchStartX.current === null) return
		const deltaX = e.changedTouches[0].clientX - touchStartX.current
		touchStartX.current = null
		if (deltaX > SWIPE_THRESHOLD) showPrev()
		if (deltaX < -SWIPE_THRESHOLD) showNext()
	}

	return (
		<div
			className={styles.overlay}
			role='dialog'
			aria-modal='true'
			aria-label={current.alt}
			onClick={onClose}
			onTouchStart={onTouchStart}
			onTouchEnd={onTouchEnd}
		>
			<div className={styles.toolbar} onClick={(e) => e.stopPropagation()}>
				<span className={styles.counter}>{index + 1} / {count}</span>
				<button ref={closeButtonRef} type='button' className={styles.iconButton} onClick={onClose} aria-label='閉じる'>
					<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' aria-hidden='true'>
						<path d='M18 6L6 18M6 6l12 12' />
					</svg>
				</button>
			</div>

			<figure className={styles.figure} onClick={(e) => e.stopPropagation()}>
				<Image
					key={current.src.src}
					src={current.src}
					alt={current.alt}
					sizes='100vw'
					quality={85}
					placeholder='blur'
					className={styles.image}
					loading='eager'
				/>
				{current.caption && <figcaption className={styles.caption}>{current.caption}</figcaption>}
			</figure>

			{count > 1 && (
				<>
					<button
						type='button'
						className={`${styles.iconButton} ${styles.navButton} ${styles.prev}`}
						onClick={(e) => { e.stopPropagation(); showPrev() }}
						aria-label='前の画像'
					>
						<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
							<path d='M15 18l-6-6 6-6' />
						</svg>
					</button>
					<button
						type='button'
						className={`${styles.iconButton} ${styles.navButton} ${styles.next}`}
						onClick={(e) => { e.stopPropagation(); showNext() }}
						aria-label='次の画像'
					>
						<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
							<path d='M9 18l6-6-6-6' />
						</svg>
					</button>
				</>
			)}

			<div className={styles.preload} aria-hidden='true'>
				{neighbors.map((item) => (
					<Image key={item.src.src} src={item.src} alt='' sizes='100vw' quality={85} loading='eager' />
				))}
			</div>
		</div>
	)
}

export default Lightbox
