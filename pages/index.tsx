import Layout from 'components/Layout/Layout'
import PruductCard from 'components/page/PruductCard/PruductCard'
import Button from 'components/ui/Button/Button'
import { getHomeData } from 'modules/getStaticProps/getHomeData'
import type { GetStaticProps } from 'next'
import Image from 'next/image'
import Person from 'public/person.png'
import { useState } from 'react'
import { products_per_page } from 'utils/constants/app'
import { HomeProps } from 'utils/types/PagesProps'
import s from '../styles/pages/Home.module.scss'

const Home = ({ products }: HomeProps) => {
	const [page, setPage] = useState(1)
	const productsToShow = [...products].slice(0, products_per_page * page)

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
						<div className={s.home__hero__text__testimonial}>
							<Image
								src={Person}
								alt="Amiibo Store"
								quality={100}
								objectFit="contain"
								className={s.home__hero__text__testimonial__img}
							/>
							<div>
								<p className={s.home__hero__text__testimonial__title}>
									Jess Young
								</p>
								<p className={s.home__hero__text__testimonial__text}>
									“I love shopping in this store.”
								</p>
							</div>
						</div>
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
					<h2 className={s.home__products__title}>Products</h2>
					<p className={s.home__products__text}>
						Explore the entirety of this amiibo collection.
					</p>
					<ul className={s.home__products__list}>
						{productsToShow.map(product => (
							<PruductCard key={product.id} product={product} />
						))}
					</ul>
					{productsToShow.length !== products.length && (
						<div className={s.home__products__load}>
							<Button buttonType="secondary" onClick={() => setPage(page + 1)}>
								Load more
							</Button>
						</div>
					)}
				</section>
			</main>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps<HomeProps> = ctx => getHomeData(ctx)

export default Home
