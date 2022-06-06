import useCart from 'hooks/useCart'
import Image from 'next/image'
import { ProductCart } from 'utils/types/Product'
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'
import s from './CartItem.module.scss'

type Props = {
	product: ProductCart
}
const CartItem = ({ product }: Props) => {
	const { name, image, price, quantity } = product
	const { addToCart, removeFromCart, deleteProduct } = useCart()
	const qualityIsOne = quantity === 1

	return (
		<li className={s.cart_item}>
			<div className={s.cart_item__left}>
				<Image
					src={image}
					alt={name}
					width={50}
					height={50}
					quality={100}
					objectFit="contain"
				/>
				<div className={s.cart_item__left__text}>
					<span className={s.cart_item__left__text__name}>{name}</span>
					<span className={s.cart_item__left__text__price}>
						$ {price * quantity}
					</span>
				</div>
			</div>
			<div className={s.cart_item__buttons}>
				<div className={s.cart_item__buttons__quality}>
					<button
						className={s.cart_item__buttons__quality__item}
						onClick={() =>
							qualityIsOne ? deleteProduct(product) : removeFromCart(product)
						}
						aria-label={
							qualityIsOne ? 'Remove product' : 'Reduce product quantity'
						}
					>
						{qualityIsOne ? <FiTrash2 /> : <FiMinus />}
					</button>
					<span>{quantity}</span>
					<button
						className={s.cart_item__buttons__quality__item}
						onClick={() => addToCart(product)}
						aria-label="Increase product quantity"
					>
						<FiPlus />
					</button>
				</div>
				<button
					className={s.cart_item__buttons__remove}
					onClick={() => deleteProduct(product)}
				>
					Remove product
				</button>
			</div>
		</li>
	)
}

export default CartItem
