/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Ajoutez vos domaines d'images ici
    unoptimized: process.env.NODE_ENV === 'development',
  },
  output: 'export',
}

module.exports = nextConfig