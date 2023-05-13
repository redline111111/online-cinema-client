/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				//destination: `http://localhost:4200/api/:path*`,
			 	destination: `https://online-cinema-server-production-e4f4.up.railway.app/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				//destination: `http://localhost:4200/uploads/:path*`,
				destination: `https://online-cinema-server-production-e4f4.up.railway.app/uploads/:path*`,
			},
		]
	},
}

module.exports = nextConfig
