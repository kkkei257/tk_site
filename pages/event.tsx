import Layout from '../components/layout'
import Image from 'next/image'
import Head from 'next/head'
import { NextSeo } from 'next-seo';

export default function Home() {
	const site_event_title = "ケイ(@sw_ts_k)のプロフィール -EVENT-";
	const site_event_description = "ケイ(@sw_ts_k)のプロフィール：参加したイベントや旅行先の写真をまとめたページ。";
	const site_image_url = "https://swtsk.netlify.app/twitter/twitter_icon.jpeg";
	const site_event_url = "https://swtsk.netlify.app/event";
	
	// 上から順に読み込まれる。
	const events = [
		{
			src: "/event/event20220917.jpeg",
			title: "2022/09/17 TGS2022",
			alt: "2022/09/17 TGS2022"
		},
		{
			src: "/event/event20220819.jpeg",
			title: "2022/08/19 映画ソニック2 初日舞台挨拶",
			alt: "2022/08/19 映画ソニック2 初日舞台挨拶"
		},
		{
			src: "/event/event20220807.jpeg",
			title: "2022/08/05 - 2022/08/07 石川旅行 at 金沢21世紀美術館",
			alt: "2022/08/05 - 2022/08/07 石川旅行 at 金沢21世紀美術館"
		},
		{
			src: "/event/event20220628.jpeg",
			title: "2022/06/28 映画ソニック2 試写会",
			alt: "2022/06/28 映画ソニック2 試写会"
		},
		{
			src: "/event/event20220626.jpeg",
			title: "2022/06/26 ソニック公式Twitter第一回オフ会",
			alt: "2022/06/26 ソニック公式Twitter第一回オフ会"
		},
		{
			src: "/event/event20220618.jpeg",
			title: "2022/06/18 オッドタクシーフェス",
			alt: "2022/06/18 オッドタクシーフェス"
		},
		{
			src: "/event/event20220306.jpeg",
			title: "2022/03/06 大阪・淡路島旅行、写真は淡路島にて撮影",
			alt: "2022/03/06 大阪・淡路島旅行、写真は淡路島にて撮影影"
		},
		{
			src: "/event/event20220305.jpeg",
			title: "2022/03/05 USJ スーパー・ニンテンドー・ワールド",
			alt: "2022/03/05 USJ スーパー・ニンテンドー・ワールド"
		},
		{
			src: "/event/event20210919.jpeg",
			title: "2021/09/19 山梨・静岡旅行 at 紅葉台展望レストハウス",
			alt: "2021/09/19 山梨・静岡旅行 at 紅葉台展望レストハウス"
		},
		{
			src: "/event/event20210626.jpeg",
			title: "2021/06/26 at ジョイポリス",
			alt: "2021/06/26 at ジョイポリス"
		},
		{
			src: "/event/event20210625.jpeg",
			title: "2021/06/25 いつメンのみんなとソニックさんおたおめ会",
			alt: "2021/06/25 いつメンのみんなとソニックさんおたおめ会"
		},
		{
			src: "/event/event20210325.jpeg",
			title: "2021/03/25 大学院修了",
			alt: "2021/03/25 大学院修了"
		},
		{
			src: "/event/event20210301.jpeg",
			title: "2021/03/01 スノボ旅行",
			alt: "2021/03/01 スノボ旅行"
		},
		{
			src: "/event/event20210209.jpeg",
			title: "2021/02/09 SMS初心者会",
			alt: "2021/02/09 SMS初心者会"
		},
		{
			src: "/event/event20201031.jpeg",
			title: "2020/10/31 ぶんたくんとジョイポリス",
			alt: "2020/10/31 ぶんたくんとジョイポリス"
		},
		{
			src: "/event/event20200621.jpeg",
			title: "2020/06/21 ソニックゲームオフ オンラインでTSR",
			alt: "2020/06/21 ソニックゲームオフ オンラインでTSR"
		},
		{
			src: "/event/event20200221.jpeg",
			title: "2020/02/21 スノボ旅行",
			alt: "2020/02/21 スノボ旅行"
		},
		{
			src: "/event/event20200112.jpeg",
			title: "2020/01/12 ソニックゲームオフ4 at 蒲田",
			alt: "2020/01/12 ソニックゲームオフ4 at 蒲田"
		},
		{
			src: "/event/event20191006-2.jpeg",
			title: "2019/10/06 S.A.M.E.",
			alt: "2019/10/06 S.A.M.E."
		},
		{
			src: "/event/event20191006-1.jpeg",
			title: "2019/10/06 S.A.M.E.前ゲームオフ会",
			alt: "2019/10/06 S.A.M.E.前ゲームオフ会"
		},
		{
			src: "/event/event20190811.jpeg",
			title: "2019/08/11 グランピング旅行、写真はマーゴ関にて撮影",
			alt: "2019/08/11 グランピング旅行、写真はマーゴ関にて撮影"
		},
		{
			src: "/event/event20190806.jpeg",
			title: "2019/08/06 ピカチュウ大量発生チュウ",
			alt: "2019/08/06 ピカチュウ大量発生チュウ"
		},
		{
			src: "/event/event20190623.jpeg",
			title: "2019/06/23 ソニバス 祝28周年🎉",
			alt: "2019/06/23 ソニバス 祝28周年🎉"
		},
		{
			src: "/event/event20190622.jpeg",
			title: "2019/06/22 JGMF Face to Face vol.2 at 渋谷ストリームホール",
			alt: "2019/06/22 JGMF Face to Face vol.2 at 渋谷ストリームホール"
		},
		{
			src: "/event/event20190331.jpeg",
			title: "2019/03/31 セガフェス at 秋葉原",
			alt: "2019/03/31 セガフェス at 秋葉原"
		},
		{
			src: "/event/event201903330.jpeg",
			title: "2019/03/30 ソニサバ",
			alt: "2019/03/30 ソニサバ"
		},
		{
			src: "/event/event20190227.jpeg",
			title: "2019/02/27 人生初スノボ",
			alt: "2019/02/27 人生初スノボ"
		},
		{
			src: "/event/event20190217.jpeg",
			title: "2019/02/17 日間賀島",
			alt: "2019/02/17 日間賀島で学会発表"
		},
		{
			src: "/event/event20181222.jpeg",
			title: "2018/12/22 スイーツ会 at 横浜",
			alt: "2018/12/22 スイーツ会 at 横浜"
		},
		{
			src: "/event/event20181215.jpeg",
			title: "2018/12/15 ソニックゲームオフ3 at 渋谷",
			alt: "2018/12/15 ソニックゲームオフ3 at 渋谷"
		},
		{
			src: "/event/event20181007.jpeg",
			title: "2018/10/07 東京モーターフェス at お台場",
			alt: "2018/10/07 東京モーターフェス at お台場"
		},
		{
			src: "/event/event20180928.jpeg",
			title: "2018/09/28 イコアンさんとJOJO展 at 国立新美術館",
			alt: "2018/09/28 イコアンさんとJOJO展 at 国立新美術館"
		},
		{
			src: "/event/event20180829.jpeg",
			title: "2018/08/29 京都旅行、写真は城崎温泉にて撮影",
			alt: "2018/08/29 京都旅行、写真は城崎温泉にて撮影"
		},
		{
			src: "/event/event20180828.jpeg",
			title: "2018/08/28 京都旅行、写真は伏見稲荷大社にて撮影",
			alt: "2018/08/28 京都旅行、写真は伏見稲荷大社にて撮影"
		},
		{
			src: "/event/event20180804.jpeg",
			title: "2018/08/04 花火大会 at 市川",
			alt: "2018/08/04 花火大会 at 市川"
		},
		{
			src: "/event/event20180624.jpeg",
			title: "2018/06/24 ソニックゲームオフ2 at 渋谷",
			alt: "2018/06/24 ソニックゲームオフ2 at 渋谷"
		},
		{
			src: "/event/event20180623.jpeg",
			title: "2018/06/23 ソニバス ソニック祝27周年",
			alt: "2018/06/23 ソニバス ソニック祝27周年"
		},
		{
			src: "/event/event20180414.jpeg",
			title: "2018/04/14 セガフェス SONIC DJ LIVE",
			alt: "2018/04/14 セガフェス SONIC DJ LIVE"
		},
		{
			src: "/event/event20180305.jpeg",
			title: "2018/03/05 初USJ",
			alt: "2018/03/05 初USJ"
		},
		{
			src: "/event/event20180113.jpeg",
			title: "2018/1/13 JAPAN GAME MUSIC FESTIVAL II:Re at ディファ有明",
			alt: "2018/1/13 JAPAN GAME MUSIC FESTIVAL II:Re at ディファ有明"
		},
		{
			src: "/event/event20171229.jpeg",
			title: "2017/12/29 いつメンのみんなとスキー旅行",
			alt: "2017/12/29 いつメンのみんなとスキー旅行"
		},
		{
			src: "/event/event20171210.jpeg",
			title: "2017/12/10 ソニックフォースTA大会 at フーターズ新宿西口店",
			alt: "2017/12/10 ソニックフォースTA大会 at フーターズ新宿西口店"
		},
		{
			src: "/event/event20171110.jpeg",
			title: "2017/11/10 ソニックカフェ（ソニックフォース発売記念）",
			alt: "2017/11/10 ソニックカフェ（ソニックフォース発売記念）"
		},
		{
			src: "/event/event20170924.jpeg",
			title: "2017/09/24 東京ゲームショウ2017",
			alt: "2017/09/24 東京ゲームショウ2017"
		},
		{
			src: "/event/event20170624.jpeg",
			title: "2017/06/24 ソニックアニメ鑑賞会＆ゲームオフ会（人生初オフ会）",
			alt: "2017/06/24 ソニックアニメ鑑賞会＆ゲームオフ会（人生初オフ会）"
		},
		{
			src: "/event/event20170326.jpeg",
			title: "2017/03/26 セゲイチ13 at 大田区民ホール・アプリコ",
			alt: "2017/03/26 セゲイチ13 at 大田区民ホール・アプリコ"
		},
		{
			src: "/event/event20161223.jpeg",
			title: "2016/12/23 ソニックファン感謝祭",
			alt: "2016/12/23 ソニックファン感謝祭"
		},
		{
			src: "/event/event20161211.jpeg",
			title: "2016/12/11 京急セガトレイン",
			alt: "2016/12/11 京急セガトレイン"
		},
		{
			src: "/event/event201612.jpeg",
			title: "2016/12 ソニック25周年カフェ at ソラマチ",
			alt: "2016/12 ソニック25周年カフェ at ソラマチ"
		},
		{
			src: "/event/event20161027.jpeg",
			title: "2016/10/27 ファン交流会（ソニックトゥーン ファイア＆アイス発売記念） at 上野スイパラ",
			alt: "2016/10/27 ファン交流会（ソニックトゥーン ファイア＆アイス発売記念） at 上野スイパラ"
		},
		{
			src: "/event/event201610.jpeg",
			title: "2016/10 ソニック25周年カフェ at 上野スイパラ",
			alt: "2016/10 ソニック25周年カフェ at 上野スイパラ"
		},
	]
	
	return (
		<>
			<Head>
				{/* twitter card */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@sw_ts_k" />
				<meta name="twitter:title" content={site_event_title} />
				<meta name="twitter:description" content={site_event_description} />
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
				title={site_event_title}
				description={site_event_description}
				openGraph={{
					url: site_event_url,
					title: site_event_title,
					description: site_event_description,
					images: [
						{
							url: site_image_url,
						},
					],
				}}
			/>
			<Layout selected={'event'}>
				<div className="event_contents_container">
					<div className="event_menu_title">EVENT</div>
					<div className="event_gallery">
						{events.map((event) => (
							<div className="event_content content_loading" key={event.src}>
								<a href={event.src} data-lightbox="event_group" data-title={event.title} data-alt={event.alt}>
									<Image src={event.src} alt={event.alt} layout="fill" objectFit="cover" />
								</a>
							</div>
						))}
					</div>
				</div>
			</Layout>
		</>
	)
}
