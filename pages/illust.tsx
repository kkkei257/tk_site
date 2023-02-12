import Layout from '../components/layout'
import Image from 'next/image'
import Head from 'next/head'
import { NextSeo } from 'next-seo';

export default function Home() {
	const site_illust_title = "ケイ(@sw_ts_k)のプロフィール -ILLUSTRATE-";
	const site_illust_description = "ケイ(@sw_ts_k)のプロフィール：Twitterに載せているイラストをまとめたページ。";
	const site_image_url = "https://swtsk.netlify.app/twitter/twitter_icon.jpeg";
	const site_illust_url = "https://swtsk.netlify.app/illust";
	
	// 上から順に読み込まれる。
	// 現在の仕様：音楽付きのものはTwitterに投稿したものを表示する（外部リンク指定の有無で判定）。gifとその他画像はサイト内で表示する（拡張子で判定）。
	const illusts = [
		{
			src: "/illust/pikachu20221225.JPG",
			title: "🎄✨",
			alt: "🎄✨",
			link: "https://twitter.com/sw_ts_k/status/1606305806667771904?s=20&t=JJKUp3zMw70njIQUdFYwhg"
		},
		{
			src: "/illust/illust20221121.PNG",
			title: "祝30周年🎉テイルスおめでとう！！",
			alt: "祝30周年🎉テイルスおめでとう！！"
		},
		{
			src: "/illust/halloween20221031.JPG",
			title: "怖いけどソニックを探しに来た",
			alt: "怖いけどソニックを探しに来た",
			link: "https://twitter.com/sw_ts_k/status/1587092342309519361?s=20&t=JJKUp3zMw70njIQUdFYwhg"
		},
		{
			src: "/illust/illust20220925.jpeg",
			title: "おこな表情が描きたかった",
			alt: "おこな表情が描きたかった"
		},
		{
			src: "/illust/illust20220912.png",
			title: "📷✨",
			alt: "📷✨"
		},
		{
			src: "/illust/illust20220810.png",
			title: "🛹",
			alt: "🛹"
		},
		{
			src: "/illust/illust20220727.png",
			title: "🍇",
			alt: "🍇"
		},
		{
			src: "/illust/illust20220706.png",
			title: "田中",
			alt: "田中"
		},
		{
			src: "/illust/illust20220623.gif",
			title: "お誕生日おめでとうソニック！！👑✨",
			alt: "お誕生日おめでとうソニック！！👑✨"
		},
		{
			src: "/illust/illust20220528.png",
			title: "ゲーム布教中",
			alt: "ゲーム布教中"
		},
		{
			src: "/illust/illust20220519.gif",
			title: "ﾃｲ✊",
			alt: "ﾃｲ✊"
		},
		{
			src: "/illust/illust20220429.png",
			title: "仲良く飲む世界線があっても良い🦨🦤",
			alt: "仲良く飲む世界線があっても良い🦨🦤"
		},
		{
			src: "/illust/tanaka_20220322.gif",
			title: "超レア引いてちょっと驚く田中",
			alt: "超レア引いてちょっと驚く田中"
		},
		{
			src: "/illust/sonic_20220212.gif",
			title: "🏂",
			alt: "🏂"
		},
		{
			src: "/illust/illust20211224.gif",
			title: "点いてるところが見たい🎄🔌",
			alt: "点いてるところが見たい🎄🔌"
		},
		{
			src: "/illust/illust20211209.gif",
			title: "\\\\🥊",
			alt: "\\\\🥊"
		},
		{
			src: "/illust/illust20211121.gif",
			title: "テイルス29thおめでとう🎉🎉",
			alt: "テイルス29thおめでとう🎉🎉"
		},
		{
			src: "/illust/illust20211117.gif",
			title: "🐀♪",
			alt: "🐀♪"
		},
		{
			src: "/illust/illust20211031.gif",
			title: "わﾞっ;;",
			alt: "わﾞっ;;"
		},
		{
			src: "/illust/illust20211014.gif",
			title: "動かすやり方色々模索してる👐",
			alt: "動かすやり方色々模索してる👐"
		},
		{
			src: "/illust/illust20210901.gif",
			title: "Live2D初めて触ってみた",
			alt: "Live2D初めて触ってみた"
		},
		{
			src: "/illust/illust20210801.png",
			title: "しっぽが描きたかった",
			alt: "しっぽが描きたかった"
		},
		{
			src: "/illust/illust20210623.jpeg",
			title: "ソニックお誕生日そして30th本当におめでとう！！！🎉🙏<br />ソニックたちに出会えて本当に良かった！！これからもずっと大好き！！！",
			alt: "ソニックお誕生日そして30th本当におめでとう！！！🎉🙏<br />ソニックたちに出会えて本当に良かった！！これからもずっと大好き！！！"
		},
		{
			src: "/illust/illust20210520.png",
			title: "ソニックチャンネルに投稿したおたおめイラスト",
			alt: "ソニックチャンネルに投稿したおたおめイラスト"
		},
		{
			src: "/illust/illust20210418.jpeg",
			title: "ダッシュ🐀💨！",
			alt: "ダッシュ🐀💨！"
		},
		{
			src: "/illust/illust20210320.jpeg",
			title: "#ジト目が描きたかった",
			alt: "#ジト目が描きたかった"
		},
		{
			src: "/illust/illust20210202.jpeg",
			title: "ツインテールの日でした😇",
			alt: "ツインテールの日でした😇"
		},
		{
			src: "/illust/illust20210104.jpeg",
			title: "コンボを切りたくない時によくやる",
			alt: "コンボを切りたくない時によくやる"
		},
		{
			src: "/illust/illust20210101.jpeg",
			title: "明けましておめでとうございます！昨年もお世話になりました！本年もどうぞ宜しくお願いします🙇‍♀️<br />ソニック30周年を迎えるのがとても楽しみです( ˘ω˘ )",
			alt: "明けましておめでとうございます！昨年もお世話になりました！本年もどうぞ宜しくお願いします🙇‍♀️<br />ソニック30周年を迎えるのがとても楽しみです( ˘ω˘ )"
		},
		{
			src: "/illust/illust20201205.jpeg",
			title: "ワルな顔可愛だ､､🥰",
			alt: "ワルな顔可愛だ､､🥰"
		},
		{
			src: "/illust/illust20201121.png",
			title: "テイルスくんハピバ🎉👏！！キミをお祝いできるこの日が毎年楽しみで大好きです🙏🏻🙏🏻",
			alt: "テイルスくんハピバ🎉👏！！キミをお祝いできるこの日が毎年楽しみで大好きです🙏🏻🙏🏻"
		},
		{
			src: "/illust/illust20200906.png",
			title: "(謎2コマです)",
			alt: "(謎2コマです)"
		},
		{
			src: "/illust/illust20200709.jpeg",
			title: "ラビフット反抗的なとこ可愛いよね🤗",
			alt: "ラビフット反抗的なとこ可愛いよね🤗"
		},
		{
			src: "/illust/illust20200703.png",
			title: "サイズがちょっと大きい、",
			alt: "サイズがちょっと大きい、"
		},
		{
			src: "/illust/illust20200623.jpeg",
			title: "カッコいいところも自由気ままなところも前向きなところも全部大好きです！！ソニックさんお誕生日おめでとう！！！",
			alt: "カッコいいところも自由気ままなところも前向きなところも全部大好きです！！ソニックさんお誕生日おめでとう！！！"
		},
		{
			src: "/illust/illust20200520.png",
			title: "ソニックチャンネルに投稿したおたおめイラスト",
			alt: "ソニックチャンネルに投稿したおたおめイラスト"
		},
		{
			src: "/illust/illust20200503.png",
			title: "️(レグ人間じゃないけど)人描くの難しい、そしてまた帽子を被らせないという😇",
			alt: "(レグ人間じゃないけど)人描くの難しい、そしてまた帽子を被らせないという😇"
		},
		{
			src: "/illust/illust20200427.jpeg",
			title: "🛍",
			alt: "🛍"
		},
		{
			src: "/illust/illust20200412.jpeg",
			title: "ｼｬﾄﾞｻﾝ",
			alt: "ｼｬﾄﾞｻﾝ"
		},
		{
			src: "/illust/illust20200402.jpeg",
			title: "片手で卵割れる人凄いよねっていうことを言いたかっただけ",
			alt: "片手で卵割れる人凄いよねっていうことを言いたかっただけ"
		},
		{
			src: "/illust/illust20200216.jpeg",
			title: "帽子を描くのは諦めてしまった､､🙃",
			alt: "帽子を描くのは諦めてしまった､､🙃"
		},
		{
			src: "/illust/illust20200202.jpeg",
			title: "楽しそうに喋ってる様子を眺めてたいです😇",
			alt: "楽しそうに喋ってる様子を眺めてたいです😇"
		},
		{
			src: "/illust/illust20200101.jpeg",
			title: "明けましておめでとうございます！！<br />お正月はお餅食べたい😇",
			alt: "明けましておめでとうございます！！<br />お正月はお餅食べたい😇"
		},
		{
			src: "/illust/illust20191121.jpeg",
			title: "テイルスくんおたおめ！！ケーキ全部食べて良いよ🎂😋",
			alt: "テイルスくんおたおめ！！ケーキ全部食べて良いよ🎂😋"
		},
		{
			src: "/illust/illust20191101.png",
			title: "ハロウィン出動後<br />収穫あり🍭",
			alt: "ハロウィン出動後<br />収穫あり🍭"
		},
		{
			src: "/illust/illust20191031.jpeg",
			title: "ハロウィン出動前🎃",
			alt: "ハロウィン出動前🎃"
		},
		{
			src: "/illust/illust20191017.jpeg",
			title: "ギター描き慣れてないから細かいところは酌して､､🙏🏻",
			alt: "ギター描き慣れてないから細かいところは酌して､､🙏🏻"
		},
		{
			src: "/illust/illust20190902.jpeg",
			title: "ナッコ「な、なんでそんなにカードの枚数少ないんだよ！！？」",
			alt: "ナッコ「な、なんでそんなにカードの枚数少ないんだよ！！？」"
		},
		{
			src: "/illust/illust20190817.jpeg",
			title: "雨上がり🌂",
			alt: "雨上がり🌂"
		},
		{
			src: "/illust/illust20190706.jpeg",
			title: "急がなきゃ！",
			alt: "急がなきゃ！"
		},
		{
			src: "/illust/illust20190623.jpeg",
			title: "どんな時でも前を向いて走る姿が大好きです！！！いつも元気をくれてありがとう…これからも応援してます！！！",
			alt: "どんな時でも前を向いて走る姿が大好きです！！！いつも元気をくれてありがとう…これからも応援してます！！！"
		},
		{
			src: "/illust/illust20190616.jpeg",
			title: "いかにもお嬢様って感じの性格で良きです",
			alt: "いかにもお嬢様って感じの性格で良きです"
		},
		{
			src: "/illust/illust20190505.jpeg",
			title: "あっち行こうよ！",
			alt: "あっち行こうよ！"
		},
		{
			src: "/illust/illust20190401.jpeg",
			title: "セゲいちで描いてたテイ",
			alt: "セゲいちで描いてたテイ"
		},
		{
			src: "/illust/illust20190316.jpeg",
			title: "ピカ⚡",
			alt: "ピカ⚡"
		},{
			src: "/illust/illust20190306.jpeg",
			title: "ちょっと散歩🍃",
			alt: "ちょっと散歩🍃"
		},
		{
			src: "/illust/illust20190209.jpeg",
			title: "フーパのいししっていう笑いかた可愛いんですよね…😇",
			alt: "フーパのいししっていう笑いかた可愛いんですよね…😇"
		},
		{
			src: "/illust/illust20190117.jpeg",
			title: "パソコン作業で疲れちゃった的な",
			alt: "パソコン作業で疲れちゃった的な"
		},
		{
			src: "/illust/illust20190101.jpeg",
			title: "明けましておめでとうございます！！今年もどうぞよろしくお願いしますm(__)m！！",
			alt: "明けましておめでとうございます！！今年もどうぞよろしくお願いしますm(__)m！！"
		},
		{
			src: "/illust/illust20181121.jpeg",
			title: "テイルスくんおたおめ！！！",
			alt: "テイルスくんおたおめ！！！"
		},
		{
			src: "/illust/illust20181113.jpeg",
			title: "一周年おめ！！",
			alt: "一周年おめ！！"
		},
		{
			src: "/illust/illust20181029.jpeg",
			title: "がおー″",
			alt: "がおー″"
		},
		{
			src: "/illust/illust20181008.jpeg",
			title: "エメラルド探し🎃",
			alt: "エメラルド探し🎃"
		},
		{
			src: "/illust/illust20180917.jpeg",
			title: "こんな感じのシール作ろうと思ってました(全然間に合いませんでした)",
			alt: "こんな感じのシール作ろうと思ってました(全然間に合いませんでした)"
		},
		{
			src: "/illust/illust20180902.jpeg",
			title: "浴衣ていっ",
			alt: "浴衣ていっ"
		},
		{
			src: "/illust/illust20180818.jpeg",
			title: "二人一緒に描いたこと無かった気がする",
			alt: "二人一緒に描いたこと無かった気がする"
		},
		{
			src: "/illust/illust20180724.jpeg",
			title: "オラーｯ",
			alt: "オラーｯ"
		},
		{
			src: "/illust/illust20180623.jpeg",
			title: "27周年！！ソニック誕生日おめでとう！！！これからもずっとずっと応援させてください！！！",
			alt: "27周年！！ソニック誕生日おめでとう！！！これからもずっとずっと応援させてください！！！"
		},
		{
			src: "/illust/illust20180621.jpeg",
			title: "ﾆｯ /／",
			alt: "ﾆｯ /／"
		},
		{
			src: "/illust/illust20180612.jpeg",
			title: "_(┐「ε:)۶",
			alt: "_(┐「ε:)۶"
		},
		{
			src: "/illust/illust20180513-2.jpeg",
			title: "2枚目はちょい表情チェンジ☺️",
			alt: "2枚目はちょい表情チェンジ☺️"
		},
		{
			src: "/illust/illust20180513.jpeg",
			title: "2枚目はちょい表情チェンジ☺️",
			alt: "2枚目はちょい表情チェンジ☺️"
		},
		{
			src: "/illust/illust20180430.jpeg",
			title: "ルーズリーフに何となく描いた落書きをそれっぽく描き直した",
			alt: "ルーズリーフに何となく描いた落書きをそれっぽく描き直した"
		},
		{
			src: "/illust/illust20180424.jpeg",
			title: "フォロワーさん200人ありがとうございます…🙏🙏",
			alt: "フォロワーさん200人ありがとうございます…🙏🙏"
		},
		{
			src: "/illust/illust20180407.jpeg",
			title: "◯",
			alt: "◯"
		},
		{
			src: "/illust/illust20180321.jpeg",
			title: "なこっ",
			alt: "なこっ"
		},
		{
			src: "/illust/illust20180310.jpeg",
			title: "描いたあと背景変えたりエフェクトかけて遊んでた",
			alt: "描いたあと背景変えたりエフェクトかけて遊んでた"
		},
		{
			src: "/illust/illust20180218.jpeg",
			title: "ちょっとした休憩時間に",
			alt: "ちょっとした休憩時間に"
		},
		{
			src: "/illust/illust20180212.jpeg",
			title: "驚く顔が描きたかっただけ^",
			alt: "驚く顔が描きたかっただけ^"
		},
		{
			src: "/illust/illust20180207.jpeg",
			title: "ピカｯ(イラストたくさん観てたら描きたくなっちゃったやつ)",
			alt: "ピカｯ(イラストたくさん観てたら描きたくなっちゃったやつ)"
		},
		{
			src: "/illust/illust20180202.jpeg",
			title: "2/2!!",
			alt: "2/2!!"
		},
		{
			src: "/illust/illust20171231.jpeg",
			title: "描き納めテイルスくん😇",
			alt: "描き納めテイルスくん😇"
		},
		{
			src: "/illust/illust20171121.jpeg",
			title: "テイルス誕生日おめでとう！！！25周年！！！🎉🎉",
			alt: "テイルス誕生日おめでとう！！！25周年！！！🎉🎉"
		},
	]
	
	// アイコン表示の制御処理。ファイル名を渡すと拡張子に応じたクラス名を返す。
	const createIconClassName = (illust: any) => {
		if (illust.src.match(/gif/)) {
			// gifファイルには再生アイコンを表示する。
			return "playGif";
		} else if(illust.link && illust.link !== '') {
			// 外部リンク指定が存在する場合は音楽再生アイコンを表示する。
			return "playMusic";
		} else {
			// その他のファイルにはクラス名を付与しない。
			return "noIcon";
		}
	}
	
	// アイコン表示の制御処理。音楽付きのものは音楽再生アイコンを表示、gif画像は再生アイコンを表示、画像はアイコンを表示しない。
	const createIconName = (illust: any) => {
		if (illust.src.match(/gif/)) {
			// gifファイルには再生アイコンを表示する。
			return "/images/playGif.png";
		} else if(illust.link && illust.link !== '') {
			// 外部リンク指定が存在する場合は音楽再生アイコンを表示する。
			return "/images/playMusic.png";
		} else {
			// その他のファイルにはクラス名を付与しない。
			return "";
		}
	}
	
	// 外部リンクの有無による遷移先の制御
	const createHref = (illust: any) => {
		if (illust.link && illust.link !== '') {
			// 外部リンク指定が存在する場合はそのリンクに遷移させる。
			return illust.link;
		} else {
			// 外部リンク指定が存在しない場合はlightboxによりサイト内で画像を表示する。
			return illust.src;
		}
	} 
	
	// 外部リンクが存在する場合はlightboxを無効化する。
	const determineToEnableLightbox = (illust: any) => {
		if (illust.link && illust.link !== '') {
			// 外部リンク指定が存在する場合はlightboxを無効化する。
			return "";
		} else {
			// 外部リンク指定が存在しない場合はlightboxを有効化する。
			return "illust_group";
		}
	}
	
	return (
		<>
			<Head>
				{/* twitter card */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@sw_ts_k" />
				<meta name="twitter:title" content={site_illust_title} />
				<meta name="twitter:description" content={site_illust_description} />
				<meta name="twitter:image" content={site_image_url} />
				
				{/* GAの設定 */}
				<script async src={`https://www.googletagmanager.com/gtag/js?id=G-437E8GND3S`}></script>
 				<script dangerouslySetInnerHTML={{
 					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						
						gtag('config', 'G-437E8GND3S');
 					`}}
 				/>
			</Head>
			<NextSeo
				title={site_illust_title}
				description={site_illust_description}
				openGraph={{
					url: site_illust_url,
					title: site_illust_title,
					description: site_illust_description,
					images: [
						{
							url: site_image_url,
						},
					],
				}}
			/>
			<Layout selected={'illust'}>
				<div className="illust_contents_container">
					<div className="illust_menu_title">ILLUSTRATE</div>
					<div className="illust_gallery">
						{illusts.map((illust) => (
							<div className="illust_content content_loading" key={illust.src}>
								<a href={createHref(illust)} data-lightbox={determineToEnableLightbox(illust)} data-title={illust.title} data-alt={illust.alt}>
									<Image src={illust.src} alt={illust.alt} layout="fill" objectFit="cover" />
								</a>
								<div className={createIconClassName(illust)}>
									<Image src={createIconName(illust)} alt="再生可能なことを示すアイコン" layout="fill" objectFit="cover" />
								</div>
							</div>
						))}
					</div>
				</div>
			</Layout>
		</>
	)
}
