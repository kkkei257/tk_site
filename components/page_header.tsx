import React from 'react'
import styles from './page_header.module.css'

type Props = {
	eyebrow?: string
	title: string
	description?: React.ReactNode
}

const PageHeader = ({ eyebrow, title, description }: Props) => (
	<header className={styles.pageHeader}>
		{eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
		<h1 className={styles.title}>{title}</h1>
		{description && <p className={styles.description}>{description}</p>}
	</header>
)

export default PageHeader
