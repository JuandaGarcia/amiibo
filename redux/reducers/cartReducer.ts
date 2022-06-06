import { Product, ProductCart } from 'utils/types/Product'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'redux/store'
import { local_storage_key } from 'utils/constants/app'

type CartState = {
	products: ProductCart[]
	totalQuality: number
	total: number
}
const initialState: CartState = {
	products: [],
	totalQuality: 0,
	total: 0,
}

const getInitialState = () => {
	const localStorageCart = localStorage.getItem(local_storage_key)
	if (localStorageCart) {
		try {
			const cart = JSON.parse(localStorageCart)
			if (
				cart.products &&
				cart.total &&
				cart.totalQuality &&
				typeof cart.totalQuality === 'number' &&
				typeof cart.total === 'number' &&
				typeof cart.products === 'object'
			) {
				return cart as CartState
			} else {
				return initialState
			}
		} catch (error) {
			localStorage.clear()
			console.error(error)
			return initialState
		}
	} else {
		return initialState
	}
}

const saveInLoalStorage = ({ products, total, totalQuality }: CartState) => {
	try {
		localStorage.setItem(
			local_storage_key,
			JSON.stringify({ products, total, totalQuality })
		)
	} catch (error) {
		console.error(error)
	}
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

const getTotalQuality = (array: ProductCart[]) =>
	parseFloat(
		array
			.reduce(
				(previousValue, currentValue) => previousValue + currentValue.quantity,
				0
			)
			.toFixed(2)
	)

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
		get_initial_state: state => {
			const data = getInitialState()

			state.products = data.products
			state.total = data.total
			state.totalQuality = data.totalQuality
		},
		add_to_cart: (state, { payload }: PayloadAction<Product>) => {
			const index = state.products.findIndex(item => item.id === payload.id)
			if (index !== -1) {
				const products = cartController(state.products, 'increase', payload)
				const total = getTotal(products)
				const totalQuality = getTotalQuality(products)
				state.products = products
				state.total = total
				state.totalQuality = totalQuality
				saveInLoalStorage({ products, total, totalQuality })
			} else {
				const products = [...state.products, { ...payload, quantity: 1 }]
				const total = getTotal(products)
				const totalQuality = getTotalQuality(products)
				state.products = products
				state.total = total
				state.totalQuality = totalQuality
				saveInLoalStorage({ products, total, totalQuality })
			}
		},
		remove_from_cart: (state, { payload }: PayloadAction<Product>) => {
			const products = cartController(state.products, 'decrease', payload)
			const total = getTotal(products)
			const totalQuality = getTotalQuality(products)
			state.products = products
			state.total = total
			state.totalQuality = totalQuality
			saveInLoalStorage({ products, total, totalQuality })
		},
		delete_product: (state, { payload }: PayloadAction<Product>) => {
			const products = cartController(state.products, 'delete', payload)
			const total = getTotal(products)
			const totalQuality = getTotalQuality(products)
			state.products = products
			state.total = total
			state.totalQuality = totalQuality
			saveInLoalStorage({ products, total, totalQuality })
		},
		reset_cart: state => {
			state.products = []
			state.total = 0
			state.totalQuality = 0
			saveInLoalStorage({ products: [], total: 0, totalQuality: 0 })
		},
	},
})

export const {
	add_to_cart,
	remove_from_cart,
	delete_product,
	reset_cart,
	get_initial_state,
} = actions
export const selectCart = ({ cart }: RootState) => cart

export default cartReducer
