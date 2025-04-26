/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Ensure Next.js can run behind a proxy
  poweredByHeader: false,
};

module.exports = nextConfig;