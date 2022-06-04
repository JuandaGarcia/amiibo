import { Product } from 'utils/types/Product'

interface normalProduct extends Product {
	head: string
	tail: string
	release: {
		au: string | null
		eu: string | null
		jp: string | null
		na: string | null
	}
}

export const formatProduct = (product: normalProduct): Product => {
	const createPrice = () => {
		const realises = Object.values(product.release).filter(i => i)
		const newPrice = realises[0]
			? parseInt(String(new Date(realises[0]).getTime()).slice(0, 3))
			: 125

		return newPrice
	}

	return {
		id: product.head + product.tail,
		name: product.name,
		image: product.image,
		character: product.character,
		amiiboSeries: product.amiiboSeries,
		gameSeries: product.gameSeries,
		type: product.type,
		price: createPrice(),
	}
}
