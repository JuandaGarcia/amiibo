import { Product } from 'utils/types/Product'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'redux/store'

interface ProductCart extends Product {
	quantity: number
}
type CartState = {
	products: ProductCart[]
	total: number
}
const initialState: CartState = {
	products: [],
	total: 0,
}

const cartController = (
	products: ProductCart[],
	type: 'increase' | 'decrease' | 'delete',
	product: Product
) => {
	if (type === 'delete') {
		return products.filter(item => item.id !== product.id)
	} else {
		const newArray = products.map(item => {
			if (item.id === product.id) {
				return {
					...product,
					quantity: type === 'increase' ? item.quantity + 1 : item.quantity - 1,
				}
			} else {
				return item
			}
		})
		return newArray
	}
}

const getTotal = (array: ProductCart[]) =>
	parseFloat(
		array
			.reduce(
				(previousValue, currentValue) =>
					previousValue + currentValue.price * currentValue.quantity,
				0
			)
			.toFixed(2)
	)

export const { reducer: cartReducer, actions } = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		add_to_cart: (state, { payload }: PayloadAction<Product>) => {
			const newArray = cartController(state.products, 'increase', payload)
			state.products = newArray
			state.total = getTotal(newArray)
		},
		remove_from_cart: (state, { payload }: PayloadAction<Product>) => {
			const newArray = cartController(state.products, 'decrease', payload)
			state.products = newArray
			state.total = getTotal(newArray)
		},
		delete_product: (state, { payload }: PayloadAction<Product>) => {
			const newArray = cartController(state.products, 'delete', payload)
			state.products = newArray
			state.total = getTotal(newArray)
		},
		reset_cart: state => {
			state.products = []
			state.total = 0
		},
	},
})

export const { add_to_cart, remove_from_cart, delete_product, reset_cart } =
	actions
export const selectCart = ({ cart }: RootState) => cart

export default cartReducer
