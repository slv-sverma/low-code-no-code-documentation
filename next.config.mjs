import createMDX from "fumadocs-mdx/config";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  pageExtensions: ["js", "tsx", "md", "mdx"],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withMDX(config);
