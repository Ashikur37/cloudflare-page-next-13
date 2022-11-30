/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["wxdotngnidqgwiadnmbo.supabase.co"],
  },
  experimental: {
    appDir: true,
  },
  // experimental: {
  //   runtime: 'experimental-edge',
  // },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
