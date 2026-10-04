import type { StaticImageData } from 'next/image'

import kuchikomiShare1 from '../public/work/kuchikomi_share_1.webp'
import taskhubOutput1 from '../public/work/taskhub_output_1.webp'
import comparison1 from '../public/work/comparison_1.webp'
import kuchikomiSearch1 from '../public/work/kuchikomi_search_1.webp'
import work4_1 from '../public/work/work4-1.webp'
import work3_1 from '../public/work/work3-1.webp'
import work2_1 from '../public/work/work2-1.webp'
import work1_1 from '../public/work/work1-1.webp'

export type WorkImage = {
	src: StaticImageData
	caption?: string
}

export type WorkLink = {
	label: string
	url: string
}

/**
 * 開発実績 1 件分のデータ。
 *
 * 必須なのは slug / period / title / thumbnail のみで、それ以外は任意項目。
 * 空文字・空配列・未定義の項目は詳細ページに表示されない。
 * 文字列の項目は改行（\n）をそのまま改行として表示する。
 */
export type Work = {
	/** URL に使う識別子（/work/{slug}）。英小文字とハイフンで、他と重複しないようにする */
	slug: string
	/** 時期（例: '2025/12'、'2024/04 - 2025/03'） */
	period: string
	title: string
	/** 会社・サービス名、または '個人開発'（一覧カードと詳細ページにラベルとして表示される） */
	organization?: string
	/** 一覧カードと詳細ページのメイン画像 */
	thumbnail: StaticImageData
	/** 詳細ページに追加で表示する画像 */
	images?: WorkImage[]

	/** 概要：一覧カードにも 2 行まで表示される短い説明 */
	summary?: string
	/** 担当・役割（例: 'バックエンド / 設計〜リリース'） */
	role?: string
	/** チーム体制（例: 'エンジニア 3 名、デザイナー 1 名'） */
	team?: string
	/** 使用技術 */
	techStack?: string[]
	/** 背景・課題 */
	background?: string
	/** 取り組んだこと（箇条書き） */
	details?: string[]
	/** 工夫した点（箇条書き） */
	highlights?: string[]
	/** 成果・学び（箇条書き） */
	results?: string[]
	/** 関連リンク（プレスリリース、ブログ記事、リポジトリなど） */
	links?: WorkLink[]
}

