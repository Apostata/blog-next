import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'via.placeholder.com',
				port: '',
				pathname: '/**',
			}
		],
		// domains: ['via.placeholder.com'] // deprecated
	  },
};

export default nextConfig;
