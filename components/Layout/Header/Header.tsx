import useCart from 'hooks/useCart'
import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/logo.svg'
import LogoMobile from 'public/logo_mobile.svg'
import { MdOutlineShoppingCart } from 'react-icons/md'
import s from './Header.module.scss'

const Header = () => {
	const { totalQuality } = useCart()

	return (
		<header className={s.header}>
			<div className={s.header__content}>
				<Link href="/">
					<a className={s.header__content__logo_mobile}>
						<Image src={LogoMobile} alt="Logo Amiibo" />
					</a>
				</Link>
				<Link href="/">
					<a className={s.header__content__logo}>
						<Image src={Logo} alt="Logo Amiibo" />
					</a>
				</Link>
				<nav className={s.header__content__nav}>
					<Link href="/#products">
						<a>Products</a>
					</Link>
					<button
						aria-label="Shopping Cart"
						data-quality={totalQuality}
						className={s.header__content__nav__cart}
					>
						<MdOutlineShoppingCart size={25} />
					</button>
				</nav>
			</div>
		</header>
	)
}

export default Header
