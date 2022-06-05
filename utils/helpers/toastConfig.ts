import { ToastOptions } from 'react-hot-toast/dist/core/types'

export const globalConfig: ToastOptions = {
	duration: 5000,
	style: {
		borderRadius: '10px',
		background: 'var(--background-blur-color)',
		color: 'var(--color-2)',
		backdropFilter: 'var(--background-blur-backdrop-filter)',
	},
}
