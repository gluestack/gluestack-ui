const { getDefaultConfig } = require('expo/metro-config');
const { withUniwindConfig } = require('uniwind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withUniwindConfig(config, {
  cssEntryFile: './global.css',
  dtsFile: './uniwind-types.d.ts',
  extraThemes: [
    'default-light',
    'default-dark',
    'vercel-light',
    'vercel-dark',
    'violet-light',
    'violet-dark',
    'supabase-light',
    'supabase-dark',
    'claude-light',
    'claude-dark',
    'twitter-light',
    'twitter-dark',
  ],
});
