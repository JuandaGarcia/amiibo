import { getHomeData } from 'modules/getStaticProps/getHomeData'
import type { GetStaticProps } from 'next'
import { HomeProps } from 'utils/types/PagesProps'
import s from '../styles/Home.module.css'

const Home = ({ products }: HomeProps) => {
	return (
		<div>
			{products.map(product => (
				<div key={product.id} className={s.product}>
					{product.name}
				</div>
			))}
		</div>
	)
}

export const getStaticProps: GetStaticProps<HomeProps> = ctx => getHomeData(ctx)

export default Home