export const works: Work[] = [
	{
		slug: 'kuchikomi-share',
		period: '2025/12',
		title: 'クチコミシェア機能',
		organization: 'OpenWork',
		thumbnail: kuchikomiShare1,
		summary:
			'クチコミを全体にシェアできる機能を開発しました。「シェア用URLを作成」ボタンを押すことで共有用のURLを作成できます（※クチコミ閲覧権限を有するユーザーのみ作成可能）。\n\n' +
			'通常、クチコミは閲覧権限を持つユーザーしか閲覧できないですが、シェア用URLからアクセスした場合は未ログインユーザーも含めて誰でもそのクチコミの内容を見ることができます。これにより、気になったクチコミをシェアして他の人にも読んでもらったり、内容についてSNS上などで共感し合うことが可能となりました。',
		role: '主担当（要件定義〜開発）',
		team: 'エンジニア 2 名、デザイナー 1 名',
		techStack: [],
		background: '',
		details: [
			'この機能の開発の主担当となり、要件定義から担当しました。',
			'機能の実現のためにはどのような設計が適切か、どのようなスケジュールで進めるか、作業分担はどのようにするかなどを最初に自分が決め、もう一名のエンジニアおよびデザイナーと協力・分担して開発を進めました。',
			'プランナーからの要望をヒアリングしつつ、エンジニアやアナリスト、デザイナーと連携して開発を進めました。',
		],
		highlights: [],
		results: [
			'複数人で開発する場合のコミュニケーションの取り方やシステム設計の検討方法などの知見を深めることができました。',
		],
		links: [],
	},
	{
		slug: 'taskhub-ai-answer',
		period: '2025/04',
		title: '生成AI回答画面の実装',
		organization: 'Taskhub',
		thumbnail: taskhubOutput1,
		summary: '自社サービス「Taskhub」アプリケーション内にて、アプリを実行した時の実行結果画面の開発を担当しました。',
		role: '実行結果画面の開発（フロントエンド・デザイン実装）',
		team: '',
		techStack: [],
		background: '',
		details: [
			'生成AIのストリーミング出力や選択したモデル名の表示、利用履歴からアクセスした場合の履歴表示、デザイン調整などを担当しました。',
		],
		highlights: [
			'ワークフローアプリを実行した場合に出力を複数表示させたり、途中でモデルを変更した場合にモデル名の表示を変える、通常アプリの場合は追加実行を行えるようにするなど考慮事項が多く大変でしたが、詰まった時に周りのメンバーと適宜相談しながら作業を進め期日までに無事間に合わせることができました。',
		],
		results: [
			'開発を通し、あまり経験がなかったフロント実装およびデザイン実装の知見を増やすことができました。',
		],
		links: [],
	},
	{
		slug: 'comparison',
		period: '2025/02',
		title: '社員評価・年収比較コンテンツ',
		organization: 'OpenWork',
		thumbnail: comparison1,
		summary:
			'選択した2社の情報を比較する「競合比較」ページに、両社の社員評価スコア、ワーク・ライフ・バランス、年収を比較する文章を新たに追加しました。',
		role: '施策検討〜リリースまで全工程',
		team: '',
		techStack: [],
		background: '',
		details: [
			'施策検討から仕様および実装方針の決定、開発、テスト、リリースまで全て担当しました。',
			'ユーザーが求める情報を文章として記載し、企業分析を行う上での利便性の向上を図っています。',
		],
		highlights: [
			'自動テストの実装容易性を意識しながらクラス設計しました。',
		],
		results: [
			'自社コンテンツの課題を踏まえて競合調査をしながら施策内容を考える、という工程は経験が浅く0→1を考えることの難しさを実感しました。施策検討において意識すべき項目など、多くのことを学ぶことができました。',
		],
		links: [],
	},
	{
		slug: 'kuchikomi-search',
		period: '2023/03',
		title: 'クチコミキーワード検索',
		organization: 'OpenWork',
		thumbnail: kuchikomiSearch1,
		summary: 'プロジェクトの開発リーダーと協力し、各企業に投稿されたクチコミをキーワードで検索できる機能を開発しました。',
		role: '機能開発リーダー',
		team: '',
		techStack: [],
		background: '',
		details: [
			'機能開発リーダーとして作業を進めました。',
			'開発リーダーに検索まわりの実装を依頼し、私は検索フォームの設置をはじめ、権限まわりやログへのカラム追加等の実装を担当しました。',
		],
		highlights: [],
		results: [
			'大きい機能の開発が初めてだったため不慣れなことも多かったですが、ドメイン知識をはじめ、他プロジェクトや他職種との連携の難しさなど多くのことを学ぶことができました。',
		],
		links: [
			{
				label: 'Elasticsearchの検索ロジックを変更してクチコミキーワード検索速度を改善した（OpenWork Tech Blog）',
				url: 'https://techblog.openwork.co.jp/entry/improving-keyword-search-speed',
			},
		],
	},
	{
		slug: 'sns-platform',
		period: '2020/09',
		title: '実験用に作成したSNSプラットフォーム',
		organization: '個人開発',
		thumbnail: work4_1,
		summary: '',
		role: '',
		team: '',
		techStack: ['JavaScript', 'Firebase'],
		background: '',
		details: [],
		highlights: [],
		results: [],
		links: [],
	},
	{
		slug: 'image-calendar',
		period: '2019/10',
		title: '画像付カレンダーアプリ',
		organization: '個人開発',
		thumbnail: work3_1,
		summary: '',
		role: '',
		team: '',
		techStack: ['Python', 'Kivy'],
		background: '',
		details: [],
		highlights: [],
		results: [],
		links: [],
	},
	{
		slug: 'type-checker',
		period: '2019/09',
		title: 'タイプ相性チェッカーアプリ',
		organization: '個人開発',
		thumbnail: work2_1,
		summary: '',
		role: '',
		team: '',
		techStack: ['Python', 'Kivy'],
		background: '',
		details: [],
		highlights: [],
		results: [],
		links: [],
	},
	{
		slug: 'music-player',
		period: '2019/09',
		title: '音楽プレーヤーアプリ',
		organization: '個人開発',
		thumbnail: work1_1,
		summary: 'Python及びGUIライブラリの1つであるKivyを用いて音楽プレーヤーを制作しました。',
		role: '',
		team: '',
		techStack: ['Python', 'Kivy'],
		background:
			'普段音楽アプリを使用していて、アルバムアートの表示を妨げることなく歌詞の表示を行えるようなアプリが欲しいと以前から思っていたのですが、その機能を有するアプリを見つけることができなかったので自分で作りました。',
		details: [
			'読み込んだ歌詞を画像の上に表示しスクロールできるようにする機能と、スクロールバーによる音楽再生位置の制御や再生リストの表示など音楽再生関連の機能の実装に苦労しました。しかし、当初実現したいと考えていた機能を形にすることができました。',
		],
		highlights: [
			'歌詞をアルバムアート上に表示できるようにしました。',
			'アルバムアートも楽しめるように、歌詞の表示/非表示を切り替えられるようにしました。',
		],
		results: [
			'今回使用したKivyというライブラリはこの時初めて使用し、日本語のリファレンスも少なく理解しながらの開発でしたが、最終的に記述方法について習得することができました。',
		],
		links: [],
	},
]

export const findWork = (slug: string) => works.find((work) => work.slug === slug)
