import { ButtonHTMLAttributes } from 'react'
import s from './Button.module.scss'

type TButton = ButtonHTMLAttributes<HTMLButtonElement>
interface Props extends TButton {
	buttonType?: 'primary' | 'secondary'
}

const Button = ({}: Props) => {
	return <button>Button</button>
}

export default Button
