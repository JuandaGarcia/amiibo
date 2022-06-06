import GlobalContent from 'components/Layout/GlobalContent/GlobalContent'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from 'redux/store'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<GlobalContent>
				<Component {...pageProps} />
			</GlobalContent>
		</Provider>
	)
}

export default MyApp
