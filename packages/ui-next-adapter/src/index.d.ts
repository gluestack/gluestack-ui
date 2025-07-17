import { NextConfig } from 'next';

export interface UIAdapterConfig {
  reactStrictMode?: boolean;
  typescript?: {
    ignoreBuildErrors?: boolean;
  };
  eslint?: {
    ignoreDuringBuilds?: boolean;
  };
  transpilePackages?: string[];
}

export interface UIWebpackOptions {
  isServer: boolean;
  dev: boolean;
  config: any;
  defaultLoaders: any;
  totalPages: number;
  webpack: any;
}

export type UIWebpackConfig = (config: any, options: UIWebpackOptions) => any;

export interface UITurbopackConfig {
  resolveAlias?: Record<string, string>;
  resolveExtensions?: string[];
}

/**
 * Wraps a Next.js config with UI component library optimizations
 */
export function withUIAdapter(userConfig?: NextConfig): NextConfig;

/**
 * Alternative function for creating UI-optimized config
 */
export function createUIConfig(userConfig?: NextConfig): NextConfig;

/**
 * Validates that the UI adapter is properly configured
 */
export function validateUIConfig(config: NextConfig): boolean;

/**
 * Default UI configuration object
 */
export const defaultUIConfig: UIAdapterConfig;

/**
 * UI-specific webpack configuration function
 */
export const uiWebpackConfig: UIWebpackConfig;

/**
 * UI-specific Turbopack configuration object
 */
export const uiTurbopackConfig: UITurbopackConfig;