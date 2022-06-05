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
	payload: Product
) => {
	if (type === 'delete') {
		return products.filter(item => item.id !== payload.id)
	} else {
		const newArray = products.map(item => {
			if (item.id === payload.id) {
				return {
					...payload,
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
			const index = state.products.findIndex(item => item.id === payload.id)
			if (index !== -1) {
				const newArray = cartController(state.products, 'increase', payload)
				state.products = newArray
				state.total = getTotal(newArray)
			} else {
				const newProducts = [...state.products, { ...payload, quantity: 1 }]
				state.products = newProducts
				state.total = getTotal(newProducts)
			}
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
