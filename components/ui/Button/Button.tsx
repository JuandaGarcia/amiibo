import Link from 'next/link'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import s from './Button.module.scss'

type TButton = ButtonHTMLAttributes<HTMLButtonElement>
interface Props extends TButton {
	buttonType?: 'primary' | 'secondary'
	href?: string
}

const Button = ({
	buttonType,
	children,
	className,
	href,
	...props
}: PropsWithChildren<Props>) => {
	return href ? (
		<Link href={href}>
			<a
				onClick={props.onClick as () => void}
				className={`${
					buttonType === 'secondary' ? s.button_secondary : s.button_primary
				} ${className}`}
			>
				{children}
			</a>
		</Link>
	) : (
		<button
			{...props}
			className={`${
				buttonType === 'secondary' ? s.button_secondary : s.button_primary
			} ${className}`}
		>
			{children}
		</button>
	)
}

export default Button
