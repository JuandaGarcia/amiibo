import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import store from 'redux/store'
import 'styles/globals.scss'
import { globalConfig } from 'utils/helpers/toastConfig'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
			<Toaster
				position="bottom-center"
				reverseOrder={false}
				toastOptions={globalConfig}
			/>
		</Provider>
	)
}

export default MyApp
