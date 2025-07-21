import { withGluestackUI } from "@gluestack-nightly/ui-next-adapter";
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["nativewind", "react-native-css-interop"]
};

export default withGluestackUI(nextConfig);
