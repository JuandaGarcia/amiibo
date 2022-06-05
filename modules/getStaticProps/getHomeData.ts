import { GetStaticProps } from 'next'
import { getProducts } from 'utils/helpers/getProducts'
import { HomeProps } from 'utils/types/PagesProps'

export const getHomeData: GetStaticProps<HomeProps> = async () => {
	try {
		const products = await getProducts({ page: 1 })

		return { props: { products } }
	} catch (error) {
		return { notFound: true }
	}
}
