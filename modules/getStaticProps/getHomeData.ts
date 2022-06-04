import { GetStaticProps } from 'next'
import { formatProduct } from 'utils/helpers/formatProduct'
import { HomeProps } from 'utils/types/PagesProps'

export const getHomeData: GetStaticProps<HomeProps> = async () => {
	try {
		const res = await fetch('https://amiiboapi.com/api/amiibo/')
		const { amiibo } = await res.json()
		const products = amiibo.map(formatProduct)

		return { props: { products } }
	} catch (error) {
		return { notFound: true }
	}
}
