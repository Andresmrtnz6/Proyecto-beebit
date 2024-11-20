/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_URL: isProd ? 'https://api.produccion.com' : 'http://localhost:4000',
  },
};

export default nextConfig;


