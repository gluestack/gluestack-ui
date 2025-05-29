import { withGluestackUI } from "@gluestack/ui-next-adapter";
import withPlugins from "next-compose-plugins";
import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";

const redirects = [
  {
    source: "/ui/docs/styling/state",
    destination: "https://v1.gluestack.io/ui/docs/styling/state",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/react-native-components/scroll-view",
    destination:
      "https://v1.gluestack.io/ui/docs/react-native-components/scroll-view",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/components/hooks/use-styled",
    destination: "https://v1.gluestack.io/ui/docs/components/hooks/use-styled",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/react-native-components/image-background",
    destination:
      "https://v1.gluestack.io/ui/docs/react-native-components/image-background",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/components/react-native-components/safe-area-view",
    destination:
      "https://v1.gluestack.io/ui/docs/components/react-native-components/safe-area-view",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/components/hooks/use-token",
    destination: "https://v1.gluestack.io/ui/docs/components/hooks/use-token",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/guides/more/contribution-guidelines",
    destination:
      "https://v1.gluestack.io/ui/docs/guides/more/contribution-guidelines",
    permanent: true,
    basePath: false,
  },
  {
    source: "/docs/theme-configuration/theme/default-components",
    destination:
      "https://v1.gluestack.io/docs/theme-configuration/theme/default-components",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/components/hooks/use-media",
    destination: "https://v1.gluestack.io/ui/docs/components/hooks/use-media",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/react-native-components/refresh-control",
    destination:
      "https://v1.gluestack.io/ui/docs/react-native-components/refresh-control",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/home/theme-configuration/theme/default-components",
    destination:
      "https://v1.gluestack.io/ui/docs/home/theme-configuration/theme/default-components",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/components/hooks/react-native-aria",
    destination:
      "https://v1.gluestack.io/ui/docs/components/hooks/react-native-aria",
    permanent: true,
    basePath: false,
  },
  {
    source: "/events",
    destination: "https://v1.gluestack.io/events",
    permanent: true,
    basePath: false,
  },
  {
    source: "/thank-you",
    destination: "https://v1.gluestack.io/thank-you",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/components/react-native-components/refresh-control",
    destination:
      "https://v1.gluestack.io/ui/docs/components/react-native-components/refresh-control",
    permanent: true,
    basePath: false,
  },
  {
    source: "/enterprise",
    destination: "https://v1.gluestack.io/enterprise",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/components/react-native-components/status-bar",
    destination:
      "https://v1.gluestack.io/ui/docs/components/react-native-components/status-bar",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/home/core-concepts/unstyled-library",
    destination:
      "https://v1.gluestack.io/ui/docs/home/core-concepts/unstyled-library",
    permanent: true,
    basePath: false,
  },
  {
    source:
      "/ui/docs/components/react-native-components/keyboard-avoiding-view",
    destination:
      "https://v1.gluestack.io/ui/docs/components/react-native-components/keyboard-avoiding-view",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/components/react-native-components/section-list",
    destination:
      "https://v1.gluestack.io/ui/docs/components/react-native-components/section-list",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/components/hooks/use-theme",
    destination: "https://v1.gluestack.io/ui/docs/components/hooks/use-theme",
    permanent: true,
    basePath: false,
  },
  {
    source: "/blogs/why-we-built-gluestack-ui",
    destination: "https://v1.gluestack.io/blogs/why-we-built-gluestack-ui",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/hooks/use-color-mode",
    destination: "https://v1.gluestack.io/ui/docs/hooks/use-color-mode",
    permanent: true,
    basePath: false,
  },
  {
    source: "/blogs/Incremental-adoption-in-gluestack-ui",
    destination:
      "https://v1.gluestack.io/blogs/Incremental-adoption-in-gluestack-ui",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/styling/responsive",
    destination: "https://v1.gluestack.io/ui/docs/styling/responsive",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/react-native-components/flat-list",
    destination:
      "https://v1.gluestack.io/ui/docs/react-native-components/flat-list",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/v1",
    destination: "https://v1.gluestack.io/ui/v1",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/guides/install-expo",
    destination: "https://v1.gluestack.io/ui/docs/guides/install-expo",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/guides/more/changelog",
    destination: "https://v1.gluestack.io/ui/docs/guides/more/changelog",
    permanent: true,
    basePath: false,
  },
  {
    source: "/docs/components/layout/stack",
    destination: "https://v1.gluestack.io/docs/components/layout/stack",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/guides/advanced/fonts",
    destination: "https://v1.gluestack.io/ui/docs/guides/advanced/fonts",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/styling/utility-and-sx-props",
    destination: "https://v1.gluestack.io/ui/docs/styling/utility-and-sx-props",
    permanent: true,
    basePath: false,
  },
  {
    source: "/docs/components/disclosure/tab",
    destination: "https://v1.gluestack.io/docs/components/disclosure/tab",
    permanent: true,
    basePath: false,
  },
  {
    source: "/docs/components/forms/icon-button",
    destination: "https://v1.gluestack.io/docs/components/forms/icon-button",
    permanent: true,
    basePath: false,
  },
  {
    source: "/docs/components/layout/scroll",
    destination: "https://v1.gluestack.io/docs/components/layout/scroll",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/home/getting-started/incremental-adoption",
    destination:
      "https://v1.gluestack.io/ui/docs/home/getting-started/incremental-adoption",
    permanent: true,
    basePath: false,
  },
  {
    source: "/docs/components/others/navigation-rail",
    destination:
      "https://v1.gluestack.io/docs/components/others/navigation-rail",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/core-concepts/unstyled-library",
    destination:
      "https://v1.gluestack.io/ui/docs/core-concepts/unstyled-library",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/react-native-components/view",
    destination: "https://v1.gluestack.io/ui/docs/react-native-components/view",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/advanced/fonts",
    destination: "https://v1.gluestack.io/ui/docs/advanced/fonts",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/guides/migration/native-base-to-gluestack-ui",
    destination:
      "https://v1.gluestack.io/ui/docs/guides/migration/native-base-to-gluestack-ui",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/home/core-concepts/themed-library",
    destination:
      "https://v1.gluestack.io/ui/docs/home/core-concepts/themed-library",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/more/changelog",
    destination: "https://v1.gluestack.io/ui/docs/more/changelog",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/styling/overview",
    destination: "https://v1.gluestack.io/ui/docs/styling/overview",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/components/react-native-components/virtualized-list",
    destination:
      "https://v1.gluestack.io/ui/docs/components/react-native-components/virtualized-list",
    permanent: true,
    basePath: false,
  },
  {
    source: "/docs/components/others/stepper",
    destination: "https://v1.gluestack.io/docs/components/others/stepper",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/guides/advanced/animations",
    destination: "https://v1.gluestack.io/ui/docs/guides/advanced/animations",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/core-concepts/themed-library",
    destination: "https://v1.gluestack.io/ui/docs/core-concepts/themed-library",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/guides/install-rn",
    destination: "https://v1.gluestack.io/ui/docs/guides/install-rn",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/production-optimizations/babel-plugin",
    destination:
      "https://v1.gluestack.io/ui/docs/production-optimizations/babel-plugin",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/guides/install-nextjs",
    destination: "https://v1.gluestack.io/ui/docs/guides/install-nextjs",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/advanced/animations",
    destination: "https://v1.gluestack.io/ui/docs/advanced/animations",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/guides/production-optimizations/babel-plugin",
    destination:
      "https://v1.gluestack.io/ui/docs/guides/production-optimizations/babel-plugin",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/home/theme-configuration/customizing-theme/eject-library",
    destination:
      "https://v1.gluestack.io/ui/docs/home/theme-configuration/customizing-theme/eject-library",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/styling/descendants",
    destination: "https://v1.gluestack.io/ui/docs/styling/descendants",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/resources/more-recipes",
    destination: "https://v1.gluestack.io/ui/docs/resources/more-recipes",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/d",
    destination: "https://v1.gluestack.io/ui/d",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/theme-configuration/theme/default-components",
    destination:
      "https://v1.gluestack.io/ui/docs/theme-configuration/theme/default-components",
    permanent: true,
    basePath: false,
  },
  {
    source: "/style/docs/api/create-styled",
    destination: "https://v1.gluestack.io/style/docs",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/resources/third-party-library-integrations",
    destination:
      "https://v1.gluestack.io/ui/docs/resources/third-party-library-integrations",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/theme-configuration/customizing-theme/eject-theme",
    destination:
      "https://v1.gluestack.io/ui/docs/theme-configuration/customizing-theme/eject-theme",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/getting-started/incremental-adoption",
    destination:
      "https://v1.gluestack.io/ui/docs/getting-started/incremental-adoption",
    permanent: true,
    basePath: false,
  },
  {
    source: "/docs/guides/install-nextjs",
    destination: "https://v1.gluestack.io/docs/guides/install-nextjs",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/react-native-components/input-acessory-view",
    destination:
      "https://v1.gluestack.io/ui/docs/react-native-components/input-acessory-view",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/guides/building-design-systems",
    destination:
      "https://v1.gluestack.io/ui/docs/guides/building-design-systems",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/styling/color-mode",
    destination: "https://v1.gluestack.io/ui/docs/styling/color-mode",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/v1",
    destination: "https://v1.gluestack.io/ui/v1",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/customize-and-style/styling/responsive",
    destination:
      "https://v1.gluestack.io/ui/docs/customize-and-style/styling/responsive",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/core-concepts/unstyled-components",
    destination:
      "https://v1.gluestack.io/ui/docs/core-concepts/unstyled-components",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/getting-started/increamental-adoption",
    destination:
      "https://v1.gluestack.io/ui/docs/getting-started/increamental-adoption",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/home/styling/text",
    destination: "https://v1.gluestack.io/ui/docs/home/styling/text",
    permanent: true,
    basePath: false,
  },
  {
    source: "/TakeawaysThe",
    destination: "https://v1.gluestack.io/TakeawaysThe",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/customize-and-style/tokens",
    destination: "https://v1.gluestack.io/ui/docs/customize-and-style/tokens",
    permanent: true,
    basePath: false,
  },
  {
    source: "/Takeaways",
    destination: "https://v1.gluestack.io/Takeaways",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/resources/ColorPicker",
    destination: "https://v1.gluestack.io/ui/docs/resources/ColorPicker",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/home/getting-started/ui/docs/guides/install-nextjs",
    destination:
      "https://v1.gluestack.io/ui/docs/home/getting-started/ui/docs/guides/install-nextjs",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/guides/resources/ColorPicker",
    destination: "https://v1.gluestack.io/ui/docs/guides/resources/ColorPicker",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/guides/resources/style/docs/getting-started/styled",
    destination:
      "https://v1.gluestack.io/ui/docs/guides/resources/style/docs/getting-started/styled",
    permanent: true,
    basePath: false,
  },
  {
    source:
      "/ui/docs/home/theme-configuration/theme/style/docs/configuration/theme-tokens",
    destination:
      "https://v1.gluestack.io/ui/docs/home/theme-configuration/theme/style/docs/configuration/theme-tokens",
    permanent: true,
    basePath: false,
  },
  {
    source: "/ui/docs/overview/component-catalog",
    destination: "https://v1.gluestack.io/ui/docs/overview/component-catalog",
    permanent: true,
    basePath: false,
  },
  {
    source: "/accessibility/docs",
    destination: "https://v1.gluestack.io/accessibility/docs",
    permanent: true,
    basePath: false,
  },

  {
    source: "/ui/docs/home/performance/overview",
    destination: "/ui/docs/home/performance/benchmarks",
    permanent: true,
  },
  {
    source: "/ui/docs/recipes/linear-gradient ",
    destination: "/ui/docs/guides/recipes/linear-gradient",
    permanent: true,
  },
  {
    source: "/ui/docs/core-concepts/universal ",
    destination: "/ui/docs/home/core-concepts/universal",
    permanent: true,
  },
  {
    source: "/docs/components/layout/header",
    destination: "/ui/docs/components/heading",
    permanent: true,
  },
  {
    source: "/ui/docs/components/provider/gluestack-uiprovider",
    destination:
      "https://v1.gluestack.io/ui/docs/components/provider/gluestack-uiprovider",
    permanent: true,
  },
  {
    source: "/ui/docs/resources/dashboard-app",
    destination: "/ui/docs/apps/dashboard-app",
    permanent: true,
  },
  {
    source: "/ui/docs/recipes/card",
    destination: "/ui/docs/components/card",
    permanent: true,
  },
  {
    source: "/figma-kit",
    destination: "/ui/docs/home/getting-started/figma-ui-kit",
    permanent: true,
  },
  {
    source: "/ui/docs/theme-configuration/customizing-theme",
    destination: "/ui/docs/home/theme-configuration/customizing-theme",
    permanent: true,
  },
  {
    source: "/docs/theme-configuration/theme/customizing-theme",
    destination: "/ui/docs/home/theme-configuration/customizing-theme",
    permanent: true,
  },
  {
    source: "/docs/theme-configuration/theme/default-tokens",
    destination: "/ui/docs/home/theme-configuration/default-tokens",
    permanent: true,
  },
  {
    source: "/ui/docs/performance/overview",
    destination: "/ui/docs/home/performance/benchmarks",
    permanent: true,
  },
  {
    source: "/ui/docs/configuration/ssr",
    destination: "https://v1.gluestack.io/ui/docs/guides/guides/ssr",
    permanent: true,
  },
  {
    source: "/ui/docs/home/theme-configuration/theme/default-tokens",
    destination: "/ui/docs/home/theme-configuration/default-tokens",
    permanent: true,
  },
  {
    source: "/ui/docs/overview/introduction",
    destination: "/ui/docs/home/overview/introduction",
    permanent: true,
  },
  {
    source: "/ui/docs/home/overview/all-components",
    destination: "/ui/docs/components/all-components",
    permanent: true,
  },
  {
    source: "/home/theme-configuration/dark-mode",
    destination: "/ui/docs/home/theme-configuration/dark-mode",
    permanent: true,
  },
  {
    source: "/ui/docs/theme-configuration/theme/default-tokens",
    destination: "/ui/docs/home/theme-configuration/default-tokens",
    permanent: true,
  },
  {
    source: "/docs/overview/introduction",
    destination: "/ui/docs/home/overview/introduction",
    permanent: true,
  },
  {
    source: "/ui/docs/more/faqs",
    destination: "/ui/docs/guides/more/faqs",
    permanent: true,
  },
  {
    source: "/ui/docs/configuration/rsc",
    destination: "https://v1.gluestack.io/ui/docs/guides/guides/rsc",
    permanent: true,
  },
  {
    source: "/ui/docs/more/roadmap",
    destination: "/ui/docs/guides/more/roadmap",
    permanent: true,
  },
  { source: "/contact-us", destination: "/support", permanent: true },
  {
    source: "/docs/components/feedback/progress",
    destination: "/ui/docs/components/progress",
    permanent: true,
  },
  {
    source: "/ui/docs/resources/todo-list",
    destination: "/ui/docs/apps/todo-app",
    permanent: true,
  },
  {
    source: "/docs",
    destination: "/ui/docs/home/overview/introduction",
    permanent: true,
  },
  {
    source: "/ui/docs/overview/accessibility",
    destination: "/ui/docs/home/core-concepts/accessibility",
    permanent: true,
  },
  {
    source: "/introduction ",
    destination: "https://v1.gluestack.io/introduction",
    permanent: true,
  },
  {
    source: "/ui/docs/theme/default-tokens",
    destination: "/ui/docs/home/theme-configuration/default-tokens",
    permanent: true,
  },
  {
    source: "/ui/docs/theme/overview",
    destination: "/ui/docs/home/overview/introduction",
    permanent: true,
  },
  {
    source: "/ui/docs/components/layout/linear-gradient",
    destination: "/ui/docs/guides/recipes/linear-gradient",
    permanent: true,
  },
  {
    source: "/ui/docs/overview/ui/docs/getting-started/vscode-extensions",
    destination: "/ui/docs/home/getting-started/vscode-extensions",
    permanent: true,
  },

  {
    source: "/Takeaways",
    destination: "/ui/docs/home/overview/introduction",
    permanent: true,
  },

  {
    source: "/accessibility/docs",
    destination: "/ui/docs/home/overview/introduction",
    permanent: true,
  },

  {
    source: "/ui/docs/overview/component-catalog",
    destination: "/ui/docs/home/overview/introduction",
    permanent: true,
  },

  {
    source: "/ui/docs/home/getting-started/ui/docs/guides/install-nextjs",
    destination: "/ui/docs/home/getting-started/installation",
    permanent: true,
  },
  {
    source:
      "/ui/docs/home/theme-configuration/theme/style/docs/configuration/theme-tokens",
    destination: "/ui/docs/home/overview/introduction",
    permanent: true,
  },

  {
    source: "/ui/docs/customize-and-style/tokens",
    destination: "/ui/docs/home/overview/introduction",
    permanent: true,
  },

  {
    source: "/ui/docs/resources/ColorPicker",
    destination: "/ui/docs/home/overview/introduction",
    permanent: true,
  },

  {
    source: "/ui/docs/guides/resources/ColorPicker",
    destination: "/ui/docs/home/overview/introduction",
    permanent: true,
  },

  {
    source: "/ui/docs/home/getting-started/ui/docs/guides/install-nextjs",
    destination: "/ui/docs/home/getting-started/installation",
    permanent: true,
  },

  {
    source: "/ui/docs/components/text-area",
    destination: "/ui/docs/components/textarea",
    permanent: true,
  },
  {
    source: "/ui/with-nativewind/docs/overview/introduction",
    destination: "/ui/docs/home/overview/introduction",
    permanent: true,
  },
  {
    source: "/ui/docs/guides/resources/style/docs/getting-started/styled",
    destination: "/ui/docs/home/overview/introduction",
    permanent: true,
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = withGluestackUI({
  reactStrictMode: true,
  transpilePackages: ["nativewind", "react-native-css-interop"],
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "qr.expo.dev",
      },
      {
        hostname: "i.imgur.com",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "gluestack.github.io",
      },
      {
        hostname: "pbs.twimg.com",
      },
    ],
  },
});

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [rehypeSlug],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

