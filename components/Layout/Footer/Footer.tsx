import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/logo.svg'
import s from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={s.footer}>
			<Link href="/">
				<a>
					<Image src={Logo} alt="Logo Amiibo" />
				</a>
			</Link>
			<p className={s.footer__text}>
				© Copyright {new Date().getFullYear()} amiibo
			</p>
		</footer>
	)
}

export default Footer
