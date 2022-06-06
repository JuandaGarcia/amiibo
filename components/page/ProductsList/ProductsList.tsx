import useCart from 'hooks/useCart'
import CartItem from '../CartItem/CartItem'
import s from './ProductsList.module.scss'

const ProductsList = () => {
	const { products } = useCart()

	return (
		<ul className={s.products_list}>
			{products.map(product => (
				<CartItem key={product.id} product={product}></CartItem>
			))}
		</ul>
	)
}

export default ProductsList
