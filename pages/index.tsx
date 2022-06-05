import PruductCard from 'components/page/PruductCard/PruductCard'
import Button from 'components/ui/Button/Button'
import { getHomeData } from 'modules/getStaticProps/getHomeData'
import type { GetStaticProps } from 'next'
import { HomeProps } from 'utils/types/PagesProps'
import s from '../styles/pages/Home.module.scss'

const Home = ({ products }: HomeProps) => {
	return (
		<main>
			<section className={s.home__products__hero}></section>
			<section className={s.home__products}>
				<div>
					<div>
						<h2></h2>
						<p></p>
					</div>
				</div>
				<ul className={s.home__products__list}>
					{products.map(product => (
						<PruductCard key={product.id} product={product} />
					))}
				</ul>
				<div>
					<Button>Load more</Button>
				</div>
			</section>
		</main>
	)
}

export const getStaticProps: GetStaticProps<HomeProps> = ctx => getHomeData(ctx)

export default Home
