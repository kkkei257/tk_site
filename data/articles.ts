export type Article = {
	url: string
	thumbnail: string
	title: string
}

export const articles: Article[] = [
	{
		url: 'https://techblog.openwork.co.jp/entry/hackathon-2025',
		thumbnail: 'https://cdn-ak.f.st-hatena.com/images/fotolife/o/openwork_engineer/20251222/20251222112242.jpg',
		title: '生成AI時代のハッカソンで戦う上でやるべきだと感じたこと',
	},
	{
		url: 'https://qiita.com/kkkei257/items/6fd2292fbb278dbf7eed',
		thumbnail: 'https://cdn.qiita.com/assets/favicons/public/apple-touch-icon-ec5ba42a24ae923f16825592efdc356f.png',
		title: 'Amazon OpenSearch Serviceで遭遇したエラーと解決策の逆引き集',
	},
	{
		url: 'https://techblog.openwork.co.jp/entry/improving-keyword-search-speed',
		thumbnail: 'https://cdn-ak.f.st-hatena.com/images/fotolife/o/openwork_engineer/20240109/20240109130701.png',
		title: 'Elasticsearchの検索ロジックを変更してクチコミキーワード検索速度を改善した',
	},
	{
		url: 'https://qiita.com/kkkei257/items/62bef12a54ef67e4cef6',
		thumbnail: 'https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-user-contents.imgix.net%2Fhttps%253A%252F%252Fcdn.qiita.com%252Fassets%252Fpublic%252Farticle-ogp-background-afbab5eb44e0b055cce1258705637a91.png%3Fixlib%3Drb-4.0.0%26w%3D1200%26blend64%3DaHR0cHM6Ly9xaWl0YS11c2VyLXByb2ZpbGUtaW1hZ2VzLmltZ2l4Lm5ldC9odHRwcyUzQSUyRiUyRnMzLWFwLW5vcnRoZWFzdC0xLmFtYXpvbmF3cy5jb20lMkZxaWl0YS1pbWFnZS1zdG9yZSUyRjAlMkY1MTU2MTIlMkYzMmE0ZDQ5ODliYjgwNGEzOGZkNTU4ODBiZTQ0OThkOGI3MjQwZjQ4JTJGeF9sYXJnZS5wbmclM0YxNjIyNjQyODQxP2l4bGliPXJiLTQuMC4wJmFyPTElM0ExJmZpdD1jcm9wJm1hc2s9ZWxsaXBzZSZiZz1GRkZGRkYmZm09cG5nMzImcz1hYzBkYzc4N2MwMzk0ZGFhOTAxZWZmODJiMWJmMDJlNg%26blend-x%3D120%26blend-y%3D467%26blend-w%3D82%26blend-h%3D82%26blend-mode%3Dnormal%26s%3D193ec62443e2ae7323e6aefe2bcbe813?ixlib=rb-4.0.0&w=1200&fm=jpg&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTk2MCZoPTMyNCZ0eHQ9R2l0aHViJTIwQWN0aW9ucyVFMyU4MiU5MiVFNCVCRCVCRiVFMyU4MSVBMyVFMyU4MSVBNiVFMyU4MyVBQyVFMyU4MyU5MyVFMyU4MyVBNSVFMyU4MyVCQyVFOSU5NiU4QiVFNSVBNyU4QiVFNiU5NyVBNSVFNiU5OSU4MiVFMyU4MSU4QSVFMyU4MiU4OCVFMyU4MSVCMyVFNSVBRSU4QyVFNCVCQSU4NiVFNiU5NyVBNSVFNiU5OSU4MiVFMyU4MiU5Mk5vdGlvbiVFMyU4MSVBRSVFMyU4MiVCRiVFMyU4MiVCOSVFMyU4MiVBRiVFMyU4MyU4MSVFMyU4MiVCMSVFMyU4MyU4MyVFMyU4MyU4OCVFMyU4MSVBQiVFOCVBOCU5OCVFOSU4QyVCMiVFMyU4MSU5OSVFMyU4MiU4QiZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZ0eHQtY29sb3I9JTIzMUUyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTU2JnR4dC1wYWQ9MCZzPWU4YzVlNTNmYzY0ODQxNGUzNDJiMWU5NzFmYTE4NzMx&mark-x=120&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTgzOCZoPTU4JnR4dD0lNDBra2tlaTI1NyZ0eHQtY29sb3I9JTIzMUUyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTM2JnR4dC1wYWQ9MCZzPTRmYTBjMDkzNGMzMWFlZDdjYmM1OWNkYmE2ZmNlNWM2&blend-x=242&blend-y=480&blend-w=838&blend-h=46&blend-fit=crop&blend-crop=left%2Cbottom&blend-mode=normal&s=b5279bcaca2babff7d10eabbc8d8f36a',
		title: 'Github Actionsを使ってレビュー開始日時および完了日時をNotionのタスクチケットに記録する',
	},
]
