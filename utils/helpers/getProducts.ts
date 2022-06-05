import { products_per_page } from 'utils/constants/app'
import { formatProduct } from './formatProduct'

export const getProducts = async ({ page = 1 }: { page: number }) => {
	const res = await fetch('https://amiiboapi.com/api/amiibo/')
	const { amiibo } = await res.json()
	const products = amiibo.slice(page - 1, products_per_page).map(formatProduct)

	return products
}
