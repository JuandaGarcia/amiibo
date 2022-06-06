import confetti from 'canvas-confetti'
import { useDispatch, useSelector } from 'react-redux'
import { Product } from 'utils/types/Product'
import {
	selectCart,
	add_to_cart,
	remove_from_cart,
	delete_product,
	reset_cart,
} from 'redux/reducers/cartReducer'
import { toast } from 'react-hot-toast'

const useCart = () => {
	const { products, total, totalQuality } = useSelector(selectCart)
	const dispatch = useDispatch()

	const addToCart = (product: Product, notification?: boolean) => {
		dispatch(add_to_cart(product))
		notification && toast.success(`Added ${product.name}`)
	}
	const removeFromCart = (product: Product) =>
		dispatch(remove_from_cart(product))
	const deleteProduct = (product: Product) => dispatch(delete_product(product))

	const pay = () => {
		dispatch(reset_cart())
		confetti({
			particleCount: 100,
			spread: 70,
			origin: { y: 0.6 },
		})
	}

	return {
		products,
		total,
		totalQuality,
		addToCart,
		deleteProduct,
		removeFromCart,
		pay,
	}
}

export default useCart
