/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  // Required for GitHub Pages
  //basePath: process.env.NODE_ENV === 'production' ? '/BridgeMedKits' : '',
  //assetPrefix: process.env.NODE_ENV === 'production' ? '/BridgeMedKits/' : '',
}

module.exports = nextConfig 
