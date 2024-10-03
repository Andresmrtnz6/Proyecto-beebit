/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        unoptimized: true,
      },
    env: {
      BACKEND_API_URL: process.env.BACKEND_API_URL || 'http://localhost:4000/api',
    },
    reactStrictMode: true,
};


export default nextConfig;
