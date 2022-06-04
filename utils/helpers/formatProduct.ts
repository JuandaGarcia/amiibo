import { Product } from 'utils/types/Product'

interface normalProduct extends Product {
	head: string
	tail: string
}

export const formatProduct = (product: normalProduct): Product => ({
	id: product.head + product.tail,
	name: product.name,
	image: product.image,
	character: product.character,
	amiiboSeries: product.amiiboSeries,
	gameSeries: product.gameSeries,
	type: product.type,
})
