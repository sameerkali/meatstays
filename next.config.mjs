/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Ignore type errors during production builds
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignore ESLint errors during builds
  },
};

export default nextConfig;
