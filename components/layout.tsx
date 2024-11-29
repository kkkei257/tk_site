import Image from 'next/image'
import React, {useState} from 'react'

const Layout = (props: any) => {
	// visibleの値を変えることでメニューを表示・非表示させる
	const [visible, setVisible] = useState('hidden')
	
	// 最初にページを読み込んだ際に一瞬ハンバーガーメニューが表示されてしまうのを防ぐためのフラグ。
	const [isFirst, setFirstLoadState] = useState('first');
	
	// 右上のメニューをクリックで実行される
	const toggleHamburger = () => {
		// クリックしたらフラグの内容を空文字にする（= .firstのcssが適用されなくなる）。
		setFirstLoadState(isFirst !== '' ? '' : '');
		setVisible(visible === 'visible' ? 'hidden' : 'visible');
	}
	
	return (
		<>
			<header>
				<div className="top_menu_icon">
					<a href="./">
						<Image src="/blog/blog_icon.webp" alt="blogのアイコン" layout="fill" objectFit="cover" />
					</a>
				</div>
				<div className="top_menu_text">sw_ts_k</div>
			</header>
			{ visible == 'hidden' && 
				<div className="menuButton">
					<Image onClick={toggleHamburger} src="/images/menu.webp" alt="menuアイコン" layout="fill" objectFit="cover" />
				</div>
			}
			{ visible == 'visible' &&
				<div className="menuButton">
					<Image onClick={toggleHamburger} src="/images/close.webp" alt="closeアイコン" layout="fill" objectFit="cover" />
				</div>
			}
			<div className="container">
				{props.children}
			</div>
			<div className="menuBar">
				{ props.selected == 'about' && 
					<div className="menuItemsSelected">
						<a href="./about">
							<Image src="/images/about_selected.webp" alt="aboutの選択中アイコン" layout="fill" objectFit="cover" />
						</a>
					</div>
				}
				{ props.selected != 'about' && 
					<div className="menuItems">
						<a href="./about">
							<Image src="/images/about.webp" alt="aboutのアイコン" layout="fill" objectFit="cover" />
						</a>
					</div>
				}
				
				{ props.selected == 'work' && 
					<div className="menuItemsSelected">
						<a href="./work">
							<Image src="/images/work_selected.webp" alt="workの選択中アイコン" layout="fill" objectFit="cover" />
						</a>
					</div>
				}
				{ props.selected != 'work' && 
					<div className="menuItems">
						<a href="./work">
							<Image src="/images/work.webp" alt="workのアイコン" layout="fill" objectFit="cover" />
						</a>
					</div>
				}
				
				{ props.selected == 'event' && 
					<div className="menuItemsSelected">
						<a href="./event">
							<Image src="/images/event_selected.webp" alt="eventの選択中アイコン" layout="fill" objectFit="cover" />
						</a>
					</div>
				}
				{ props.selected != 'event' && 
					<div className="menuItems">
						<a href="./event">
							<Image src="/images/event.webp" alt="eventのアイコン" layout="fill" objectFit="cover" />
						</a>
					</div>
				}
				
			</div>
			<div className="topScrollButton">
				<a href="#">
					<Image src="/images/top.webp" alt="topへ戻るアイコン" layout="fill" objectFit="cover" />
				</a>
			</div>
			<div onClick={toggleHamburger} className={`${visible} ${isFirst} hamburgerMenu`}>
				<div className="hamburgerMenuItems">
					<a href="./">TOP</a>
				</div>
				<div className="hamburgerMenuItems">
					<a href="./about">ABOUT</a>
				</div>
				<div className="hamburgerMenuItems">
					<a href="./work">WORK</a>
				</div>
				<div className="hamburgerMenuItems">
					<a href="./event">EVENT</a>
				</div>
			</div>
			<footer>
				<a href="./">tk-profile</a>
			</footer>
		</>
	)
}

export default Layout
