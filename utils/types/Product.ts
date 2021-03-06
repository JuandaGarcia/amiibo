export type Product = {
	id: string
	name: string
	image: string
	character: string
	amiiboSeries: string
	gameSeries: string
	type: string
	price: number
}

export interface ProductCart extends Product {
	quantity: number
}
