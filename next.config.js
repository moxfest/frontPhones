/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL
	},
	images: {
		domains: [
			'loremflickr.com',
			'www.aptronixindia.com',
			'cloudflare-ipfs.com',
			'avatars.githubusercontent.com',
			'localhost',
			'localhost:3000',
			'localhost:4200',
			'http://rnvjc-176-120-196-60.a.free.pinggy.link'
		]
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:4200/uploads/:path*'
			},
			{
				source: '/api/:path*',
				destination: `http://localhost:4200/api/:path*`,
			},

		]
	},

}

module.exports = nextConfig
