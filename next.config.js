/** @type {import('next').NextConfig} */

const nextConfig = {
	i18n: { locales: ['es'], defaultLocale: 'es' },
	reactStrictMode: true,
	images: {
		domains: ['raw.githubusercontent.com'],
	},
}

module.exports = nextConfig
