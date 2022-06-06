import Image from 'next/image'
import { Product } from 'utils/types/Product'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import s from './PruductCard.module.scss'
import Button from 'components/ui/Button/Button'
import useCart from 'hooks/useCart'

type Props = {
	product: Product
}
const PruductCard = ({ product }: Props) => {
	const { name, image, price, amiiboSeries, type } = product
	const { addToCart } = useCart()

	return (
		<li className={s.product_card}>
			<div className={s.product_card__content}>
				<Image
					src={image}
					alt={name}
					width={200}
					height={200}
					quality={100}
					objectFit="contain"
					className={
						type === 'Card'
							? s.product_card__content__card
							: s.product_card__content__figure
					}
				/>
				<div className={s.product_card__content__info}>
					<div className={s.product_card__content__info__item}>
						<span className={s.product_card__content__info__item__type}>
							{type}
						</span>
						<span className={s.product_card__content__info__item__text}>
							{name}
						</span>
						<span className={s.product_card__content__info__item__series}>
							{amiiboSeries}
						</span>
					</div>
					<div className={s.product_card__content__info__item}>
						<span className={s.product_card__content__info__item__price}>
							Price
						</span>
						<span className={s.product_card__content__info__item__price_number}>
							<RiMoneyDollarCircleFill color="var(--color-1)" size={25} />
							{price}
						</span>
					</div>
				</div>
			</div>
			<Button
				className={s.product_card__button}
				onClick={() => addToCart(product, true)}
			>
				Add to Cart
			</Button>
		</li>
	)
}

export default PruductCard
