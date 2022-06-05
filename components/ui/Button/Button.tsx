import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import s from './Button.module.scss'

type TButton = ButtonHTMLAttributes<HTMLButtonElement>
interface Props extends TButton {
	buttonType?: 'primary' | 'secondary'
}

const Button = ({
	buttonType,
	children,
	className,
	...props
}: PropsWithChildren<Props>) => {
	return (
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
