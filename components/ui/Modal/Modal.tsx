import {
	Dispatch,
	SetStateAction,
	PropsWithChildren,
	useEffect,
	useRef,
} from 'react'
import { GrFormClose } from 'react-icons/gr'
import s from './Modal.module.scss'

type Props = {
	show?: boolean
	close?: Dispatch<SetStateAction<boolean>> | Function
	title: string
	type?: 'side' | 'center'
	subModal?: boolean
	disableCloseOnEsc?: boolean
}

const Modal = ({
	show = true,
	title,
	close,
	children,
	type,
	subModal,
	disableCloseOnEsc,
}: PropsWithChildren<Props>) => {
	const modalRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const body = document.querySelector('body')

		const closeOnEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && !disableCloseOnEsc) {
				close && close(false)
			}
		}

		const controlParentScroll = (value: 'initial' | 'hidden') => {
			body && !subModal && body.setAttribute('style', `overflow: ${value}`)
			if (subModal) {
				const parents = document.querySelectorAll('*[data-parent_modal="true"]')
				parents.forEach(parent => {
					parent.setAttribute(
						'style',
						`overflow-y: ${value === 'initial' ? 'scroll' : 'initial'}`
					)
				})
			}
		}

		if (show) {
			controlParentScroll('hidden')
			document.body.addEventListener('keydown', closeOnEsc)
		} else {
			controlParentScroll('initial')
			document.body.removeEventListener('keydown', closeOnEsc)
		}

		return () => {
			controlParentScroll('initial')
			document.body.removeEventListener('keydown', closeOnEsc)
		}
	}, [show, close, subModal, disableCloseOnEsc])

	useEffect(() => {
		if (show) modalRef.current?.focus()
	}, [show])

	return show ? (
		<div className={s.modal}>
			<div
				aria-live="assertive"
				role="dialog"
				className={`${s.modal__content} ${type === 'side' && s.side}`}
				data-parent_modal={!subModal}
			>
				<div className={s.modal__content__header}>
					<h2
						tabIndex={0}
						ref={modalRef}
						className={s.modal__content__header__title}
					>
						{title}
					</h2>
					{close && (
						<button
							aria-label="Cerrar modal"
							className={s.modal__content__header__exit}
							onClick={() => close && close(false)}
						>
							<GrFormClose />
						</button>
					)}
				</div>
				<div
					className={`${s.modal__content__space} ${
						type === 'side' && s.side_space
					}`}
				>
					{children}
				</div>
			</div>
			<div
				role="button"
				aria-label="Cerrar modal"
				onClick={() => close && close(false)}
				className={s.modal__overlay}
			></div>
		</div>
	) : null
}

export default Modal
