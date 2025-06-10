import { z } from 'zod';

export const PROJECT_SHARED_IGNORE = [
  '**/node_modules/**',
  '.next',
  'public',
  'dist',
  'build',
];

export const RawConfigSchema = z
  .object({
    tailwind: z.object({
      config: z.string().default('tailwind.config.js'),
      css: z.string().default('global.css'),
    }),
    app: z.object({
      entry: z.string().default(''),
      components: z.string().default('components/ui'),
    }),
  })
  .strict();

export const NextResolvedConfigSchema = z.object({
  tailwind: z.object({
    config: z.string().default(''),
    css: z.string().default('global.css'),
  }),
  config: z.object({
    postCssConfig: z.string().default('postcss.config.js'),
    tsConfig: z.string().default('tsconfig.json'),
    nextConfig: z.string().default('next.config.js'),
  }),
  app: z.object({
    type: z.string().optional(),
    entry: z.string(),
    registry: z.string().optional(),
    page: z.string().optional(),
  }),
});

export const ExpoResolvedConfigSchema = z.object({
  tailwind: z.object({
    config: z.string().default('tailwind.config.js'),
    css: z.string().default('global.css'),
  }),
  config: z.object({
    babelConfig: z.string().default('babel.config.js'),
    tsConfig: z.string().default('tsconfig.json'),
    metroConfig: z.string().default('metro.config.js'),
  }),
  app: z.object({
    type: z.string().optional(),
    entry: z.string(),
    sdk50: z.boolean().optional(),
  }),
});

export const ReactNativeResolvedSchema = z.object({
  tailwind: z.object({
    config: z.string().default('tailwind.config.js'),
    css: z.string().default('global.css'),
  }),
  config: z.object({
    babelConfig: z.string().default('babel.config.js'),
    tsConfig: z.string().default('tsconfig.json'),
    metroConfig: z.string().default('metro.config.js'),
  }),
  app: z.object({
    type: z.string().optional(),
    entry: z.string(),
  }),
});

export type RawConfig = z.infer<typeof RawConfigSchema>;
export type NextResolvedConfig = z.infer<typeof NextResolvedConfigSchema>;
export type ExpoResolvedConfig = z.infer<typeof ExpoResolvedConfigSchema>;
export type ReactNativeResolvedConfig = z.infer<
  typeof ReactNativeResolvedSchema
>;
