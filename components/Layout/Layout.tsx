import Head from 'next/head'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import { PropsWithChildren } from 'react'

type Props = {
	title: string
}
const Layout = ({ title, children }: PropsWithChildren<Props>) => {
	return (
		<>
			<Head>
				<title>{`${title} - Amiibo`}</title>
				<meta
					name="description"
					content="🍄 Score new characters, game modes, or other perks in compatible games with fun amiibo™ accessories!"
				/>
				<meta
					name="author"
					content="Juan David García Rincón, juandagarciadev@gmail.com"
				/>
				<meta property="og:title" content="Amiibo Store" />
				<meta
					property="og:description"
					content="🍄 Score new characters, game modes, or other perks in compatible games with fun amiibo™ accessories!"
				/>
				<meta
					property="og:image"
					content="https://amiibo.vercel.app/mini.jpg"
				/>
				<meta property="og:url" content="https://amiibo.vercel.app/" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Amiibo Store" />
				<meta name="twitter:site" content="@JuandaGarciaDev" />
				<meta name="twitter:creator" content="@JuandaGarciaDev" />
				<meta
					name="twitter:image"
					content="https://amiibo.vercel.app/mini.jpg"
				/>
				<meta
					name="twitter:image:src"
					content="https://amiibo.vercel.app/mini.jpg"
				/>
				<meta name="twitter:image:alt" content="Amiibo Store" />
			</Head>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default Layout
