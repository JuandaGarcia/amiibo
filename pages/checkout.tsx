import Layout from 'components/Layout/Layout'
import ProductsList from 'components/page/ProductsList/ProductsList'
import Button from 'components/ui/Button/Button'
import useCart from 'hooks/useCart'
import Image from 'next/image'
import Pay from 'public/pay.svg'
import { useState } from 'react'
import s from '../styles/pages/Checkout.module.scss'

const Checkout = () => {
	const { pay, total, totalQuality } = useCart()
	const [success, setSuccess] = useState(false)

	const handlePay = () => {
		setSuccess(true)
		pay()
	}

	return !success ? (
		<Layout title="Checkout">
			<main className={s.checkout}>
				<section className={s.checkout__section}>
					<h1 className={s.checkout__section__title}>Checkout</h1>
					{totalQuality > 0 ? (
						<ProductsList />
					) : (
						<div className={s.checkout__section__message}>
							<p className={s.checkout__section__message__text}>
								You still have no products in the cart.
							</p>
							<Button href="/#products">Go to Products</Button>
						</div>
					)}
				</section>
				<section className={s.checkout__section}>
					<p className={s.checkout__section__item}>
						<span className={s.checkout__section__item__text}>
							Total ({totalQuality} Products):
						</span>
						<span className={s.checkout__section__item__price}>${total}</span>
					</p>
					<p className={s.checkout__section__item}>
						<span className={s.checkout__section__item__text}>Tax:</span>
						<span className={s.checkout__section__item__price}>$0</span>
					</p>
					<Button
						className={s.checkout__section__button}
						disabled={total === 0}
						onClick={handlePay}
					>
						Buy ${total}
					</Button>
					<div className={s.checkout__section__img}>
						<Image src={Pay} alt="Payment methods" />
					</div>
				</section>
			</main>
		</Layout>
	) : (
		<Layout title="Checkout">
			<main className={s.success}>
				<Image
					src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000300-03a60102.png"
					alt="Mario"
					width={275}
					height={275}
					quality={100}
					objectFit="contain"
				/>
				<h2 className={s.success__text}>Thanks for your purchase!</h2>
				<Button href="/">Go to Home</Button>
			</main>
		</Layout>
	)
}

export default Checkout
