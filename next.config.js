/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        assetPrefix: '',
    },
    reactStrictMode: true,
    images: {
        unoptimized: true,
        domains: [
            'images.google.com',
            'gamingpe.com'],
    },
}

module.exports = nextConfig
