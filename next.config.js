/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-ak.f.st-hatena.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'qiita-user-contents.imgix.net',
      },
      {
        protocol: 'https',
        hostname: 'cdn.qiita.com',
      },
    ],
  },
}

module.exports = nextConfig
