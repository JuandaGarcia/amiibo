import { GetStaticPaths } from 'next'

export const getProductPaths: GetStaticPaths = async () => {
	try {
		const res = await fetch('https://amiiboapi.com/api/amiibo/')
		const data = await res.json()

		const paths = data.amiibo.map(
			({ head, tail }: { head: string; tail: string }) => ({
				params: { id: head + tail },
			})
		)

		return {
			paths,
			fallback: false,
		}
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}
