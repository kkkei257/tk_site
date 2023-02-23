import Layout from '../components/layout'
import Head from 'next/head'
import { NextSeo } from 'next-seo';

export default function Home() {
	const site_privacy_policy_title = "tkのプロフィール -PRIVACY POLICY-";
	const site_privacy_policy_description = "tkのプロフィール：プライバシーポリシーページ。";
	const site_image_url = "https://tk-profile.netlify.app/blog/blog_icon.jpng";
	const site_privacy_policy_url = "https://tk-profile.netlify.app/privacy_policy";
	
	return (
		<>
			<Head>
				{/* twitter card */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@sw_ts_k" />
				<meta name="twitter:title" content={site_privacy_policy_title} />
				<meta name="twitter:description" content={site_privacy_policy_description} />
				<meta name="twitter:image" content={site_image_url} />
				
				{/* GAの設定 */}
				<script async src={`https://www.googletagmanager.com/gtag/js?id=G-GTR2P2G0LD`}></script>
 				<script dangerouslySetInnerHTML={{
 					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						
						gtag('config', 'G-GTR2P2G0LD');
 					`}}
 				/>
			</Head>
			<NextSeo
				title={site_privacy_policy_title}
				description={site_privacy_policy_description}
				openGraph={{
					url: site_privacy_policy_url,
					title: site_privacy_policy_title,
					description: site_privacy_policy_description,
					images: [
						{
							url: site_image_url,
						},
					],
				}}
			/>
			<Layout>
				<div className="privacy_policy_contents_container">
					<div className="privacy_policy_menu_title">PRIVACY POLICY</div>
					<div className="privacy_policy_contents">
						<div className="privacy_policy_contents_title">
							①個人情報の利用目的
						</div>
						<div className="privacy_policy_contents_text">
							加瀬のプロフィールページ(以下当サイト)では、利用者様の同意のもと、以下に掲げる利用目的を達成するために必要な範囲内で、
							利用者様のお名前、メールアドレスその他の個人情報を取得することがあります。
						</div>
						<div className="privacy_policy_contents_text">
							当サイトでは、適正且つ公正な手段を用いて個人情報を取得し、利用者様の同意なく下記利用目的の範囲を超えて利用することはございません。
						</div>
						<div className="privacy_policy_contents_text">
							<ul>
								<li>お問い合わせに対応するため</li>
							</ul>
						</div>
					</div>
					<div className="privacy_policy_contents">
						<div className="privacy_policy_contents_title">
							②個人情報の第三者への開示
						</div>
						<div className="privacy_policy_contents_text">
							当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
						</div>
						<div className="privacy_policy_contents_text">
							<ul>
								<li>本人のご了解がある場合</li>
								<li>法令等への協力のため、開示が必要となる場合</li>
							</ul>
						</div>
					</div>
					<div className="privacy_policy_contents">
						<div className="privacy_policy_contents_title">
							③個人情報の開示、訂正、追加、削除、利用停止
						</div>
						<div className="privacy_policy_contents_text">
							ご本人からの個人データの開示、訂正、追加、削除、利用停止のご希望の場合には、ご本人であることを確認させていただいた上、速やかに対応させていただきます。
						</div>
					</div>
					<div className="privacy_policy_contents">
						<div className="privacy_policy_contents_title">
							④アクセス解析ツールについて
						</div>
						<div className="privacy_policy_contents_text">
							当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
						</div>
						<div className="privacy_policy_contents_text">
							Googleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、
							個人を特定するものではありません。
						</div>
						<div className="privacy_policy_contents_text">
							この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
							この規約に関して、詳しくは こちら または こちら をクリックしてください。
						</div>
					</div>
					<div className="privacy_policy_contents">
						<div className="privacy_policy_contents_title">
							⑤当サイトへのコメントについて
						</div>
						<div className="privacy_policy_contents_text">
							当サイトでは、スパム・荒らしへの対応として、コメントの際に使用されたIPアドレスを記録しています。
						</div>
						<div className="privacy_policy_contents_text">
							これはブログの標準機能としてサポートされている機能で、スパム・荒らしへの対応以外にこのIPアドレスを使用することはありません。
							また、メールアドレスとURLの入力に関しては、任意となっております。
						</div>
						<div className="privacy_policy_contents_text">
							全てのコメントは管理人が事前にその内容を確認し、承認した上での対応となりますことをあらかじめご了承下さい。
							加えて、次の各号に掲げる内容を含むコメントは管理人の裁量によって承認せず、削除する事があります。
						</div>
						<div className="privacy_policy_contents_text">
							<ul>
								<li>特定の自然人または法人を誹謗し、中傷するもの。</li>
								<li>極度にわいせつな内容を含むもの。</li>
								<li>禁制品の取引に関するものや、他者を害する行為の依頼など、法律によって禁止されている物品、行為の依頼や斡旋などに関するもの。</li>
								<li>その他、公序良俗に反し、または管理人によって承認すべきでないと認められるもの。</li>
							</ul>
						</div>
					</div>
					<div className="privacy_policy_contents">
						<div className="privacy_policy_contents_title">
							⑥免責事項
						</div>
						<div className="privacy_policy_contents_text">
							当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
						</div>
						<div className="privacy_policy_contents_text">
							当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
						</div>
						<div className="privacy_policy_contents_text">
							当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
						</div>
					</div>
					<div className="privacy_policy_contents">
						<div className="privacy_policy_contents_title">
							⑦著作権について
						</div>
						<div className="privacy_policy_contents_text">
							当サイトに掲載されている情報についての著作権は、放棄しておりません。
						</div>
						<div className="privacy_policy_contents_text">
							当サイトのコンテンツからの引用に関しては、「引用元の明示」によって、無償で引用いただけます。ただし、当サイト上のすべての文章と画像・イラストなどの無断転載は、一切禁止します。
						</div>
					</div>
					<div className="privacy_policy_contents">
						<div className="privacy_policy_contents_title">
							⑧プライバシーポリシーの変更について
						</div>
						<div className="privacy_policy_contents_text">
							当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。
						</div>
						<div className="privacy_policy_contents_text">
							修正された最新のプライバシーポリシーは常に本ページにて開示されます。
						</div>
					</div>
					<div className="privacy_policy_contents">
						<div className="enactment_date">制定日：2023年02月14日</div>
					</div>
				</div>
			</Layout>
		</>
	)
}
