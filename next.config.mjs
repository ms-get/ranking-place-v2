/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
