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

  // Add custom port configuration
  async rewrites() {
    return [];
  },
  // Set custom port
  serverOptions: {
    port: 4000, // Change this number to your desired port
  },
};

export default nextConfig;
