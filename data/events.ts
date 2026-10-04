import type { StaticImageData } from 'next/image'

import sanfrancisco from '../public/event/sanfrancisco.webp'
import lasVegas1 from '../public/event/las_vegas_1.webp'
import event20220807 from '../public/event/event20220807.webp'
import event20210919 from '../public/event/event20210919.webp'
import event20210209 from '../public/event/event20210209.webp'
import event20200221 from '../public/event/event20200221.webp'
import event20190330 from '../public/event/event201903330.webp'
import event20190227 from '../public/event/event20190227.webp'
import event20190217 from '../public/event/event20190217.webp'
import event20181222 from '../public/event/event20181222.webp'
import event20181007 from '../public/event/event20181007.webp'
import event20180928 from '../public/event/event20180928.webp'
import event20180829 from '../public/event/event20180829.webp'
import event20180828 from '../public/event/event20180828.webp'
import event20180804 from '../public/event/event20180804.webp'
import event20180305 from '../public/event/event20180305.webp'

export type EventPhoto = {
	/** 静的 import した画像（サイズ・blur プレースホルダーが自動で付与される） */
	image: StaticImageData
	date: string
	title: string
	alt: string
}

export const events: EventPhoto[] = [
	{
		image: sanfrancisco,
		date: '2024/08/09 - 2024/08/19',
		title: 'アメリカ旅行（ラスベガス、サンフランシスコ）',
		alt: '2024/08/09 - 2024/08/19 アメリカ旅行（サンフランシスコ）',
	},
	{
		image: lasVegas1,
		date: '2024/08/09 - 2024/08/19',
		title: 'アメリカ旅行（ラスベガス、サンフランシスコ）',
		alt: '2024/08/09 - 2024/08/19 アメリカ旅行（ラスベガス）',
	},
	{
		image: event20220807,
		date: '2022/08/05 - 2022/08/07',
		title: '石川旅行 at 金沢21世紀美術館',
		alt: '2022/08/05 - 2022/08/07 石川旅行 at 金沢21世紀美術館',
	},
	{
		image: event20210919,
		date: '2021/09/19',
		title: '山梨・静岡旅行 at 紅葉台展望レストハウス',
		alt: '2021/09/19 山梨・静岡旅行 at 紅葉台展望レストハウス',
	},
	{
		image: event20210209,
		date: '2021/02/09',
		title: '初心者会',
		alt: '2021/02/09 初心者会',
	},
	{
		image: event20200221,
		date: '2020/02/21',
		title: 'スノボ旅行',
		alt: '2020/02/21 スノボ旅行',
	},
	{
		image: event20190330,
		date: '2019/03/30',
		title: 'サバゲー初参加',
		alt: '2019/03/30 サバゲー初参加',
	},
	{
		image: event20190227,
		date: '2019/02/27',
		title: '人生初スノボ',
		alt: '2019/02/27 人生初スノボ',
	},
	{
		image: event20190217,
		date: '2019/02/17',
		title: '日間賀島',
		alt: '2019/02/17 日間賀島で学会発表',
	},
	{
		image: event20181222,
		date: '2018/12/22',
		title: 'スイーツ会 at 横浜',
		alt: '2018/12/22 スイーツ会 at 横浜',
	},
	{
		image: event20181007,
		date: '2018/10/07',
		title: '東京モーターフェス at お台場',
		alt: '2018/10/07 東京モーターフェス at お台場',
	},
	{
		image: event20180928,
		date: '2018/09/28',
		title: 'JOJO展 at 国立新美術館',
		alt: '2018/09/28 JOJO展 at 国立新美術館',
	},
	{
		image: event20180829,
		date: '2018/08/29',
		title: '京都旅行、写真は城崎温泉にて撮影',
		alt: '2018/08/29 京都旅行、写真は城崎温泉にて撮影',
	},
	{
		image: event20180828,
		date: '2018/08/28',
		title: '京都旅行、写真は伏見稲荷大社にて撮影',
		alt: '2018/08/28 京都旅行、写真は伏見稲荷大社にて撮影',
	},
	{
		image: event20180804,
		date: '2018/08/04',
		title: '花火大会 at 市川',
		alt: '2018/08/04 花火大会 at 市川',
	},
	{
		image: event20180305,
		date: '2018/03/05',
		title: 'ユニバ',
		alt: '2018/03/05 ユニバ',
	},
]
