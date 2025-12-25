/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // <--- Forces static HTML export
  images: {
    unoptimized: true, // <--- Required for GitHub Pages
  },
}

module.exports = nextConfig