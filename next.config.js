/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true, // Required for static export
  },
  // Uncomment below for static export (no server-side features)
   output: 'export',
   trailingSlash: true,
};

module.exports = nextConfig;
