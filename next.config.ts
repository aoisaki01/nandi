/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...mungkin ada konfigurasi lain di sini
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/vi/**',
      },
    ],
  },
};

module.exports = nextConfig;