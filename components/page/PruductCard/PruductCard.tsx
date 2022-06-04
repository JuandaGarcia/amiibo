import Image from 'next/image'
import Link from 'next/link'
import { Product } from 'utils/types/Product'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import s from './PruductCard.module.scss'

type Props = {
	product: Product
}
const PruductCard = ({ product }: Props) => {
	const { name, image, price, amiiboSeries, type } = product

	return (
		<li className={s.product_card}>
			<Link href={`/product/${product.id}`}>
				<a className={s.product_card__content}>
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
								Precio
							</span>
							<span className={s.product_card__content__info__item__text}>
								<RiMoneyDollarCircleFill color="var(--color-1)" size={25} />
								{price}
							</span>
						</div>
					</div>
				</a>
			</Link>
		</li>
	)
}

export default PruductCard