const config = withPlugins([withMDX], {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  async redirects() {
    return [
      ...redirects,
      // Redirects for old URLs
      {
        source: "/ui",
        destination: "/ui/docs/home/overview/introduction",
        permanent: true,
      },
      {
        source: "/ui/docs",
        destination: "/ui/docs/home/overview/quick-start",
        permanent: true,
      },
      {
        source: "/ui/nativewind/docs",
        destination: "/ui/docs/home/overview/introduction",
        permanent: true,
      },
      {
        source: "/roadmap",
        destination: "/ui/docs/guides/more/roadmap",
        permanent: true,
      },
      {
        source: "/ui/nativewind/docs/components/:componentName",
        destination: "/ui/docs/components/:componentName",
        permanent: true,
      },
      {
        source: "/ui/with-gluestack-style/docs/components/:componentName",
        destination: "/ui/docs/components/:componentName",
        permanent: true,
      },
      {
        source: "/ui/with-nativewind/docs/components/:componentName",
        destination: "/ui/docs/components/:componentName",
        permanent: true,
      },
      {
        source: "/ui/docs/home/styling/:path*",
        destination: "/ui",
        permanent: true,
      },

      {
        source: "/ui/docs/home/styling/:path*",
        destination: "/ui",
        permanent: true,
      },
      {
        source: "/ui/nativewind/docs/more/changelog",
        destination: "/ui/docs/guides/more/releases",
        permanent: true,
      },
      {
        source: "/ui/nativewind/:path*",
        destination: "ui/:path*",
        permanent: true,
      },
      {
        source: "/ui/docs/styling/variants/:path*",
        destination: "/ui",
        permanent: true,
      },
      {
        source: "/ui/with-gluestack-style/:path*",
        destination: "https://v1.gluestack.io/ui/docs",
        permanent: true,
      },
      {
        source: "/ui/docs/with-gluestack-style/:path*",
        destination: "https://v1.gluestack.io/ui/docs",
        permanent: true,
      },
      {
        source: "/style/:path*",
        destination: "/ui/docs",
        permanent: true,
      },
      {
        source: "/ui/docs/theme/:path*",
        destination: "/ui/docs/home/theme-configuration/customizing-theme",
        permanent: true,
      },
      {
        source: "/starter-kit",
        destination: "/ui/docs/apps/starter-kit",
        permanent: true,
      },
      {
        source: "/ui/docs/getting-started/:path*",
        destination: "/ui/docs/home/getting-started/:path*",
        permanent: true,
      },
      {
        source: "/ui/docs/customize-and-style/:path*",
        destination: "/ui/docs/home/theme-configuration/customizing-theme",
        permanent: true,
      },
      {
        source: "/accessibility/docs",
        destination: "/ui/docs/home/core-concepts/accessibility",
        permanent: true,
      },
      {
        source: "/ui/docs/overview/accessibility",
        destination: "/ui/docs/home/core-concepts/accessibility",
        permanent: true,
      },
      {
        source: "/ui/docs/performance/benchmarks",
        destination: "/ui/docs/home/performance/benchmarks",
        permanent: true,
      },
      {
        source: "/ui/docs/core-concepts/accessibility",
        destination: "/ui/docs/home/core-concepts/accessibility",
        permanent: true,
      },
      {
        source: "/ui/gluestack-style/docs/core-concepts/accessibility",
        destination: "/ui/docs/home/core-concepts/accessibility",
        permanent: true,
      },
      {
        source: "/component-catalog",
        destination: "/ui/docs/components/all-components",
        permanent: true,
      },
      {
        source: "/ui/docs/overview/all-components",
        destination: "/ui/docs/components/all-components",
        permanent: true,
      },
      {
        source: "/Takeaways",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ui/nativewind/docs/components/:componentType/:componentName",
        destination: "/ui/docs/components/:componentType/:componentName",
        permanent: true,
      },
      {
        source: "/ui/docs/components/hooks/:hooks",
        destination: "/ui/docs/hooks/:hooks",
        permanent: true,
      },
      {
        source: "/ui/gluestack-style/docs/components/:componentName",
        destination: "/ui/docs/components/:componentName",
        permanent: true,
      },
      {
        source: "/ui/gluestack-style/docs/:docs((?!components).*)",
        destination: "/ui/docs",
        permanent: true,
      },
      {
        source: "/ui/docs/guides/resources/:resource",
        destination: "/ui/docs/apps/dashboard-app",
        permanent: true,
      },
      {
        source: "/ui/docs/guides/guides/:path*",
        destination: "/ui/docs/home/getting-started/installation",
        permanent: true,
      },
      {
        source:
          "/ui/docs/components/:componentType((?!hooks$).*)/:componentName",
        destination: "/ui/docs/components/:componentName",
        permanent: true,
      },
      {
        source: "/docs/components/:componentType((?!hooks$).*)/:componentName",
        destination: "/ui/docs/components/:componentName",
        permanent: true,
      },
      {
        source: "/style/:path*",
        destination: "https://v1.gluestack.io/style/:path*",
        permanent: true,
        basePath: false,
      },
      {
        source: "/contact-us",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/:prefix/styling/:suffix",
        destination: "/ui/docs/home/theme-configuration/customizing-theme",
        permanent: true,
      },
      {
        source: "/theme",
        destination: "/ui/docs/home/theme-configuration/customizing-theme",
        permanent: true,
      },
      {
        source: "/styling/:path*",
        destination: "/ui/docs/home/theme-configuration/customizing-theme",
        permanent: true,
      },
      {
        source: "/ui/docs/migration/native-base-to-gluestack-ui",
        destination:
          "https://v1.gluestack.io/ui/docs/guides/migration/native-base-to-gluestack-ui",
        permanent: true,
        basePath: false,
      },
      {
        source: "/ui/docs/home/overview/upgrade-to-v2",
        destination: "/ui/docs/guides/more/upgrade-to-v2",
        permanent: true,
      },
    ];
  },
  ...nextConfig,
});

export default config;
