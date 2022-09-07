/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    images: {
      allowFutureImage: true,
      unoptimized: true,
    },
  },
  basePath: "/anavrin",
  assetPrefix: "/anavrin",
}

module.exports = nextConfig
