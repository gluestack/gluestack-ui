import { withGluestackUI } from "@gluestack-nightly/ui-next-adapter";
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: []
};

export default withGluestackUI(nextConfig);