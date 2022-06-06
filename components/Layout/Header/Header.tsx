import ProductsList from 'components/page/ProductsList/ProductsList'
import Button from 'components/ui/Button/Button'
import Modal from 'components/ui/Modal/Modal'
import useCart from 'hooks/useCart'
import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/logo.svg'
import LogoMobile from 'public/logo_mobile.svg'
import { useState } from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md'
import s from './Header.module.scss'

const Header = () => {
	const [openCart, setOpenCart] = useState(false)
	const { totalQuality, products, total } = useCart()

	return (
		<>
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
							onClick={() => setOpenCart(!openCart)}
						>
							<MdOutlineShoppingCart size={25} />
						</button>
					</nav>
				</div>
			</header>
			{openCart && (
				<Modal
					title="Cart"
					type="side"
					close={setOpenCart}
					className={s.header__cart}
				>
					<ProductsList />
					{products.length > 0 ? (
						<div className={s.header__cart__total_container}>
							<div className={s.header__cart__total_container__total}>
								<h2 className={s.header__cart__total_container__total__text}>
									Total:
								</h2>
								<span className={s.header__cart__total_container__total__price}>
									${total}
								</span>
							</div>
							<Button
								href="/checkout"
								className={s.header__cart__total_container__button}
							>
								Go to Checkout
							</Button>
						</div>
					) : (
						<div className={s.header__cart__message}>
							<p className={s.header__cart__total_container__total__price}>
								You still have no products in the cart.
							</p>
							<Button href="/#products" onClick={() => setOpenCart(false)}>
								Go to Products
							</Button>
						</div>
					)}
				</Modal>
			)}
		</>
	)
}

export default Header
