import { GetStaticProps } from 'next'
import { formatProduct } from 'utils/helpers/formatProduct'
import { ProductProps } from 'utils/types/PagesProps'

export const getProductData: GetStaticProps<ProductProps> = async ({
	params,
}) => {
	if (params?.id && typeof params.id === 'string') {
		try {
			const res = await fetch(
				`https://amiiboapi.com/api/amiibo/?id=${params.id}`
			)
			const { amiibo } = await res.json()

			return {
				props: {
					product: formatProduct(amiibo),
				},
			}
		} catch (error) {
			return { notFound: true }
		}
	} else {
		return { notFound: true }
	}
}
