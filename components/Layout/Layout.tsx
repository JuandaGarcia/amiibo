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
					content="Score new characters, game modes, or other perks in compatible games with fun amiibo™ accessories!"
				/>
			</Head>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default Layout
