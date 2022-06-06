import Layout from 'components/Layout/Layout'
import PruductCard from 'components/page/PruductCard/PruductCard'
import Button from 'components/ui/Button/Button'
import { getHomeData } from 'modules/getStaticProps/getHomeData'
import type { GetStaticProps } from 'next'
import Image from 'next/image'
import { HomeProps } from 'utils/types/PagesProps'
import s from '../styles/pages/Home.module.scss'

const Home = ({ products }: HomeProps) => {
	return (
		<Layout title="Amiibo Store">
			<main>
				<section className={s.home__hero}>
					<div className={s.home__hero__text}>
						<p className={s.home__hero__text__welcome}>WELCOME</p>
						<h1 className={s.home__hero__text__title}>
							Tap into more fun with amiibo™ accessories
						</h1>
						<p className={s.home__hero__text__message}>
							Score additional characters, bonuses, or other <br /> perks in
							compatible games.
						</p>
						<Button href="/#products">Explore Products</Button>
					</div>
					<div className={s.home__hero__image}>
						<Image
							src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00050000-00390102.png"
							alt="Amiibo Store"
							width={600}
							height={600}
							quality={100}
							objectFit="contain"
						/>
						<img
							src="/blur.svg"
							alt="Blur"
							className={s.home__hero__image__blur}
						/>
					</div>
				</section>
				<section className={s.home__products} id="products">
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
					<div className={s.home__products__load}>
						<Button buttonType="secondary">Load more</Button>
					</div>
				</section>
			</main>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps<HomeProps> = ctx => getHomeData(ctx)

export default Home
