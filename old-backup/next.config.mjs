/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/docs/application-flow",
        permanent: true,
      },
      // Wildcard path matching
      {
        source: "/docs",
        destination: "/docs/application-flow",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
