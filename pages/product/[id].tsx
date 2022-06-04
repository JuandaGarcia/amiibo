import { getProductPaths } from 'modules/getStaticPaths/getProductPaths'
import { getProductData } from 'modules/getStaticProps/getProductData'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ProductProps } from 'utils/types/PagesProps'

const Product = ({ product }: ProductProps) => {
	const { name, image, price } = product
	return <main>{name}</main>
}

export const getStaticPaths: GetStaticPaths = ctx => getProductPaths(ctx)
export const getStaticProps: GetStaticProps<ProductProps> = ctx =>
	getProductData(ctx)

export default Product
