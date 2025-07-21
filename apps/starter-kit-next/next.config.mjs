import { withGluestackUI } from "@gluestack-nightly/ui-next-adapter";
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: []
};

export default withGluestackUI(nextConfig);