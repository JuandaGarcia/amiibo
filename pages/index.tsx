import PruductCard from 'components/page/PruductCard/PruductCard'
import { getHomeData } from 'modules/getStaticProps/getHomeData'
import type { GetStaticProps } from 'next'
import { HomeProps } from 'utils/types/PagesProps'
import s from '../styles/pages/Home.module.scss'

const Home = ({ products }: HomeProps) => {
	return (
		<main>
			<section className={s.home__products}>
				<ul className={s.home__products__list}>
					{products.map(product => (
						<PruductCard key={product.id} product={product} />
					))}
				</ul>
			</section>
		</main>
	)
}

export const getStaticProps: GetStaticProps<HomeProps> = ctx => getHomeData(ctx)

export default Home
