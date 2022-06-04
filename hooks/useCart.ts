import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'redux/store'
import { Product } from 'utils/types/Product'
import {
	selectCart,
	add_to_cart,
	remove_from_cart,
	delete_product,
	reset_cart,
} from 'redux/reducers/cartReducer'

const useCart = () => {
	const { products, total } = useSelector(selectCart)
	const dispatch = useDispatch<AppDispatch>()

	const addToCart = (product: Product) => dispatch(add_to_cart(product))
	const deleteProduct = (product: Product) => dispatch(delete_product(product))
	const resetCart = () => dispatch(reset_cart())
	const reomveFromCart = (product: Product) =>
		dispatch(remove_from_cart(product))

	return {
		products,
		total,
		addToCart,
		deleteProduct,
		reomveFromCart,
		resetCart,
	}
}

export default useCart
