import useCart from 'hooks/useCart'
import { PropsWithChildren, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { message } from 'utils/helpers/message'
import { globalConfig } from 'utils/helpers/toastConfig'

const GlobalContent = ({ children }: PropsWithChildren) => {
	const { getLocalStorageData } = useCart()
	useEffect(() => {
		getLocalStorageData()
	}, [getLocalStorageData])
	useEffect(message, [])

	return (
		<>
			{children}
			<Toaster
				position="bottom-center"
				reverseOrder={false}
				toastOptions={globalConfig}
			/>
		</>
	)
}

export default GlobalContent
